function solve(lostFightsCount, helmetPrice, swordPrice, shieldPrice, armorPrice){
    let shieldCount = 0;
    let repairPrice = 0;

    for(let i = 1; i <= lostFightsCount; i++){
        if(i % 2 === 0){
            repairPrice += helmetPrice;
        }

        if(i % 3 === 0){
            repairPrice += swordPrice;
        }

        if(i % 2 === 0 && i % 3 === 0){
            repairPrice += shieldPrice;
            shieldCount++;
        }

        if(shieldCount % 2 === 0 && shieldCount > 0){
            repairPrice += armorPrice;
            shieldCount = 0;
        }
    }

    console.log(`Gladiator expenses: ${repairPrice.toFixed(2)} aureus`)
}