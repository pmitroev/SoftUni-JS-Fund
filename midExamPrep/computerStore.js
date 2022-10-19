function solve(arr) {
    let sum = 0;
    let index = 0;
    let isSpecial = 0;

    for (let i = 0; i < arr.length; i++) {
        let currentEl = arr[i];

        if (currentEl === 'special') {
            isSpecial = true;
            break;
        } else if (currentEl === 'regular') {
            isSpecial = false;
            break;
        }

        let num = Number(currentEl);
        if (num < 0) {
            console.log('Invalid price!');
        } else {
            sum += num;
        }

    }
    let taxes = sum * 0.2;
    let costWithTax = sum * 1.2;

    if (costWithTax == 0) {
        console.log('Invalid order!');
        return;
    }

    if (isSpecial) {
        let discounted = costWithTax * 0.9;
        console.log("Congratulations you've just bought a new computer!");
        console.log(`Price without taxes: ${sum.toFixed(2)}$`);
        console.log(`Taxes: ${taxes.toFixed(2)}$`);
        console.log('-----------');
        console.log(`Total price: ${discounted.toFixed(2)}$`);
    } else {
        console.log("Congratulations you've just bought a new computer!");
        console.log(`Price without taxes: ${sum.toFixed(2)}$`);
        console.log(`Taxes: ${taxes.toFixed(2)}$`);
        console.log('-----------');
        console.log(`Total price: ${costWithTax.toFixed(2)}$`);
    }

}

solve([
    '1050',
    '200',
    '-450',
    '2',
    '18.50',
    '16.86',
    'special'
]);