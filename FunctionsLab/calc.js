function solve(n1, n2, func) {
    let final = 0;
    switch (func) {
        case 'multiply':
            final = n1 * n2; break;
        case 'divide':
            final = n1 / n2;
        case 'add':
            final = n1 + n2;
        case 'subtract':
            final = n1 - n2;
    }
    console.log(final)
}

solve(5,5,'multiply')