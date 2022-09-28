function solve(arr){
    let sumEven = 0;
    let sumOdd = 0;
    for(let i = 0; i <= arr.length - 1; i++){
        let num = Number(arr[i]);
        if(num % 2 == 0){
            sumEven += num;
        } else {
            sumOdd += num;
        }
    }
    
    console.log(sumEven - sumOdd);

}
solve(['3', '5', '7', '9']);