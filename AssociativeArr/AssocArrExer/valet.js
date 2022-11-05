function solve(cars){
    let result = {};

    for (const line of cars) {
        let [command, car] = line.split(', ');
        if(command === 'IN'){
            result[car] = true;
        } else if (command === 'OUT') {
            if (result.hasOwnProperty(car)){
                delete result[car];
            }
        }
    }
    
    let sorted = Object.entries(result).sort((a, b) => a[0].localeCompare(b[0]));
    // console.log(result);
    for (const car of sorted) {
        console.log(car[0]);
    }
}

solve([
    'IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU'
])