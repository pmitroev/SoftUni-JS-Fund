function solve(arr){
    let buff = '';
    for(let i = arr.length - 1; i >= 0; i--){
        buff += arr[i] + ' ';
    }
    console.log(buff)
}

solve(['a', 'b', 'c', 'd', 'e'])