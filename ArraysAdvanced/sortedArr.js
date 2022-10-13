function solve(arr){
    arr.sort((a, b) => a - b);
    let newArr = [];
    for (let i = 0; i <= 1; i++){
        newArr.push(arr[i]);
    }
    console.log(newArr.join(' '));
}
solve([30, 15, 50, 5])