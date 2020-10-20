let numero1 = 50,
    numero2 = "10",
    numero3 = "tres",
    numero4 = "20.20";

//El number(): convierte el string a numero
console.log(number(numero2) + numero1);
//paseInt(): convierte a un numero entero
console.log(parseInt(numero2) + numero1);
console.log(parseInt(numero4) + numero1);
//parseFloat(): convierte un string en numero decimal
console.log(parseFloat(numero4) + numero1);

let dato;
dato = number("20");
dato = number("-20.20");
dato = parseInt("20.20");

//convertir un booleano
dato = number(true); //devuelve 1
dato = number(false); //devuelve 0
dato = number(null); // devuelve 0
dato = number("hola mundo"); //devuelve NAN

console.log(dato);

//To fixed
let num1 = "12121313.24242";
let num2 = 131313241.4243242;

console.log(number(num1).toFixed()); //El toFixed solo se ejecuta a numeros NO A STRINGS por eso lo convertimos en numero
//devuelve el numero 12121313, eliminando los decimales

console.log(number(num1).toFixed(4)); //esto devolverá 4 decimales, es decir, 12121313.2424

console.log(num2.toFixed());