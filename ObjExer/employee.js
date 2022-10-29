function solve(arr){
    let employee = {};

    arr.forEach(person => {
        employee[person] = person.length;
    });

    for (const key in employee) {
        console.log(`Name: ${key} -- Personal Number: ${employee[key]}`);
    }
}

solve([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ])