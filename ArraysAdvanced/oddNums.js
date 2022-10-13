function solve(arr){
    let newArr = [];
    for (let i = 0; i < arr.length; i++){
        if(i % 2 != 0){
            let currNum = arr[i] * 2;
            newArr.push(currNum);
        }
    }
    newArr.reverse();
    console.log(newArr.join(' '))
}

solve([10, 15, 20, 25])