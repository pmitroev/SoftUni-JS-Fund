function solve(input) {
    // input
    let text = input.shift();
    let emojiCount = 0;
    let threshold = 1;
    let coolEmojis = [];
    // get all digits
    
    let digits = text.match(/\d/g);
    for (const digit of digits) {
        let number = Number(digit);
        threshold *= number;
    }
    
    // get all emojis
    let emojiMatches = text.matchAll(/(:{2}|\*{2})(?<emoji>[A-Z][a-z]{2,})\1/gm)
    for (const emojiMatch of emojiMatches) {
        let emoji = emojiMatch[0];
        let emojiName = emojiMatch.groups.emoji;
        emojiCount++;

        // calculate emoji coolness
        let coolness = 0;
        for (let i = 0; i < emojiName.length; i++) {
            let coolValue = emojiName[i].charCodeAt()
            coolness += coolValue;
        }

        if (coolness >= threshold) {
            coolEmojis.push(emoji)
        }

    }
    console.log(`Cool threshold: ${threshold}`);
    console.log(`${emojiCount} emojis found in the text. The cool ones are:`);
    for (const emoji of coolEmojis) {
        console.log(emoji.trim());
    }
}

solve(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"])