function solve(arr){
    let townInfo = {};

    for (const item of arr) {
        let [townName, latitude, longitude] = item.split(' | ');

        townInfo.town = townName;
        townInfo.latitude = Number(latitude).toFixed(2);
        townInfo.longitude = Number(longitude).toFixed(2);

        console.log(townInfo);
    }

    
}

solve([
    'Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625'
])