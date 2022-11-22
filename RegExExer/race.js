function solve(input) {
    let racersArr = input.shift().split(', ');

    let raceObject = {};
    const patternName = /[A-Za-z]+/g
    const patternNums = /[0-9]/g
    
    let command = input.shift();
    
    while(command !== 'end of race') {
        const currentName = command.match(patternName).join('');
        const currentDist = command.match(patternNums).join('');
        let dist = 0;
        if (racersArr.includes(currentName)) {
            
            for (const digit of currentDist) {
                dist += Number(digit);
            }

            if (!raceObject.hasOwnProperty(currentName)) {
                raceObject[currentName] = dist;
            } else {
                raceObject[currentName] += dist;
            }
        }
        command = input.shift();
    }

    const sorted = Object.entries(raceObject).sort((a, b) => b[1] - a[1]);

    const firstPlace = sorted[0][0];
    const secondPlace = sorted[1][0];
    const thirdPlace = sorted[2][0];

    console.log(`1st place: ${firstPlace} \n2nd place: ${secondPlace} \n3rd place: ${thirdPlace}`);

    
}

solve([
    'George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@ ',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race'
    ])