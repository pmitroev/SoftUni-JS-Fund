function solve(input) {
    let n = Number(input.shift());
    let carObj = {};
    
    for (let i = 0; i < n; i++) {
        let currentCar = input.shift();
        let [car, mileage, fuel] = currentCar.split('|');

        carObj[car] = {
            mileage : Number(mileage),
            fuel : Number(fuel),
        }
    }

    let line = input.shift();

    while(line != 'Stop') {
        let [command, car, value1, value2] = line.split(' : ');
        

        switch (command) {
            case 'Drive': {
                let distance = Number(value1);
                let fuel = Number(value2);
                if (carObj[car].fuel < fuel) {
                    console.log('Not enough fuel to make that ride');
                } else {
                    carObj[car].mileage += distance;
                    carObj[car].fuel -= fuel;

                    console.log(`${car} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);
                }

                if (carObj[car].mileage > 100000) {
                    console.log(`Time to sell the ${car}!`);
                    delete carObj[car];   
                }

                break; 
            }
                
            case 'Refuel': {
                let fuel = Number(value1);
                carObj[car].fuel += fuel;
                if(carObj[car].fuel > 75) {
                    console.log(`${car} refueled with ${75 - (carObj[car].fuel - fuel)}`);
                    carObj[car].fuel = 75;
                } else {
                    console.log(`${car} refueled with ${fuel} liters`);
                }

                

                break;
            }

            case 'Revert': {
                let kilometers = Number(value1);

                carObj[car].mileage -= kilometers;

                if (carObj[car].mileage < 10000) {
                    carObj[car].mileage = 10000;
                } else {
                    console.log(`${car} mileage decreased by ${kilometers} kilometers`);
                }
            }
        }

        line = input.shift();
    }

    for (const car in carObj) {
        console.log(`${car} -> Mileage: ${carObj[car].mileage} kms, Fuel in the tank: ${carObj[car].fuel} lt.`);
    }
}

solve([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'
    ])