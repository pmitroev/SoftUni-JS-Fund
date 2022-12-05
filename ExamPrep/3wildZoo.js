function solve(input) {
    let zoo = {};

    let line = input.shift();
    while (line !== 'EndDay') {
        let [command, args] = line.split(' ');
        let tokens = args.split('-');
        let name = tokens[0];
        let food = Number(tokens[1]);
        let area = tokens[2];


        if (command === 'Add:') {
            if (zoo[name]) {
                zoo[name].food += food
            } else {
                zoo[name] = {
                    food,
                    area
                }
            }

        } else if (command === 'Feed:') {
            if (zoo[name]) {
                zoo[name].food -= food;

                if (zoo[name].food <= 0) {
                    console.log(`${name} was successfully fed`);
                    delete zoo[name];
                }
            } else {
                break;
            }
        }


        line = input.shift();
    }

    console.log('Animals:');

    for (const animal in zoo) {
        console.log(` ${animal} -> ${zoo[animal].food}g`);
    }

    console.log('Areas with hungry animals:');
    let areas = {};
    for (const name in zoo) {
        let [foodNeeded, area] = Object.values(zoo[name]);

        if (areas[area]) {
            areas[area].counter += 1;
        } else {
            areas[area] = {
                counter: 1,
            }
        }
    }

    for (const area in areas) {
        let count = Object.values(areas[area]);
        console.log(`${area}: ${count}`);
    }

}

solve(["Add: Jamie-600-WaterfallArea",
    "Add: Maya-6570-WaterfallArea",
    "Add: Adam-4500-ByTheCreek",
    "Add: Bobbie-6570-WaterfallArea",
    "Feed: Jamie-2000",
    "Feed: Adam-2000",
    "Feed: Adam-2500",
    "EndDay"])