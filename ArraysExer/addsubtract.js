function solve(arr){
    let newArr = [];
    let sum = 0;
    let newSum = 0;
    let buff;

    for(let i = 0; i <= arr.length -1; i++){
        sum += arr[i]
        
        if(arr[i] % 2 === 0){
            buff = arr[i] + i;
            newArr.push(buff);
            newSum += buff;
        } else {
            buff = arr[i] - i;
            newArr.push(buff);
            newSum += buff;
        }
    }
    console.log(newArr);
    console.log(sum);
    console.log(newSum);
}
solve([-5, 11, 3, 0, 2]);