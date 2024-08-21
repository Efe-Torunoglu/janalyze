function JishoDefinitions(jishoData) {
    if (!jishoData.data || jishoData.data.length === 0) {
        console.log("No data returned from Jisho API");
        return "No Jisho data found";
    }
    const firstResult = jishoData.data[0];

    // Get all senses with parts of speech and definitions
    const sensesInfo = firstResult.senses.map((sense, index) => {
        const pos = sense.parts_of_speech.join(', ') || 'N/A';
        const definitions = sense.english_definitions.join(', ');
        return `${index + 1}. (${pos}) ${definitions}`;
    })
    return sensesInfo
}

function JishoReadings(jishoData) {

    if (!jishoData.data || jishoData.data.length === 0) {
        console.log("No data returned from Jisho API");
        return "No Jisho data found";
    }
    const firstResult = jishoData.data[0];

    const readings = firstResult.japanese
        .map(item => `${item.word || ''} (${item.reading || ''})`)
        .filter(reading => reading !== ' ()');

    return readings
}

export {JishoDefinitions, JishoReadings}