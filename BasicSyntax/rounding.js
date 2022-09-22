function solve(num, precision){
    if(precision > 15){
        precision = 15;
    }
    const result = parseFloat(num.toFixed(precision));
    console.log(result)
}

solve(3.1415926535897932384626433832795,2)