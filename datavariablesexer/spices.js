function solve(yield){
    let days = 0;
    let spiceCollected = 0;

    while(yield > 0){
        if(yield < 100){
            if (spiceCollected < 26){
                break;
            }
            spiceCollected -= 26;
            break;
        }
        spiceCollected += yield - 26;
        yield -= 10;
        days++;
    }

    console.log(days);
    console.log(spiceCollected)
    

}

solve(111)