function solve(num){
    let numberToString = String(num);
    let eachNum = numberToString.split('');

    let evenSum = 0;
    let oddSum = 0;
    
    for(let i = 0; i < eachNum.length; i++){
        let currNum = Number(eachNum[i]);
        if(currNum % 2 === 0){
            evenSum += currNum;
        }else {
            oddSum += currNum;
        }
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`)
}
solve(1000345);