function solve(arr) {
    let treasureChestItems = arr.shift().split('|');

    while (arr[0] !== 'Yohoho!') {
        let tokens = arr.shift().split(' ');
        let command = tokens.shift();

        if (command === 'Loot') {
            while (tokens.length) {
                let item = tokens.shift();
                if (!treasureChestItems.includes(item)) {
                    treasureChestItems.unshift(item);
                }
            }
        } else if (command === 'Drop') {
            let index = Number(tokens.shift());
            if (index >= 0 && index < treasureChestItems.length) {
                treasureChestItems.push(treasureChestItems.splice(index, 1));
            }
        } else if (command === 'Steal') {
            let count = Math.min(treasureChestItems.length, Number(tokens.shift()));
            let index = treasureChestItems.length - count;
            let stolen = treasureChestItems.splice(index, count);
            console.log(stolen.join(', '));
        }
    }

    if (treasureChestItems.length) {
        let averageTreasureGain = treasureChestItems.reduce((prevSum, item) => prevSum + item.length, 0) / treasureChestItems.length;
        console.log(`Average treasure gain: ${averageTreasureGain.toFixed(2)} pirate credits.`);
    } else {
        console.log('Failed treasure hunt.');
    }
}

solve((["Gold|Silver|Bronze|Medallion|Cup",
    "Loot Wood Gold Coins",
    "Loot Silver Pistol",
    "Drop 3",
    "Steal 3",
    "Yohoho!"]))