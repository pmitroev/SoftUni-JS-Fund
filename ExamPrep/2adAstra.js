function solve(input) {
    let pattern = /([\|#])(?<name>[A-Za-z ]+)\1(?<expDate>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d+)\1/gm;
    let exec = pattern.exec(input);
    let arr = [];
    
    let caloriesSum = 0;

    while (exec) {
        let name = exec.groups['name'];
        let date = exec.groups['expDate'];
        let cals = exec.groups['calories'];

        caloriesSum += Number(cals);
        let currentProductInfo = `Item: ${name}, Best before: ${date}, Nutrition: ${cals}`;
        arr.push(currentProductInfo);

        exec = pattern.exec(input);
    }

    let days = Math.floor(caloriesSum / 2000);

    console.log(`You have food to last you for: ${days} days!`);

    arr.forEach(el => console.log(el));
}

solve([
    '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'
    ])