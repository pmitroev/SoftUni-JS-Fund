function solve(num){
    let avg = 0;
    let numAsString = String(num);
    let splitted = numAsString.split('');
    let sum = 0;

    while(avg <= 5){
        sum = 0;
        avg = 0;
        for(let i = 0; i < splitted.length; i++){
            sum += Number(splitted[i]);
            avg = sum / splitted.length;
        }
        splitted.push('9');
    }
    splitted.pop();
    let arrToString = '';
    arrToString = splitted.join('');
    console.log(arrToString)
    
    
}

solve(101)