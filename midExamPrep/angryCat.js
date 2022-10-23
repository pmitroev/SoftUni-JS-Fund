function solve(arr, entry, type){
    let leftSum = 0;
    let rightSum = 0;
    let copy = arr;

    let leftSide = copy.slice(0, entry);
    
    let rightSide = copy.slice(entry + 1, copy.length);
    
    
    //смятане на лява част
    for(let i = 0; i < leftSide.length; i++){
        if(type === 'cheap'){
            let value = arr[entry];
            if(leftSide[i] < value){
                leftSum += leftSide[i];
            }

        } else if (type === 'expensive'){
            let value = arr[entry];
            if(leftSide[i] >= value){
                leftSum += leftSide[i];
            }
        }
    }

    //смятане на дясна част
    for(let i = 0; i < rightSide.length; i++){
        if(type === 'cheap'){
            let value = arr[entry];
            if(rightSide[i] < value){
                rightSum += rightSide[i];
            }

        } else if (type === 'expensive'){
            let value = arr[entry];
            if(rightSide[i] >= value){
                rightSum += rightSide[i];
            }
        }
    }

    if(leftSum > rightSum){
        console.log(`Left - ${leftSum}`);
    } else if (rightSum >leftSum){
        console.log(`Right - ${rightSum}`);
    } else {
        console.log(`Left - ${leftSum}`);
    }

    
}

solve([5, 10, 12, 5, 4, 20], 3, 'cheap');