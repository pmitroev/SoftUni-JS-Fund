function solve(input) {
    let n = Number(input.shift());

    let pattern = /\|(?<boss>[A-Z]{4,})\|:#(?<title>[A-Za-z]+\s[A-Za-z]+)#/;
    
    for (const line of input) {
        let match = pattern.exec(line);

        if(match) {
            let name = match.groups.boss;
            let title = match.groups.title;
            
            let strength = name.length;
            let armor = title.length;

            console.log(`${name}, The ${title}`);
            console.log(`>> Strength: ${strength}`);
            console.log(`>> Armor: ${armor}`);
        } else {
            console.log('Access denied!');
        }
    }

    
}

solve([
    '3',
    '|PETER|:#Lead architect#',
    '|GEORGE|:#High Overseer#',
    '|ALEX|:#Assistant Game Developer#'
    ])