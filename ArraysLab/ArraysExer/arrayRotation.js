function solve(arr, n){
    

    for(let i = 0; i < n; i++){
        let num = arr.shift();
        arr.push(num);
    }
    console.log(arr.join(' '));
    
    
}

solve([51, 47, 32, 61, 21], 2);