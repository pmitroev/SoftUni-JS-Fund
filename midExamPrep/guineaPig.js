function solve(input){
    let [food, hay, cover, weight] = input;

    let foodGr = food * 1000;
    let hayGr = hay * 1000;
    let coverGr = cover * 1000;
    let weightGr = weight * 1000;

    let day = 1;

    while(day <= 30){
        foodGr -= 300;

        if(day % 2 === 0){
            hayGr -= (foodGr * 0.05);
        }
        if(day % 3 === 0){
            coverGr -= weightGr * 0.3333
        }

        day++;
    }

    let foodKg = foodGr / 1000;
    let hayKg = hayGr / 1000;
    let coverKg = coverGr / 1000;
    let weightKg = weightGr / 1000;
    
    if(foodKg >= 0 && hayKg >= 0 && coverKg >= 0){
        console.log(`Everything is fine! Puppy is happy! Food: ${foodKg.toFixed(2)}, Hay: ${hayKg.toFixed(2)}, Cover: ${coverKg.toFixed(2)}.`)
    } else if(foodKg < 0 || hayKg < 0 || coverKg < 0){
        console.log('Merry must go to the pet store!')
    }

}
solve(["10", 
"5", 
"5.2", 
"1"]);