function solve(input) {
    let password = input.shift();

    let line = input.shift();

    while (line !== 'Done') {
        let [command, ...args] = line.split(' ');

        switch (command) {
            case 'TakeOdd': {
                let temp = '';

                for (let i = 0; i < password.length; i++) {
                    if (i % 2 !== 0) {
                        temp += password[i];
                    }

                }
                password = temp;
                console.log(password);
                break;
            }
            case 'Cut': {
                let index = Number(args[0]);
                let length = Number(args[1]);


                let substring = password.substring(index, index + length);
                if (password.includes(substring)) {
                    temp = password.replace(substring, '');
                }
                password = temp;
                console.log(password);
                break;
            }

            case 'Substitute': {
                let substring = args[0];
                let sub = args[1];

                if (password.includes(substring)) {
                    while (password.includes(substring)) {
                        password = password.replace(substring, sub);
                    }
                    console.log(password);
                } else {
                    console.log('Nothing to replace!');
                }


                break;
            }
        }

        line = input.shift();
    }

    console.log(`Your password is: ${password}`);
}

solve(["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr", 
"TakeOdd",
"Cut 15 3",
"Substitute :: -",
"Substitute | ^",
"Done"])