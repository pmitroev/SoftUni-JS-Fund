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

    console.log(arr);
}

solve(
    [
        "Tortuga||345000||1250",
        "Santo Domingo||240000||630",
        "Havana||410000||1100",
        "Sail",
        "Plunder=>Tortuga=>75000=>380",
        "Prosper=>Santo Domingo=>180",
        "End"
    ])