function solve(num){
    let isPrime = true;
    if(num % num === 0 && num % 1 === 0){
        console.log(isPrime)
    }else {
        isPrime = false;
        console.log(isPrime);
    }
}

solve(9)