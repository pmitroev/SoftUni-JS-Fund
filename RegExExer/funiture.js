function solve(input) {
    const pattern = />>(?<name>[A-Za-z]+)<<(?<price>[\d]+[\.]*[\d]+)!(?<quantity>[\d]+)/gm
    let totalMoney = 0;
    let index = 0;


    console.log('Bought furniture:');
    while(input[index] !== 'Purchase') {
        let row = input[index];;
        let validProduct = pattern.exec(row);

        while(validProduct !== null) {
            const productName = validProduct.groups['name'];
            console.log(productName);

            const productPrice = validProduct.groups['price'];
            const productQuantity = validProduct.groups['quantity'];

            totalMoney += productPrice * productQuantity;
            
            validProduct = pattern.exec(row);
        }
        
        index++;
    }
    console.log(`Total money spend: ${totalMoney.toFixed(2)}`);
}

solve([
'>>Sofa<<312.23!3',
'>>TV<<300!5',
'>Invalid<<!5',
'Purchase'
])