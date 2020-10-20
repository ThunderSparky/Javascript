let dato = 19794984797948;

console.log(dato.length); //Esto NO FUNCIONA xk no es un string

dato = String(dato);
console.log(dato.length); //esto SI FUNCIONA xk en la linea anterior lo convertimos a string

dato = String(true);
console.log(dato); //devuelve true
console.log(dato.length); //devuelve 4

dato = new Date();
dato = String(new Date());
console.log(dato); //devuelve la fecha
console.log(dato.length); //devuelve la cantidad de caracteres que tiene la fecha

dato = String([1, 2, 3, 4]);

console.log(dato); //devuelve 1,2,3,4
console.log(dato.length); //devuelve 7 (ya que hay 7 caracteres (4 numeros y 3 comas))