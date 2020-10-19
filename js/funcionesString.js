let banda = 'Metalica',
    cancion = 'Entrar Sadman';

let nombre;

nombre = banda + " : " + cancion;

//Para saber cuantas letras tiene un mensaje
console.log(banda.length);

//Concatenar
nombre = nombre.concat(" ", "y es genial");

//Todas mayusculas
nombre = nombre.toUpperCase();

//Todas minusculas
nombre = nombre.toLowerCase();

//Split va a dividir una cadena de texto
let actividad = 'Estoy aprendiendo JavaScript con el curso';

nombre = actividad.split(' '); //muestra en la consola cada letra guardada en un array

let intereses = 'Leer, caminar, escuchar musica, escribir, aprender a programar';

nombre = intereses.split(', '); //Cada ves que encuentre una coma y un espacio separará los elementos
//y los guardará en un arreglo

//Reemplazar un valor: si en el contenido de la variable actividad encuentra la palabra JavaScript lo reemplazará
//con el valor de JS
nombre = actividad.replace('JavaScript', 'JS');

//Includes revisa que algo exista
//Es decir si en la variable actividad tiene la palabra JavaScript, devolverá TRUE en caso contrario FALSE
nombre = actividad.includes('JavaScript');

//Formas de validar un arroba en un email
let email = 'email@gmail.com';
nombre = email.includes('@');

//
let master = 'Master',
    puppets = 'Of Puppets';

console.log(master.repeat(3)); //mostrará en consola 3 veces la palabra MASTER
console.log(puppets);

//Este console.log mostrara en pantalla los distintos cambios que se le han hecho a la variable nombre
//pero es necesario comentar todos los demás para poder observar el cambio que queremos y también verificar
//que un HTML este llamando a este archivo de javascript
console.log(nombre);