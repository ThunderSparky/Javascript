const puntaje = 1000;

//2 iguales
if (puntaje == '1000') {
    //En este caso si va entrar pese a que sea string
    console.log('Si es igual');
}

//3 iguales
if (puntaje === '1000') {
    //En este caso NO ENTRARÁ xk la triple igualdad indica que también sea el tipo de dato
    console.log('Si es igual');
} else {
    //Entrara aqui
    console.log("No es igual");
}

//Condicionales con variables booleanas
const logueado = true;
if (logueado) {
    //Entrará aqui
    console.log("Si estas logeado");
} else {
    console.log("Inicia sesion");
}

//Condicionales con NEGACION
if (puntaje !== '1000') {
    //En este caso SI ENTRARÁ 
    console.log('No es igual');
} else {
    console.log("Es igual");
}

const edad = 18;

if (edad >= 18) {
    console.log("Si eres mayor de edad");
} else {
    console.log("No eres mayor de edad");
}

//ver que una variable existe y que tiene un valor
let puntaje2;
if (puntaje2) {
    console.log("Si hay puntaje y es de " + puntaje2);
} else {
    //Ejecutará este xk no hemos asignado un valor a la variable puntaje2
    console.log("No hay puntaje");
}

//ELSEIF
let dinero = 600;
let totalCarrito = 500;
let tarjeta = true;

if (dinero > totalCarrito) {
    console.log("Pago correcto");
} else if (tarjeta) {
    console.log('Pagaste con tarjeta');
} else {
    console.log("Fondos insuficientes");
}

//Condicionales con ||
if (dinero > totalCarrito || tarjeta) {
    console.log("Pago correcto");
} else {
    console.log("Fondos insuficientes");
}

//Condicionales con &&
if (dinero > totalCarrito && tarjeta) {
    console.log("Pago correcto");
} else {
    console.log("Fondos insuficientes");
}


let hora = 8;

if (hora > 0 && hora <= 12) {
    console.log("Buenos dias");
} else if (hora > 12 && hora <= 18) {
    console.log("Buenas tardes");
} else if (hora > 18 && hora <= 24) {
    console.log("Buenas noches");
} else {
    console.log("Horario no valido");
}

//Operador TERNARIO
let logueado2 = true;
console.log(logueado2 ? 'Si se logueo' : 'No se logueo');