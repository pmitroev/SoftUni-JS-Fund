function solve(input) {
    let stops = input.shift();
    let newTrip = '';

    let line = input.shift();
    while (line !== 'Travel') {
        let [command, value1, value2] = line.split(':');

        switch(command) {
            case 'Add Stop':
                let index = Number(value1);
                if (index >= 0 && index < stops.length) {
                    newTrip = stops.slice(0, index) + value2 + stops.slice(index);
                }
                stops = newTrip;

                break;  
            
            case 'Remove Stop':
                let start = Number(value1);
                let end = Number(value2);
                
                if (start >= 0 && start < stops.length && end >= 0 && end < stops.length) {
                    newTrip = stops.slice(0, start) + stops.slice(end + 1);
                }
                stops = newTrip;
                
                break;
            
            case 'Switch':
                if (stops.includes(value1)) {
                    newTrip = stops.replace(value1, value2);
                }
                stops = newTrip;
                break;
                
        }
        console.log(stops);
        line = input.shift();
    }
    
    console.log(`Ready for world tour! Planned stops: ${stops}`);
}

solve([
    "Hawai::Cyprys-Greece",
    "Add Stop:7:Rome",
    "Remove Stop:11:16",
    "Switch:Hawai:Bulgaria",
    "Travel"
    ])