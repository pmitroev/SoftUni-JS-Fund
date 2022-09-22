function solve(n){
    let buff = '';
    for(let i = 1; i <= n; i++){
        for(let j = 1; j <= i; j++){
            buff += i + ' ';
        }
        buff += '\n';
    }
    console.log(buff)
}

solve(5)