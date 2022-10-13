function solve(num, prev){
    let arr = [1];

    
    for (let i = 1; i < num; i++){
        let sum = 0;
        let start = Math.max(0, i - prev);

        for(let j = start; j < i; j++){
            sum += arr[j];
        }
        arr[i] = sum;
    }
    console.log(arr.join(' '));
}

solve(6, 3);