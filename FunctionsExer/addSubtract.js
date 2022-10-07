function solve(first, second, third){
    function add(a, b){
        let sum = a + b;
        return sum;
    }

    function subtract(sum, c){
        let sub = sum - c;
        return sub;
    }
    let sum = add(first, second);
    let sub = subtract(sum, third);
    console.log(sub);
}

solve(23, 6, 10);

