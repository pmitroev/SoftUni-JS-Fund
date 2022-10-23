function solve(arr) {
    let sequence = arr.shift().trim().split(' ');
    let moves = 0;

    while (sequence.length > 0 && arr[0].toLowerCase() != 'end') {
        let [firstIndex, secondIndex] = arr.shift().split(' ');

        moves++;

        if (firstIndex === secondIndex
            || firstIndex >= sequence.length
            || firstIndex < 0
            || secondIndex >= sequence.length
            || secondIndex < 0) {

            
            sequence.splice(Math.trunc(sequence.length / 2), 0, `-${moves}a`);
            sequence.splice(Math.trunc(sequence.length / 2), 0, `-${moves}a`);
            console.log('Invalid input! Adding additional elements to the board');
        } else{
            const num1 = sequence[firstIndex];
            const num2 = sequence[secondIndex];
            if(num1 === num2) {
            console.log(`Congrats! You have found matching elements - ${sequence[firstIndex]}!`);
            
            sequence.splice(firstIndex, 1);
            let index2 = sequence.indexOf(num2);
            sequence.splice(index2, 1)

            
            } else {
                console.log('Try again!');
            }
        } 
    }
    if (sequence.length === 0 || sequence.length === 1) {
        console.log(`You have won in ${moves} turns!`);
        } else {
        console.log(`Sorry you lose :(`);
        console.log(`${sequence.join(' ')}`);
        }
}


    solve([
    "a 2 4 a 2 4", 
            "4 0", 
            "0 2",
            "0 1",
            "0 1", 
            "end" 
        ]);