function solve(n){
    let matrix = [];

    for(let i = 1; i <= n; i++){
        let output = '';
        for(let j = 1; j <= n; j++){
            output += `${n} `;
        }
        matrix.push(output);
    }
    console.log(matrix.join('\n'));
}

solve(3)