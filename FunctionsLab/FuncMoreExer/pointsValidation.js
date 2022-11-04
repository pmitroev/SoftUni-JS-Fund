function solve(cordinates){
    let x1 = cordinates[0];
    let y1 = cordinates[1];
    
    let x2 = cordinates[2];
    let y2 = cordinates[3];

    let zeroX = 0;
    let zeroY = 0;

    let oneToZero = Math.sqrt(Math.pow((zeroX - x1), 2) - Math.pow((zeroY - y1), 2));
    // console.log(oneToZero)

    let twoToZero = Math.sqrt(Math.pow((zeroX - x2), 2) - Math.pow((zeroY - y2), 2));

    let oneToTwo = Math.sqrt(Math.pow((x2 - x1), 2) - Math.pow((y2 - y1), 2));

    // if(oneToZero.isInteger()){
    //     console.log(`{${x1}, ${y1}} to {${zeroX}, ${zeroY}} is valid`)
    // } else{
    //     console.log(`{${x1}, ${y1}} to {${zeroX}, ${zeroY}} is invalid`)
    // }

    // if(twoToZero.isInteger()){
    //     console.log(`{${x2}, ${y2}} to {${zeroX}, ${zeroY}} is valid`)
    // } else{
    //     console.log(`{${x2}, ${y2}} to {${zeroX}, ${zeroY}} is invalid`)
    // }

    // if(oneToZero.isInteger()){
    //     console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`)
    // } else{
    //     console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`)
    // }

    let oneInt = oneToZero.isInteger(Math.sqrt(Math.pow((zeroX - x1), 2) - Math.pow((zeroY - y1), 2)));
    console.log(oneInt)
}

solve([3, 0, 0, 4]);