//object literal Enhacement
const banda = 'Metalica',
    genero = 'Heavy Metal',
    canciones = ['Master of Puppets', 'Seek & destroy', 'Enter Sandman'];

//forma anterior de hacerlo
const metallica = {
    banda: banda,
    genero: genero,
    canciones: canciones
}

console.log(metallica);

//Nueva forma de hacerlo
const metallica2 = {
    banda,
    genero,
    canciones
}

console.log(metallica2);