//Funcion log
console.log('Hola');

//Funcion alert
alert();

//Funcion prompt
prompt();

//Funciones creadas por nosotros

//creamos la funcion
function saludar() {
    console.log("hola");
}

//llamamos a la funcion (La podemos llamar incluso antes de la funcion)
saludar();

//Funcion expression
const suma = function() {
    console.log(1 + 2);
}

//La unica forma en que funcione es llamandola despues de haberla asignado, SINO no funcinará
suma();

//Funciones con PARAMETROS
function saludar2(nombre) {
    console.log('Hola ' + nombre);
}
saludar2('Julinho'); //mostrará Hola Julinho

//Funciones con varios parametros
function saludar3(nombre, trabajo) {
    console.log('Hola ' + nombre + ' tu trabajo es: ' + trabajo);
}
saludar3('Julinho', 'Practicante Profesional'); //devolverá Hola Julinho tu trabajo es: Practicante Profesional

//Funcion expression con parametros
const suma = function(a = 0, b = 0) {
    console.log(a + b);
}
suma(10, 20); //devuelve 30
suma(15); //devuelve 15 ya que la operacion que realiza es : 15 +0 

//Parametros por default
function saludar4(nombre, trabajo = 'No sabemos') {
    console.log('Hola ' + nombre + ' tu trabajo es: ' + trabajo);
}

saludar4('Made'); //Esto devolverá: Hola Made tu trabajo es: No sabemos. (ya que no hemos colocado el segundo parametro)

//IIFE: son funciones que se invocan ellas mismas, es decir en la consola aparecerá el mensaje Aqui toy automaticamente
//no es necesario llamarlas porque se llaman automaticamente
(function() {
    console.log("Aqui toy!");
})();

//IIFE con parametros
(function(tecnologia) {
    console.log("Aqui toy aprendiendo más " + tecnologia);
})('JavaScript');
//Lo de arriba devolverá : Aqui toy aprendiendo más JavaScript