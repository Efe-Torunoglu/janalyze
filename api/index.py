from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
import requests
import os
from dotenv import load_dotenv
from anthropic import Anthropic
import re
from janome.tokenizer import Tokenizer
import string
import unicodedata

load_dotenv()

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})
#CORS(app, supports_credentials=True, origins="http://localhost:3000")

DEEPL_API_KEY = os.getenv('DEEPL_API_KEY')
ANTHROPIC_API_KEY = os.getenv('ANTHROPIC_API_KEY')

anthropic = Anthropic(api_key=ANTHROPIC_API_KEY)
t = Tokenizer()

def clean_list(input):
    seen = set()
    result = []
    for x in input:
        if x not in seen and x != '': # checking for empty, easiest here.
            seen.add(x)
            result.append(x)
    return result

def remove_punctuation(string_list):
    japanese_punctuation = '　、。，．・：；？！゛゜´｀¨＾￣＿ヽヾゝゞ〃仝々〆〇ー―‐／＼～∥｜…‥''""（）〔〕［］｛｝〈〉《》「」『』【】＋－±×÷＝≠＜＞≦≧∞∴♂♀°′″℃￥＄￠￡％＃＆＊＠§☆★○●◎◇◆□■△▲▽▼※〒→←↑↓〓'
    characters_to_remove = japanese_punctuation + '　 '

    translator = str.maketrans('', '', characters_to_remove)

    return [unicodedata.normalize('NFKC', s).translate(translator) for s in string_list]

@app.route('/api/jisho', methods = ['POST'])
def jisho_proxy():
    data = request.json
    keyword = data.get('text', '')

    print(keyword)
    response = requests.get(f'https://jisho.org/api/v1/search/words?keyword={keyword}')
    return jsonify(response.json())

@app.route('/api/parseText', methods = ['POST'])
def parseText():
    data = request.json
    japanese_text = data.get('text' ,'')

    tokens = t.tokenize(japanese_text)
    words = clean_list(remove_punctuation([token.base_form for token in tokens]))

    return jsonify(words)

@app.route('/api/translate', methods = ['POST'])
def translate():
    data = request.json
    japanese_text = data.get('text' ,'')

    # Deepl Section:
    deepl_response = requests.post(
        'https://api-free.deepl.com/v2/translate',
                headers={'Authorization': f'DeepL-Auth-Key {DEEPL_API_KEY}'},
        data={
            'text': japanese_text,
            'target_lang': 'EN'
        }
    )

    translation = deepl_response.json()['translations'][0]['text']

    return jsonify({
        'translation': translation,
    })


@app.route('/api/grammarExplanation', methods=['POST', 'OPTIONS'])
def getGrammarExplanation():
    if request.method == 'OPTIONS':
        # Handling preflight request
        return '', 204
    data = request.json
    japanese_text = data.get('text' ,'')

    prompt = f"""
        Analyze the following Japanese text and its English translation:

        Do not say anything like Certainly, I'd be happy to. Make the analysis read like a dry scientific paper.

        Japanese: {japanese_text}

        Do not provide an English Translation of this sentence.

        Do not say anything before Particles and their functions. Go immedeatly into the analysis.

        Provide a grammatical explanation of this text, paying special attention to:
        1. Particles used and their functions, make sure to especially explain rarer particles or particles being used in odd ways.
            If wa and ga are used in the same sentence, explain the nuance between the two in that sentence.
        2. Verb tenses and their implications
        3. Any complex grammatical structures or complex sentence structures.
        4. Nuances that might be lost in translation

        Please structure your response in a clear, easy-to-understand format, using bullet points and line breaks.
        Most importantly, do not, under any circumstance use romanji, for kanji readings use furigana.
        Furthermore, do not say certainly at the beginning and do not act like an agent. Present the information plainly.
    """

    claude_response = anthropic.messages.create(
        model="claude-3-haiku-20240307",
        max_tokens=1000,
        system="You are a helpful assistant that specializes in Japanese language and grammar.",
        messages=[
            {"role": "user", "content": prompt}
        ]
    )
    explanation = claude_response.content[0].text

    return jsonify({
        'explanation':explanation
    })

if __name__ == '__main__':
    app.run(port=5328)