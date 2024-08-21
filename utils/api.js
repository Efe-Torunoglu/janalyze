export const translateText = async (text) => {
    try {
        const response = await fetch('http://localhost:5328/api/translate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ text }),
        });

        if (!response.ok) {
            throw new Error('Translation failed');
        }

        const data = await response.json();

        return data.translation;
    } catch (error) {
        console.error('Translation error:', error);
        throw error;
    }
};

export const getGrammarExplanation = async (text) => {
    try {
        const response = await fetch('http://localhost:5328/api/grammarExplanation', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ text }),
        });

        if (!response.ok) {
            throw new Error('Grammar explanation failed');
        }

        const data = await response.json();

        return data.explanation;
    } catch (error) {
        console.error('Grammar error:', error);
        throw error;
    }
};

export const parseText = async (text) => {
    try {
        const response = await fetch('http://localhost:5328/api/parseText', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ text: text }),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json()
        return data;
    }
    catch(error){
        console.error('Error' , error);
        alert('An error occurred while analyzing the text. Please try again.');
    }
}


export const getDefinition = async (text) =>{
    try {
        const response = await fetch('http://localhost:5328/api/jisho', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ text: text }),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json()
        return data;
    }
    catch(error){
        console.error('Error' , error);
        alert('An error occurred while analyzing the text. Please try again.');
    }
}



