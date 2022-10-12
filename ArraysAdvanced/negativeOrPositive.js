function solve(arr){
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        let el = Number(arr[i]);
        if(el < 0){
            newArr.unshift(el);
        }else {
            newArr.push(el);
        }
    }

    console.log(newArr.join('\n'));
}

solve(['7', '-2', '8', '9'])