import React, { useState } from 'react';
import {JishoDefinitions, JishoReadings} from "@/utils/JishoDefinitions";
import {getDefinition} from "@/utils/api";

const ClickableWords = ({ words }) =>{

    //const [popupInfo, setPopupInfo] = useState({ word: null, definitions: [], position: { top: 0, left: 0 } });
    const [word, setWord] = useState('')
    const [definitions, setDefinitions] = useState([])
    const [readings, setReadings] = useState([])

    const handleClick = async (inputWord, event) => {
        console.log(`Clicked on: ${inputWord}`);

        const rect = event.target.getBoundingClientRect();


        setWord(inputWord)

        let defResults = await getDefinition(inputWord);
        let parsedResults = JishoDefinitions(defResults)
        let readingsResults = JishoReadings(defResults)

        setDefinitions(parsedResults);
        setReadings(readingsResults)
    };

    const handleClosePopup = () => {
        setWord('')
    };

    return (
        <div className="relative space-y-6" style={{ minHeight: '200px' }}>
            <div className="flex flex-wrap gap-2">
                {words.map((word, index) => (
                    <button
                        key={index}
                        onClick={(e) => handleClick(word, e)}
                        className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
                    >
                        {word}
                    </button>
                ))}
            </div>
            {word && (
                <div
                    className="w-full bg-gray-200 rounded shadow-lg p-4"
                >
                    <div className="flex justify-between items-center mb-2 y-4">
                        <h3 className="font-bold text-lg">{word}</h3>
                        <button onClick={handleClosePopup} className="text-gray-500 hover:text-gray-700 text-2xl">
                            ×
                        </button>
                    </div>
                    <div className="border-t pt-2">
                        {readings.map((def, index) => (
                            <p key={index} className="mb-2">{index + 1}. {def}</p>
                        ))}
                    </div>
                    <div className="border-t pt-2">
                        {definitions.map((def, index) => (
                            <p key={index} className="mb-2">{index + 1}. {def}</p>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};
export default ClickableWords;