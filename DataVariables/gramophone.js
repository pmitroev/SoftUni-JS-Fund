function solve(band, album, song){
    let rotation = 2.5;
    let songDuration = (album.length * band.length) * song.length / 2
    let rotations = songDuration / rotation;
    console.log(`The plate was rotated ${Math.ceil(rotations)} times.`)
}

solve('Black Sabbath', 'Paranoid', 'War Pigs');