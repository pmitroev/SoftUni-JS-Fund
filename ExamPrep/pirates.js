function solve(input) {
    let cities = {};
    let arr = [];


    while (input[0] != 'Sail') {
        let line = input.shift().split('||');

        let city = line[0];
        let population = Number(line[1]);
        let gold = Number(line[2]);

        let result = arr.find((x) => x.city === city);
        let index = arr.indexOf(result);

        if (result) {
            arr[index].population += population;
            arr[index].gold += gold;
        } else {
            cities = { city, population, gold };
            arr.push(cities)
        }
    }


    while (input[0] != 'End') {
        let line = input.shift().split('=>');

        let command = line[0];

        switch(command) {
            case 'Plunder': {
                let town = line[1];
                let people = Number(line[2]);
                let gold = Number(line[3]);

                console.log(`${town} plundered! ${gold} gold stolen, ${people} citizens killed.`);

                let result = arr.find((x) => x.city === town);
                let index = arr.indexOf(result);

                arr[index].population -= people;
                arr[index].gold -= gold;

                if(arr[index].population <= 0 || arr[index].gold <= 0) {
                    arr.splice(index, 1);
                    console.log(`${town} has been wiped off the map!`);
                }
                break; 
            }
            
            case 'Prosper': {
                let town = line[1];
                let gold = Number(line[2]);

                let result = arr.find((x) => x.city === town);
                let index = arr.indexOf(result);

                if (gold >= 0) {
                    arr[index].gold += gold;
                } else {
                    console.log('Gold added cannot be a negative number!');
                    break;
                }

                console.log(`${gold} gold added to the city treasury. ${town} now has ${arr[index].gold} gold.`);
                
                break; 
            }

        }
    }

    if(arr.length > 0) {
        console.log(`Ahoy, Captain! There are ${arr.length} wealthy settlements to go to: `);
        arr.forEach(town => {
            console.log(`${town.city} -> Population: ${town.population} citizens, Gold: ${town.gold} kg`);
        });
    } else {
        console.log('Ahoy, Captain! All targets have been plundered and destroyed!');
    }
}

solve([
    "Nassau||95000||1000",
    "San Juan||930000||1250",
    "Campeche||270000||690",
    "Port Royal||320000||1000",
    "Port Royal||100000||2000",
    "Sail",
    "Prosper=>Port Royal=>-200",
    "Plunder=>Nassau=>94000=>750",
    "Plunder=>Nassau=>1000=>150",
    "Plunder=>Campeche=>150000=>690",
    "End"
    ])