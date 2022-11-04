function solve(firstChar, secondChar){
    let start = Math.min(firstChar.charCodeAt(), secondChar.charCodeAt());
    let end = Math.max(firstChar.charCodeAt(), secondChar.charCodeAt());
    let buff = '';

    for(let i = start + 1; i < end; i++){
        buff += String.fromCharCode(i) + ' ';
    }

    console.log(buff);
}

solve('#', ':')