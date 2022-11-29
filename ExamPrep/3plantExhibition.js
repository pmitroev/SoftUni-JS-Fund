function solve(input) {
    let number = Number(input.shift());
    let plantObject = {};

    for (let i = 0; i < number; i++) {
        let line = input.shift();
        let [plantName, rarity] = line.split('<->');

        plantObject[plantName] = {
            rarity: Number(rarity),
            ratings: [],
        }
    }

    let command = input.shift();

    while (command != 'Exhibition') {
        let [instruction, args] = command.split(': ');
        let [plant, value] = args.split(' - ');
        if (plantObject[plant]) {
            switch (instruction) {
                case 'Rate':
                    let rating = Number(value)
                    plantObject[plant].ratings.push(rating);
                    break;

                case 'Update':
                    let rarity = Number(value)
                    plantObject[plant].rarity = rarity;
                    break;

                case 'Reset':
                    plantObject[plant].ratings = [];
                    break;
            }
        } else {
            console.log('error');
        }

        command = input.shift();
    }

    console.log('Plants for the exhibition:');
    for (const plant in plantObject) {
        let sum = 0;
        let ratingsCount = plantObject[plant].ratings.length;
        for (const rating of plantObject[plant].ratings) {
            sum += rating;
        }
        let avgRating = sum / ratingsCount
        if (!avgRating) {
            avgRating = 0;
        }
        console.log(`- ${plant}; Rarity: ${plantObject[plant].rarity}; Rating: ${avgRating.toFixed(2)}`);
    }


    // console.table(plantObject);

}

solve([
    "3",
    "Arnoldii<->4",
    "Woodii<->7",
    "Welwitschia<->2",
    "Rate: Woodii - 10",
    "Rate: Welwitschia - 7",
    "Rate: Arnoldii - 3",
    "Rate: Woodii - 5",
    "Update: Woodii - 5",
    "Reset: Arnoldii",
    "Exhibition"
])