function solve(pass){
    let passLen = pass.length
    let digitCounter = 0;
    let isSymbol = false;

    for(let i = 0; i < passLen; i++){
        let charToNum = pass[i].charCodeAt();
        
        let isDigit = charToNum >= 48 && charToNum <= 57;
        let isSmallLetter = charToNum >= 97 && charToNum <= 122;
        let isBigLetter = charToNum >= 65 && charToNum <= 90;

        if(isDigit){
            digitCounter++;
        }

        if(!isDigit && !isSmallLetter && !isBigLetter){
            isSymbol = true;
        }
    }

    if(passLen < 6 || passLen > 10){
        console.log('Password must be between 6 and 10 characters');
    }

    if(isSymbol){
        console.log('Password must consist only of letters and digits');
    }

    if(digitCounter < 2){
        console.log('Password must have at least 2 digits');
    }

    if(digitCounter >= 2 && !isSymbol && passLen >= 6 && passLen <= 10){
        console.log('Password is valid');
    }
}

solve('logIn');
