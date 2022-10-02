function solve(arr) {
    let foundIndex = 'no';

    for (let i = 0; i < arr.length; i++) {
        let lSum = 0;
        let rSum = 0;

        for (let l = 0; l < i; l++) {
            lSum += arr[l];
        }
        for (let r = i + 1; r < arr.length; r++) {
            rSum += arr[r];
        }

        if (lSum === rSum) {
            foundIndex = i;
        }
    }

    console.log(foundIndex)
}

solve([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4])