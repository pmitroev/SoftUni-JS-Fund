function solve(input) {
    let message = input.shift();
    let temp = '';

    let command = input.shift();
    while (command != 'Decode') {
        let tokens = command.split('|');
        let method = tokens[0];

        switch (method) {
            case 'Move':
                let n = Number(tokens[1])
                let string = message.substring(0, n);
                temp = message.replace(string, '');
                temp += string;
                message = temp;
                // console.log(message);
                break;

            case 'Insert':
                let index = Number(tokens[1]);
                let value = tokens[2];
                temp = message.split('');
                temp.splice(index, 0, value);
                message = temp.join('');
                break;

            case 'ChangeAll':
                let substring = tokens[1];
                let replacement = tokens[2];
                
                while (message.includes(substring)) {
                    temp = message.replace(substring, replacement);
                    message = temp;
                }

                
                break;
        }


        command = input.shift();
    }

    console.log(`The decrypted message is: ${message}`);
}

solve([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode'
])