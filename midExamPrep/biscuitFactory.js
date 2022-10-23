function solve(arr){
    let biscuitsPerDay = Number(arr[0]);
    let workers = Number(arr[1]);
    let competitorBiscuits = Number(arr[2]);

    let sum = 0;
    let day = 1;

    while(day <= 30){
        if(day % 3 != 0){
            sum += biscuitsPerDay * workers;
        } else {
            sum += Math.floor((biscuitsPerDay * 0.75) * workers);
        }

        day++;
    }

    let percent =(sum / competitorBiscuits) * 100;
    let finalPercent = (percent - 100);
    
    console.log(`You have produced ${sum} biscuits for the past month.`);
    if(percent < 100){
        console.log(`You produce ${Math.abs(finalPercent).toFixed(2)} percent less biscuits.`);
    } else {
        console.log(`You produce ${finalPercent.toFixed(2)} percent more biscuits.`);
    }

    
}

solve(['65', '12', '26000']);