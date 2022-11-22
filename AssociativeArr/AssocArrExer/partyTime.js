function solve(party){
    let guestList = {};

    for (const line of party) {
        while(line !== 'PARTY') {
            guestList[line] = 0;
        }    
    }

    
}

solve([
    '7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc'
])