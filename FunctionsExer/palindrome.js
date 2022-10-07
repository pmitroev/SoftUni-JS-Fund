function solve(arr) {
    let len = arr.length;

    for (let i = 0; i < len; i++) {
        let numString = String(arr[i]);

        let reversed = numString.split('').reverse().join('');
        //console.log(reversed)

        if (numString === reversed) {
            console.log('true');
        } else {
            console.log('false')
        }
    }
}

solve([123, 323, 421, 121]);