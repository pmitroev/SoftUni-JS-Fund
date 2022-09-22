function solve(string, char, result){
    let str = string.replace('_', char);
    let output = str === result? 'Matched': 'Not Matched';
    console.log(output);
}

solve('Str_ng', 'i', 'String')