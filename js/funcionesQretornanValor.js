//Funcion expression con parametros
const suma = function(a = 0, b = 0) {
    return a + b;
}
let resultado = suma(10, 20); //El valor de la suma se almacena en la variable resultado
console.log(resultado);

//Funcion de multiplicacion
const multiplicar = function(a = 0) {
    return a * 5;
}
let resultado2 = multiplicar(5);
console.log(resultado2);

//Arrow Functions
const suma = (a = 0, b = 0) => {
    return a + b;
}

//Arrow Functions con parametros
const multiplicar = (a = 0) => {
    return a * 5;
}

//el return se puede quitar y quedar de la siguiente manera
const multiplicarArrow = (a = 0) => a * 5;
const sumaArrow = (a = 0, b = 0) => a + b;

//Ejemplo de Arrow Functions
let viajando = destino => 'Viajanado a :' + destino; //Como solo tiene un parametro podemos quitar los parentesis 

let viaje;
viaje = viajando("Londres");

console.log(viaje); //devolverá: Viajando a Londres