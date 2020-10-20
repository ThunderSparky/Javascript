//Tipos de datos en JS

//string
const nombre = 'Julinho';
console.log(typeof nombre); //devuelve string

//int
const edad = 80.80;
console.log(typeof edad); //devuelve number

//booleano
let aprendiendoJS = true;
console.log(typeof aprendiendoJS); //devuelve boolean

let valor;
console.log(typeof valor); //devuelve indefinido
valor = 'Hola';
console.log(typeof valor); //devuelve string
valor = true;
console.log(typeof valor); //devuelve boolean
valor = 20;
console.log(typeof valor); //devuelve number
valor = "20";
console.log(typeof valor); //devuelve string

let hijos = null;
//el null en JS es un OBJECT
console.log(typeof hijos); // devuelve object

//cuando una variable no tiene un tipo, se considera como indefinido
let name;
console.log(typeof name); // devuelve undefined

//Arreglo
let lenguajes = ['HTML', 'JS', 'PHP'];
console.log(typeof lenguajes); //devuelve un OBJECT

//Objetos
let persona = {
    nombre: 'Julinho',
    ciudad: 'Peru',
}
console.log(typeof persona); //devuelve OBJECT

//Fechas
let fecha = new Date();
console.log(typeof fecha); // devuelve un OBJECT

//Conclusion: los tipos de datos (array, objetos, fechas) se consideran como objetos en JS