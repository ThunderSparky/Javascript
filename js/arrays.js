//Crear un arreglo, el indice de los indices [0, 1, 2, 3, 4]
const numeros = [10, 20, 30, 40, 50];

console.log(numeros);
console.table(numeros); //muestra una tabla con los indices de los arrays y sus valores respectivos

const meses = new Array('Enero', 'Febrero', 'Marzo');

console.log(meses);
console.log(meses[1]); //devuelve Febrero

const arreglo = ['Hola', 10, true, "si", null, undefined];
console.log(arreglo.length); //Para sacar la longuitud del array

console.log(Array.isArray(arreglo)); //verifica si es un arreglo, en este caso devuelve TRUE

//Para agregar más elementos en un array
meses[3] = 'Abril';
console.log(meses);

//de otra manera, si usamos PUSH agrega el elemento al final del arreglo
meses.push('Mayo');
meses.push('Junio');

console.log(meses);

//Para agregar al inicio del arreglo, usamos UNSHIFT 
meses.unshift('Mes 0');

//Para ELIMINAR algo del final
meses.pop(); //elimina a JUNIO

//Para ELIMINAR del principio
meses.shift(); //elimina al mes 0

//Para ELIMINAR en RANGO
meses.splice(0, 1); //Desde el indice 0, eliminará 1 elemento: es decir eliminará a Enero

console.log(meses);

//Para invertir el orden de los arreglos
meses.reverse();
console.log(meses);

//Ordenar un arreglo
let frutas = ['Platano', 'Manzana', 'Fresa', 'Naranja'];
frutas.sort(); //ordena alfabeticamentes
console.log(frutas);