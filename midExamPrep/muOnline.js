function solve(text){
    let health = 100;
    let bitcoins = 0;

    let currHealth = 0;
    let tempHealth = 0;

    let notDead = true;

    let rooms = text.split('|');

    for(let i = 0; i < rooms.length; i++){
        let currBitcoin = 0;

        let command = rooms[i];
        let splitted = command.split(' ');

        if(splitted[0] === 'potion'){
            currHealth = health;
            tempHealth = health;

            currHealth += Number(splitted[1]);
            
            if(currHealth <= 100){
                health += Number(splitted[1]);
                console.log(`You healed for ${splitted[1]}.`);
                console.log(`Current health: ${currHealth}.`);
            }

            else if(currHealth > 100){
                let diff = 100 - tempHealth;
                health = 100;

                console.log(`You healed for ${diff}.`);
                console.log(`Current health: ${health}.`);
            }
        } 
        
        else if(splitted[0] === 'chest'){
            bitcoins += Number(splitted[1]);
            currBitcoin = Number(splitted[1]);
            console.log(`You found ${currBitcoin} bitcoins.`);
        }
        
        else{
            let attack = Number(splitted[1]);
            health -= attack;
            if(health > 0){
                console.log(`You slayed ${splitted[0]}.`)
            } else{
                console.log(`You died! Killed by ${splitted[0]}`);
                console.log(`Best room: ${i + 1}`);
                notDead = false;
                break;
            }
        }
    }

    if(notDead){
        console.log("You've made it!");
        console.log(`Bitcoins: ${bitcoins}`);
        console.log(`Health: ${health}`);
    }
    
}

solve('rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000')