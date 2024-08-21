'use client';
import React, { useState } from 'react';


export default function InputBox({ inputText, setInputText, onTranslate,onGrammar, onParse, onClear, isLoading }) {

    const handleInputChange = (e) => {
        setInputText(e.target.value);
    };

    return (
        <header className="w-full max-w-4xl text-center p-8 bg-gray-100">
                <h1 className="text-4xl font-bold mb-2">
                    Janalyze
                </h1>
                <h2 className="text-2xl mb-6">
                    日本語アナライザー
                </h2>
                <div className="w-full">
                    <input
                        type="text"
                        value={inputText}
                        onChange={handleInputChange}
                        placeholder="Enter Japanese text here"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <div className="flex space-x-2 mt-4">
                        <button
                            onClick={onParse}
                            disabled={isLoading}
                            className={`flex-1 bg-gray-200 text-black font-semibold py-2 px-6 border border-gray-300 rounded hover:bg-gray-300 transition ${
                                isLoading
                                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                    : 'bg-gray-200 text-black hover:bg-gray-300'
                            }`}
                        >
                            Parse
                        </button>
                        <button
                            onClick={onTranslate}
                            disabled={isLoading}
                            className={`flex-1 bg-gray-200 text-black font-semibold py-2 px-6 border border-gray-300 rounded hover:bg-gray-300 transition ${
                                isLoading
                                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                    : 'bg-gray-200 text-black hover:bg-gray-300'
                            }`}
                        >
                            Translate

                        </button>
                        <button
                            onClick={onGrammar}
                            disabled={isLoading}
                            className={`flex-1 bg-gray-200 text-black font-semibold py-2 px-6 border border-gray-300 rounded hover:bg-gray-300 transition ${
                                isLoading
                                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                    : 'bg-gray-200 text-black hover:bg-gray-300'
                            }`}
                        >
                            Grammar
                        </button>
                        <button
                            onClick={onClear}
                            disabled={isLoading}
                            className={`flex-1 bg-gray-200 text-black font-semibold py-2 px-6 border border-gray-300 rounded hover:bg-gray-300 transition ${
                                isLoading
                                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                    : 'bg-gray-200 text-black hover:bg-gray-300'
                            }`}
                        >
                            Clear
                        </button>
                    </div>
                </div>
            </header>
    );
}