import react from 'react'
import ClickableWords from "@/components/ClickableWords";

const OutputBox = ({ heading, text }) => {
    console.log(text);
    if(typeof text === 'string'){
        return (
            <div className="w-full max-w-4xl p-4 bg-gray-100 border border-gray-300 rounded-md shadow-md">
                <h2 className="text-xl font-semibold mb-2">{heading}</h2>
                <p className="text-sm">{text}</p>
            </div>
        );
    }
    else{
        return (
            <div className="w-full max-w-4xl p-4 bg-gray-100 border border-gray-300 rounded-md shadow-md">
                <h2 className="text-xl font-semibold mb-2">{heading}</h2>
                <ClickableWords words = {text}/>
            </div>
        );
    }

};

export default OutputBox;