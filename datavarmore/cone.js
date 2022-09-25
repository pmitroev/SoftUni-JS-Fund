function solve(radius, height){
    let side = Math.sqrt(Math.pow(radius, 2) + Math.pow(height, 2));

    let totalArea = Math.PI * radius * (radius + side);
    let volume =  Math.PI * Math.pow(radius, 2) * (height / 3);
    
    
    console.log(`volume = ${volume.toFixed(4)}`);
    console.log(`area = ${totalArea.toFixed(4)}`);

}

solve(3, 5)