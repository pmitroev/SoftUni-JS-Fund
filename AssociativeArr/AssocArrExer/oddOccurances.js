function solve(sentence){
    let sentenceArr = sentence.toLowerCase().split(' ');
    let result = {};
    let output = '';

    for (const word of sentenceArr) {
        result[word] = 0;
    }

    for (const word of sentenceArr) {
        if(result.hasOwnProperty(word)){
            result[word]++;
        }
    }

    let sorted = Object.entries(result).sort((a, b) => b[1] - a[1])
    for (const key of sorted) {
        if(key[1] % 2 !== 0){
            output += `${key[0]} `
        }
    }
    console.log(output);
}

solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')