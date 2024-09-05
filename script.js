const findWord = () => {
    const wordInput = document.getElementById('wordInput').value.trim();
    apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${wordInput}`

    fetch(apiUrl)
    .then(res => res.json())
    .then(data => {


        
            const result = document.getElementById('result');

            result.innerHTML = `
                <h2 class=' mb-2 mt-3'><strong>Word :</strong> ${data[0].word}</h2>
                <p class=' mb-2'><strong>Parts Of Speech :</strong> ${data[0].meanings[0].partOfSpeech}</p>
                <p class=' mb-2'><strong>Meaning :</strong> ${data[0].meanings[0].definitions[0].definition}</p>
                <p class=' mb-2'><strong>Synonyms :</strong> ${data[0].meanings[0].synonyms}</p>
                <p><strong>Antonyms :</strong> ${data[0].meanings[0].antonyms}</p>
            `
            document.getElementById('wordInput').value = "";
        
    })
}