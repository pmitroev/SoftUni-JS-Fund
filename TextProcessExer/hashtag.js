function solve(str) {
    const strArr = str.split(' ');
    
    strArr.forEach(word => {
        const isValidWord = word.startsWith('#') && word.length > 1;

        if (isValidWord) {
            let isLetter = true;
            let temp = '';

            for (let i = 1; i < word.length; i++) {

                const char = word[i].toLowerCase();

                

                if (char.charCodeAt() < 97 && char.charCodeAt() > 122) {
                    isLetter = false;
                    break;
                } else {
                    temp += char;
                }

            }
            if (isLetter) {
                console.log(temp);
            }
        }
    });
}

solve('The symbol # is known #variously in English-speaking #regions as the #number sign')