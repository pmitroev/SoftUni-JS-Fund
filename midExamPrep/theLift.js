function solve(arr) {
    let queue = Number(arr.shift());
    let wagons = arr.shift().split(' ').map((x => Number(x)));
    let wagonSpaceCount = 0;

    for (let i = 0; i < wagons.length; i++) {
        let currentWagon = wagons[i];

        if(currentWagon < 4){
            if(queue >= 4){
                if(currentWagon != 0){
                    queue -= (4 - currentWagon);
                    currentWagon = 4;
                    wagons[i] = currentWagon;
                } else {
                    currentWagon = 4;
                    queue -= currentWagon;
                    wagons[i] = currentWagon;
                }
            }else {
                currentWagon += queue;
                queue = 0;
                wagons[i] = currentWagon;
            }
        }
    }

    if (queue != 0) {
        console.log(`There isn't enough space! ${queue} people in a queue!`);
        console.log(wagons.join(' '));
    } else {
        for (let wagon of wagons) {
            
            if (wagon === 4) {
                wagonSpaceCount++;
            }
        }
        if (wagonSpaceCount != wagons.length) {
            console.log("The lift has empty spots!");
            console.log(`${wagons.join(' ')}`)
        } else {
            console.log(`${wagons.join(' ')}`)
        }
    }


}

solve([
    "20",
    "0 2 0"
]);