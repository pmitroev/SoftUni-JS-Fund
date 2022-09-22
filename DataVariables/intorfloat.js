function solve(n1, n2, n3){
    let result = n1 + n2 + n3;
    
    result % 1 === 0 ? result += ' - Integer': result += ' - Float';
    console.log(result);
    
}

solve(9, 100, 1.1)