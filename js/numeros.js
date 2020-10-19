const numero1 = 30,
    numero2 = '20',
    numero3 = 20.20,
    numero4 = -3,
    numero5 = 20;

let resultado;

//sumas
resultado = numero1 + numero5;
//resta
resultado = numero1 - numero5;
//multiplicar
resultado = numero1 * numero5;
//division
resultado = numero1 / numero5;

//Clase para hacer operaciones. Se llama MATH
resultado = Math.round(2.5); //ROUND = redondea el valor a partir del .5
resultado = Math.floor(2.99); //FLOOR = redondea hacia abajo es decir mostrará 2
resultado = Math.ceil(2.01); //CEIL = redondea hacia arriba es decir mostrará 3

//raiz cuadrada
resultado = Math.sqrt(144);
//Valos absoluto
resultado = Math.abs(numero4);
//Exponente: 8 ^ 3
resultado = Math.pow(8, 3);
//Minimo de todos los valores dentro del parentesis
resultado = Math.min(10, 2, 4, 60, 5);
//Maximo de todos los valores dentro del paréntesis
resultado = Math.max(10, 2, 4, 60, 5);

resultado = 20 + 30 * 2; //resultado 80
resultado = (20 + 30) * 2; //resultado 100

console.log(resultado);

//INCREMENTALES
let puntaje = 0;
puntaje++; //saldrá 1
++puntaje; //saldrá 2
puntaje = puntaje + 5; // 2+5 = 7
puntaje += 5; // 7+5= 12
puntaje += 3; // 12+3 = 15

//DESCREMENTALES
puntaje--; //MOSTRARá 14
--puntaje; //mostrará 13 (ojo que aqui primero le resta y luego lo imprime)

console.log(puntaje);