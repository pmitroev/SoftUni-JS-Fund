function solve(arr1, arr2){
    let count = 0;
    let comArr = [];

    for(let i = 0; i <= arr1.length - 1; i++){
        for(let j = 0; j <= arr2.length - 1; j++){
            if(arr1[i] === arr2[j]){
                count++;
                comArr.push(arr1[i]);
            }
        }
    }

    for(let i = 0; i <= count - 1; i++){
        console.log(comArr[i]);
    }
}

solve(['Hey', 'hello', 2, 4, 'Peter', 'e'],
['Petar', 10, 'hey', 4, 'hello', '2']);