function solve(n1, n2, func) {
    // let final = 0;
    // switch (func) {
    //     case 'multiply':
    //         final = n1 * n2; break;
    //     case 'divide':
    //         final = n1 / n2; break;
    //     case 'add':
    //         final = n1 + n2; break;
    //     case 'subtract':
    //         final = n1 - n2; break;
    // }
    // console.log(final)
    let ops = {
        multiply: n1 * n2,
        divide: n1 / n2,
        add: n1 + n2,
        subtract: n1 - n2
    }
    console.log(ops[func])
}


solve(5,5,'multiply')