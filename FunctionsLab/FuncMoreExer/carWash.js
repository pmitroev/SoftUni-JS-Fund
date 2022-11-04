function solve(commands){
    let cleanStatus = 0;

    for(let i = 0; i < commands.length; i++){
        let command = commands[i];
        switch(command){
            case 'soap':
                cleanStatus += 10; break;
            case 'water':
                cleanStatus *= 1.2; break;
            case 'vacuum cleaner':
                cleanStatus *= 1.25; break;
            case 'mud':
                cleanStatus *= 0.9; break;
        }
    }
    console.log(`The car is ${cleanStatus.toFixed(2)}% clean.`);
}
solve(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water'])