function solve(groupNum, groupType, day){
    let cost = 0;
    if (groupType == 'Students'){
        switch(day){
            case 'Friday':
                cost += 8.45; break;
            case 'Saturday':
                cost += 9.8; break;
            case 'Sunday':
                cost += 10.46; break;
        }
    } else if (groupType == 'Business'){
        switch(day){
            case 'Friday':
                cost += 10.9; break;
            case 'Saturday':
                cost += 15.6; break;
            case 'Sunday':
                cost += 16; break;
        }
    } else if (groupType == 'Regular'){
        switch(day){
            case 'Friday':
                cost += 15; break;
            case 'Saturday':
                cost += 20; break;
            case 'Sunday':
                cost += 22.5; break;
        }
    }
    let totalPrice = 0;
    if (groupType === 'Students' && groupNum >= 30){
        totalPrice = groupNum * cost;
        totalPrice *= 0.85;
    } else if (groupType === 'Business' && groupNum >=100){
        groupNum -= 10;
        totalPrice = groupNum * cost;
    } else if (groupType === 'Regular' && groupNum >= 10 && groupNum <= 20){
        totalPrice = groupNum * cost;
        totalPrice *= 0.95;
    } else {
        totalPrice = groupNum * cost;
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`)
}

solve(40, 'Regular', 'Saturday')