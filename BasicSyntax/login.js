function solve(input){
    let index = 0;
    let username = input[index];
    index++;

    //reversing the username
    let pass = "";
    for (let i = input[0].length - 1; i >= 0; i--) {
        pass += input[0][i];
    }

    let command = input[index];
    let loginCount = 0;
    while(command != pass){
        if(loginCount >= 3){
            console.log(`User ${username} blocked!`)
            return;
        } 

        console.log('Incorrect password. Try again.')
        index++;
        command = input[index];
        loginCount++;

        
    }
    console.log(`User ${username} logged in.`)
}

solve(['sunny','rainy','cloudy','sunny','not sunny']);