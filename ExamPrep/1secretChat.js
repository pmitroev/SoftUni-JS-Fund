function solve(input) {
    let message = input.shift();
    let temp = '';

    let line = input.shift();
    while (line != 'Reveal') {
        let [commmand, value1, value2] = line.split(':|:');

        switch (commmand) {
            case 'InsertSpace': {
                let index = Number(value1)
                temp = message.slice(0, index) + ' ' + message.slice(index);
                message = temp;
                console.log(message);
                break;
            }

            case 'Reverse': {
                let substring = value1;
                if (message.includes(substring)) {
                    let index = message.indexOf(substring);
                    let cut = message.slice(index, index + substring.length);
                    let cutArr = cut.split('');
                    let reversed = cutArr.reverse().join('');
                    temp = message.replace(cut, '');
                    temp = temp + reversed;

                    message = temp;
                    console.log(message);
                } else {
                    console.log('error');
                }

                break;
            }

            case 'ChangeAll':
                let substring = value1;
                let replacement = value2;
                while (message.includes(substring)) {
                    temp = message.replace(substring, replacement);
                    message = temp;
                }
                
                console.log(message);
                break;
        }
        line = input.shift();
    }

    console.log(`You have a new text message: ${message}`);
}   

solve([
        'Hiw?uiyare',
        'ChangeAll:|:i:|:o',
        'Reverse:|:?uoy',
        'Reverse:|:jd',
        'InsertSpace:|:3',
        'InsertSpace:|:7',
        'Reveal'
    ])