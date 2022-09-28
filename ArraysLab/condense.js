function solve(arr){
    if(arr.length <= 1){
        console.log(`${arr[0]} is already condensed to number`)
    } else {
        while(arr.length > 1){
            let condensed = Array(arr.length - 1);
            for(let i = 0; i < arr.length - 1; i++){
                condensed[i] = arr[i] + arr[i+1];
            }
            arr = condensed;
            console.log(arr[0])
        }
    }
    
    
}
solve([2, 10, 3])