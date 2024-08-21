'use client';
import React, { useState } from 'react';
import InputBox from '../components/InputBox';
import OutputBox from '../components/OutputBox';
import Header from "@/components/Header";
import { translateText, getGrammarExplanation, parseText } from '../utils/api';

export default function Home() {
    const [inputText, setInputText] = useState('');
    const [outputs, setOutputs] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleAction = async (actionType) => {
        setIsLoading(true);
        setError(null);
        try {
            let result;
            let heading;
            switch (actionType) {
                case 'translate':
                    result = await translateText(inputText);
                    heading = 'Translation';
                    break;
                case 'grammar':
                    result = await getGrammarExplanation(inputText);
                    heading = 'Grammar Explanation';
                    break;
                case 'parse':
                    result = await parseText(inputText);
                    heading = 'Parsed Result';
                    break;
            }
            setOutputs(prevOutputs => ({
                ...prevOutputs,
                [actionType]: { heading, text: result }
            }));
        } catch (err) {
            setError(`Failed to ${actionType}. Please try again.`);
        } finally {
            setIsLoading(false);
        }
    };

    const handleClear = () => {
        setInputText('');
        setOutputs({});
        setError(null);
    };

    return (
        <body>
        <Header/>
            <div className="min-h-screen bg-gray-100 py-12  px-4 sm:px-6 lg:px-8">
                <div className="max-w-2xl mx-auto overflow-hidden">
                    <InputBox
                        inputText={inputText}
                        setInputText={setInputText}
                        onTranslate={() => handleAction('translate')}
                        onGrammar={() => handleAction('grammar')}
                        onParse={() => handleAction('parse')}
                        onClear={handleClear}
                        isLoading={isLoading}
                    />
                    {isLoading && (
                        <p className="text-center text-lg py-4">Processing...</p>
                    )}
                    {error && <p className="text-center text-red-500 py-4">{error}</p>}
                    <div className="p-6 space-y-6">
                        {Object.entries(outputs).map(([type, output]) => (
                            <OutputBox
                                key={type}
                                heading={output.heading}
                                text={output.text}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </body>
    );
}