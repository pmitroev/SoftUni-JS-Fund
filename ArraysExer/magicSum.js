function solve(arr, magicNum){
    let newArr = [];
    for (let i = 0; i < arr.length; i++){
        let currentEl = arr[i];
        newArr.push(currentEl);
        for(let j = i + 1; j < arr.length; j++){
            currentEl = arr[j];
            newArr.push(currentEl);
            if(newArr[0] + newArr[1] != 8){
                break;
            }
            if(newArr.length > 2){
                break;
            }
        }
    }
    console.log(newArr.join(' '));
}

solve([1, 7, 6, 2, 19, 23],
8)