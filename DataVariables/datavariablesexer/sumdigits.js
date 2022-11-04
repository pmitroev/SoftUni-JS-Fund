function solve(number){
    let str = String(number);
    let sum = 0;
    for(let i = 0; i < str.length; i++){
        sum += Number(str[i]);
    }
    console.log(sum)
}

solve(12345)