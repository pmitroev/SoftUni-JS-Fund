function solve(n1, op, n2){
    let res = 0;
    if (op === '+'){
        res = n1 + n2;
    } else if (op === '-'){
        res = n1 - n2;
    } else if (op === '*'){
        res = n1 * n2;
    } else if (op === '/'){
        res = n1 / n2
    }

    console.log(res.toFixed(2))

}

solve(25.5, '-', 3)
