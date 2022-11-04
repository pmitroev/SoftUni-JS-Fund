function solve(number) {
    let percentCount = '%'.repeat(number / 10);
    let dotCount = '.'.repeat(10 - (number / 10));
    
    
    if (number === 100) {
        console.log('100% Complete!');
    } else if (number < 100) {
        console.log(`${number}% [${percentCount}${dotCount}]`);
        console.log('Still loading...')
    }
}

solve(30)