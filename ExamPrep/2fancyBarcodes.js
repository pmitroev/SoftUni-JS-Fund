function solve(input) {
    let numberOfbarcode = Number(input.shift());
    let pattern = /(@#+)(?<barcode>[A-Z][A-Za-z\d]{4,}[A-Z])\1$/;
    
    for (const line of input) {
        let productCode = '';
        match = pattern.exec(line);
        if (match) {
            for (const el of match.groups.barcode) {
                if (el.charCodeAt() >= 48 && el.charCodeAt() <= 57) {
                    productCode += el;
                }
            }
            productCode == '' ? console.log(`Product group: 00`) : console.log(`Product group: ${productCode}`);
        } else {
            console.log(`Invalid barcode`);
        }
    }
}


solve([
    "3",
    "@#FreshFisH@#",
    "@###Brea0D@###",
    "@##Che4s6E@##"
])