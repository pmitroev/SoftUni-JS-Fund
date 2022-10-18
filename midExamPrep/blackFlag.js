function solve(arr) {
    let pirating = Number(arr[0]);
    let dailyPlunder = Number(arr[1]);
    let expectedPlunder = Number(arr[2]);

    let plunderCollected = 0;

    for (let day = 1; day <= pirating; day++) {
        plunderCollected += dailyPlunder;

        if (day % 3 === 0) {
            plunderCollected += dailyPlunder / 2;
        }

        if (day % 5 === 0) {
            plunderCollected *= 0.7;
        }

    }
    let percentage = (plunderCollected / expectedPlunder) * 100;
    if (plunderCollected >= expectedPlunder){
        console.log(`Ahoy! ${plunderCollected.toFixed(2)} plunder gained.`);
    } else {
        console.log(`Collected only ${percentage.toFixed(2)}% of the plunder.`)
    }
}

solve(["10",
"20",
"380"]);