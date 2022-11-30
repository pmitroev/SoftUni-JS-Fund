function solve(text) {
    let pattern = /(@|\#)(?<wordOne>[A-Za-z]{3,})\1\1(?<wordTwo>[A-Za-z]{3,})\1/g;
    let words = pattern.exec(text);
    let arr = [];
    let mirrorWords = [];

    while (words) {
        let wordOne = words.groups['wordOne'];
        let wordTwo = words.groups['wordTwo'];
        arr.push(wordOne);
        arr.push(wordTwo);

        words = pattern.exec(text);
    }

    for (let i = 0; i < arr.length; i++) {
        let currentWord = arr[i];
        let pairWord = arr[i+1];
        let pairArr = pairWord.split('').reverse();
        let reversed = pairArr.join('');

        if (currentWord == reversed) {
            mirrorWords.push(`${currentWord} <=> ${pairWord}`);
        }
        i++;
    }

    let pairs = arr.length / 2;
    if (pairs > 0) {
        console.log(`${pairs} word pairs found!`);
    } else {
        console.log('No word pairs found!');
    }

    if (mirrorWords.length >= 1) {
        console.log('The mirror words are:');
        console.log(mirrorWords.join(', '));
    } else {
        console.log('No mirror words!');
    }
    
    
}

solve('@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r	w')