function solve(arr){
    let resultArr = [];
    let arrSorted = arr.sort((a, b) => a - b);
    

    while(arrSorted.length > 0){
        let lastEl = arrSorted.pop();
        let firstEl = arrSorted.shift();
        resultArr.push(lastEl);
        resultArr.push(firstEl);
    }
    
    console.log(resultArr.join(' '))
}

solve([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])