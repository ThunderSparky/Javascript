let nombre;

nombre = 'Julinho';

let mensaje = "Entonces dije 'Hola Mundo'";
//Esta es la forma para poder aplicar las comillas correctamente 
let mensajeIngles = "Don\'t do that";

console.log(mensajeIngles);

console.log(mensajeIngles + ' ' + mensaje + ' esto es una concatenación');

//nueva forma de hacerlo
console.log(`${mensaje} ${mensajeIngles}`);