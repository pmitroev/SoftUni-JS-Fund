function solve(arr1, arr2){
    let sum = 0;
    let eqaul = false;
    let diffIndex;
    for(let i = 0; i <= arr1.length - 1; i++){
        if(arr1[i] === arr2[i]){
            eqaul = true;
            sum += Number(arr1[i]);
        }
        else {
            eqaul = false;
            diffIndex = i;
            break;
        }
    }
    if(eqaul == true){
        console.log(`Arrays are identical. Sum: ${sum}`);
    } else {
        console.log(`Arrays are not identical. Found difference at ${diffIndex} index`);
    }
    
}
solve(['1','2','3','4','5'], ['1','2','4','4','5'])