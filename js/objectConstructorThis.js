//object literal
const persona = {
    nombre: "Julinho",
    edad: 80,
    anioNacimiento: function() {
        return new Date().getFullYear() - this.edad;
    }
}

console.log(persona.anioNacimiento());

//object constructor
function Tarea(nombre, urgencia) {
    //El this es para que sepa a que instancia pertenece
    this.nombre = nombre;
    this.urgencia = urgencia;
}
//crear nuevas tareas
const tarea1 = new Tarea('Aprender JS', 'Urgente');
const tarea2 = new Tarea('Preaparar cafe', 'Urgente');
const tarea3 = new Tarea('Pasear al perro', 'Media');
const tarea4 = new Tarea('Conocer a mis suedros', '0');
console.log(tarea1);
console.log(tarea2);
console.log(tarea3);
console.log(tarea4);

//Clases:
class Tarea {
    constructor(nombre, urgencia) {
        this.nombre = nombre;
        this.urgencia = urgencia;
    }
}