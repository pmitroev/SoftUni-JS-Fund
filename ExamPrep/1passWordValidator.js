function solve(input) {
    let password = input.shift();
    let temp = '';

    let line = input.shift();

    while (line != 'Complete') {
        let args = line.split(' ');

        switch (args[0]) {
            case 'Make': {
                let index = Number(args[2]);
                if (args[1] === 'Upper') {
                    let letter = password.charAt(index);
                    password = password.replace(letter, letter.toUpperCase());
                    if (password.length >= 8) {
                        console.log(password);
                    } else {
                        break;
                    }
                    
                } else {
                    let letter = password.charAt(index);
                    password = password.replace(letter, letter.toLowerCase());
                    
                    
                }
                break;
            }

            case 'Add': {
                let index = Number(args[1]);
                let char = args[2];

                if (index < 0 || index > password.length) {
                    break;
                } else {
                    temp = password.slice(0, index) + char + password.slice(index);
                    password = temp;
                }
                if (password.length >= 8) {
                    console.log(password);
                }

                break;
            }

            case 'Replace': {
                let char = args[1];
                let  value = Number(args[2]);

                let charValue = char.charCodeAt();
                let sum = charValue + value;
                let newChar = String.fromCharCode(sum);
                
                while(password.includes(char)) {
                    temp = password.replace(char, newChar);
                    password = temp;
                }

                console.log(password);
                break;
            }

            case 'Validation': {
                if (password.length < 8) {
                    console.log('Password must be at least 8 characters long');
                } else if (p)

                break;
            }
        }

        line = input.shift();
    }
}

function isNum(str) {
    return /\d+/.test(str);
}

solve([
    'invalidpassword*',
    // 'Add 2 p',
    // 'Replace i -50',
    // 'Replace * 10',
    'Make Upper 2',
    'Validation',
    'Complete'
])