function solve(input) {
    let password = input.shift();

    while (input[0] != 'Complete') {
        let [command, value1, value2] = input.shift().split(' ');

        if (value1 == 'Upper') {
            let index = Number(value2);

            let letter = password.charAt(index);
            password = password.replace(letter, letter.toUpperCase());
            console.log(password);
        } else if (value1 == 'Lower') {
            let index = Number(value2);

            let letter = password.charAt(index);
            password = password.replace(letter, letter.toUpperCase());
            console.log(password);
        } else if (command == 'Insert') {
            let index = Number(value1);
            let char = value2;

            if (index >= 0 || index < password.length) {
                password = password.substring(0, index) + char + password.substring(index);
            }
            console.log(password);
        } else if (command == 'Replace') {
            if (password.includes(value1)) {
                const newChar = String.fromCharCode(value1.charCodeAt() + Number(value2));
                password = password.split(value1).join(newChar);
            }
            console.log(password);
        } else if (command == 'Validation') {
            if (password.length < 8) {
                console.log("Password must be at least 8 characters long!");
            }
            if (/\W/g.test(password)) {
                cconsole.log("Password must consist only of letters, digits and _!");
            }
            if (!/[A-Z]/g.test(password)) {
                console.log("Password must consist at least one uppercase letter!");
            }
            if (!/[a-z]/g.test(password)) {
                console.log("Password must consist at least one lowercase letter!");
            }
            if (!/\d/g.test(password)) {
                console.log("Password must consist at least one digit!");
            }
        }

        
    }
}




solve(['123456789',
    'Insert 3 R',
    'Replace 5 15',
    'Validation',
    'Make Lower 3',
    'Complete'])