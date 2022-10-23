function solve(arr) {
    let numbers = arr.shift().split(' ').map(x => (Number(x)));

    for (let i = 0; i < arr.length; i++) {
        let [command, valueStr, replacementStr] = arr[i].split(' ');
        
        let value = Number(valueStr);
        let replacement = Number(replacementStr);

        if (command != 'Finish') {
            if (command === 'Add') {
                numbers.push(value);
            } else if (command === 'Remove') {
                if (numbers.includes(value)) {
                    let index = numbers.indexOf(value);
                    numbers.splice(index, 1);
                }
            } else if (command === 'Replace') {
                if (numbers.includes(value)) {
                    let index = numbers.indexOf(value);
                    numbers[index] = replacement;
                }
            } else if (command === 'Collapse') {
                for (let j = 0; j < numbers.length; j++) {
                    if (numbers[j] < value) {
                        numbers.splice(j, 1);
                        j--;
                    }
                }
            }
        } else {
            console.log(numbers.join(' '));
        }
    }
}

solve(['1 2 3 4',
    'Add 5',
    'Remove 4',
    'Collapse 3',
    'Finish'])