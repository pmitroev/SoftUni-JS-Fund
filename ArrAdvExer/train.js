function solve(arr) {
    let passengersOnTrain = arr
        .shift()
        .split(' ')
        .map(Number);

    let maxCapacity = arr.shift();

    for (let i = 0; i < arr.length; i++) {
        let currRow =  arr[i].split(' ');

        if(currRow[0] === 'Add'){
            passengersOnTrain.push(Number(currRow[1]));
        } else {
            for (let j = 0; j < passengersOnTrain.length; j++){
                let passInCurrentWagon = passengersOnTrain[j];
                if(passInCurrentWagon + Number(currRow[0]) <= maxCapacity){
                    passengersOnTrain[j] += Number(currRow[0]);
                    break;
                }
            }
        }
    }

    console.log(passengersOnTrain.join(' '));
}

solve(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75']);