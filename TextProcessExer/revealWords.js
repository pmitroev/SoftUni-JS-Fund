function solve(words, text){
    const wordsArr = words.split(', ');
    wordsArr.forEach(word => {
        const match = ` ${'*'.repeat(word.length)} `;
        text = text.replace(match, ` ${word} `);
    });

    console.log(text.trim());
}

solve('great',
'softuni is ***** place for learning new programming languages')