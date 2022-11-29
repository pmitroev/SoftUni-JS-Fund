function solve(input) {
    let placesMatched = input.matchAll(/(=|\/)(?<place>[A-Z][A-Za-z]{2,})\1/gm);
    let distance = 0;
    let places = [];

    for (const place of placesMatched) {
        let currCity = place.groups.place;
        places.push(currCity);

        let currDist = currCity.length;
        distance += currDist;
    }
    console.log(`Destinations: ${places.join(', ')}`);
    console.log(`Travel Points: ${distance}`);
}


solve("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=")