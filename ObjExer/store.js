function solve(storage, delivery) {
    let store = {};

    for (let i = 0; i < storage.length; i += 2) {
        let currentStock = storage[i];
        store[currentStock] = Number(storage[i + 1]);
    }

    for (let i = 0; i < delivery.length; i += 2) {
        let currentStock = delivery[i];
        if (!store.hasOwnProperty(currentStock)) {
            store[currentStock] = 0;
        }
        store[currentStock] += Number(delivery[i + 1]);
    }

    for (const product in store) {
        console.log(`${product} -> ${store[product]}`);
    }
}



solve(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'])