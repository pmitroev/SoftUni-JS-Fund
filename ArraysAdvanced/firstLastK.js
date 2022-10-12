function solve(arr){
    let shift = arr.shift();
    let firstPart = arr.slice(0, shift);
    let second = arr.slice(arr.length - shift);
    console.log(firstPart.join(' '));
    console.log(second.join(' '));
}

solve([2, 7, 8, 9]);