function solve(arr, nums){
    let map = nums[0];
    let del = nums[1];
    let n = nums[2];
    let newArr = [];
    let nCount = 0;

    for(let i = 0; i < map; i++){
        newArr.push(arr[i]);
    }

    for(let i = 0; i < del; i++){
        newArr.shift();
    }

    for(let i = 0; i < newArr.length; i++){
        if(n === newArr[i]){
            nCount++;
        }
    }

    console.log(`Number ${n} occurs ${nCount} times.`)

    
}

solve([5, 2, 3, 4, 1, 6],
[5, 2, 3]);