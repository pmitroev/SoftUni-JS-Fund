function solve(base, increment){
    let currentbase = base;
    let totalgold = 0;
    let totallapis = 0;
    let totalmarble = 0;
    let totalstone = 0;
    let rows = 0;
    let totalHeight = 0;

    while(currentbase > 2){
        let marble = currentbase * 4 - 4;
        let stone = currentbase * currentbase - marble;
            totalstone += stone;
            rows++;

        if(rows % 5 === 0){
            totallapis += marble;
        } else {
            totalmarble += marble;
        }
        currentbase -= 2;
    }
    rows++;
    let gold = currentbase * currentbase;

    totalgold = Math.ceil(gold * increment);
    totallapis = Math.ceil(totallapis * increment);
    totalmarble = Math.ceil(totalmarble * increment);
    totalstone = Math.ceil(totalstone * increment);
    totalHeight = Math.ceil(rows * increment);
    
    console.log(`Stone required: ${totalstone}`);
    console.log(`Marble required: ${totalmarble}`);
    console.log(`Lapis Lazuli required: ${totallapis}`);
    console.log(`Gold required ${totalgold}`);
    console.log(`Final pyramid height ${totalHeight}`);
}

solve(11, 1)