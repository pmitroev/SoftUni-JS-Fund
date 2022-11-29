function solve(input){
    let key = input.shift();
    let instructions = input.slice();

    // loop thorugh instructions
    let instruction = instructions.shift();

    while(instruction != 'Generate') {
        // apply instruction
        let arguments = instruction.split('>>>');
        let instructionName = arguments.shift();

        switch (instructionName) {
            case 'Contains': {
                let substring = arguments[0];
                if (key.includes(substring)) {
                    console.log(`${key} contains ${substring}`);
                } else {
                    console.log('Substring not found!');
                }
                break;
            }

            case 'Flip': {
                let keis = arguments[0];
                let start = arguments[1];
                let end = arguments[2];

                let part = key.substring(start, end);
                let newPart = keis == 'Upper' ? part.toUpperCase() : part.toLowerCase();
                key = key.replace(part, newPart);
                console.log(key);
                break;
                
            }
            case 'Slice': {
                let start = arguments[0]
                let end = arguments[1];
                let substring = key.substring(start, end);
                key = key.replace(substring, '');
                console.log(key);
                break;
            }
        }


        // get next instruction
        instruction = instructions.shift();
    }
    console.log(`Your activation key is: ${key}`);
}

solve(
    ["abcdefghijklmnopqrstuvwxyz",
    "Slice>>>2>>>6",
    "Flip>>>Upper>>>3>>>14",
    "Flip>>>Lower>>>5>>>7",
    "Contains>>>def",
    "Contains>>>deF",
    "Generate"
    ])