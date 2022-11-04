function solve(input){
    const words = input.shift().split(' ');
    let result = {};

    //задаваме в асоциативния масив ключовете със стойностите
    for (const word of words) {
        result[word] = 0;
    }
    
    //проверяваме дали думите съвпадат
    for (const word of input) {
        if(result.hasOwnProperty(word)){
            result[word]++;
        }
    }
    
    //сортираме по низходящ ред
    const sorted = Object.entries(result).sort((a, b) => b[1] - a[1]);

    //принтираме на конзолата
    for (const kvp of sorted) {
        console.log(`${kvp[0]} - ${kvp[1]}`);
    }
    
    
}

solve([
    'this sentence', 
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
    ])