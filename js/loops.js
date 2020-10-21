//For
for (let i = 0; i < 10; i++) {
    console.log(`Numero: ${i}`);
}

const carrito = ['Producto 1', 'Producto 2', 'Producto 3'];
for (let i = 0; i < carrito.length; i++) {
    console.log(`Producto en el carrito: ${carrito[i]}`);
}

//While 
let i = 0;
while (i < 10) {
    console.log(`Numero: ${i}`);
    i++;
}
while (i < carrito.length) {
    console.log(carrito[i]);
    i++;
}

//Do while
do {
    console.log(i);
    i++;
} while (i < 10);

//Otros tipos de iteradores

const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar JS'];

//un arreglo con objetos
const carrito = [
    { id: 1, producto: 'Libro' },
    { id: 2, producto: 'Camisa' },
    { id: 3, producto: 'Disco' }
];

//Un objeto
let automovil = {
    modelo: 'Camaro',
    motor: 6.0
}

//Esta es la manera clasica
for (let i = 0; i < pendientes.length; i++) {
    console.log(pendientes[i]);
}
//Esta es la nuevaforma
for (pendiente of pendientes) {
    console.log(pendiente);
}
for (elemento of carrito) {
    console.log(elemento.producto);
}
//El object.values es cuando quieres leer un objeto como el automovil creado arriba
for (info of Object.values(automovil)) {
    console.log(info); //Mostrará todas sus propiedades
}

//Foreach
pendientes.forEach(function(tarea) {
    console.log(tarea);
});
//foreach con arrow functions
pendientes.forEach(tarea => { console.log(tarea) });

//Map. Este crea una copia de lo que esta iterando
pendientes.map(tarea => {
    console.log(tarea);
})

//Para ver la diferencia entre ambas veamos:
let nuevoArreglo = pendientes.array.forEach(tarea => {
    // console.log(tarea);
});

let nuevoArreglo2 = pendientes.map(tarea => tarea);

console.log(nuevoArreglo); //Este no mostrará nada XK no devuelve nada
console.log(nuevoArreglo2); //Este si devuelve el arreglo

//Para iterar un objeto
let carrito = {
    modelo: 'Camaro',
    motor: 6.0,
    anio: 1999,
    marca: 'Gaaa'
}

//Asi se muestran todos los valores del objeto carrito
Object.values(carrito).forEach(tarea => {
    console.log(tarea);
})

//Con map
Object.values(carrito).map(tarea => {
    console.log(tarea);
})

//Para acceder a las llaves es Object.keys