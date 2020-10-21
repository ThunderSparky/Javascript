const personas = [
    { nombre: 'Julinho', edad: 20 },
    { nombre: 'Pablo', edad: 25 },
    { nombre: 'Alejandra', edad: 23, aprendiendo: 'JavaScript' },
    { nombre: 'Karen', edad: 28 },
    { nombre: 'Miguel', edad: 33 }
];

//obtener las personas mayores de 25 años
const mayores = personas.filter(persona => persona.edad > 25);
console.log(mayores); //muestra las personas mayores de 25

//obtener informacion de Alejandra
const alejandra = personas.find(persona => persona.nombre == 'Alejandra');
console.log(alejandra); //muestra alejandra con todos sus datos

//Para ver que esta aprendiendo alejandra
let { aprendiendo } = alejandra;
console.log(aprendiendo);

//REDUCE
let total = personas.reduce((edadTotal, persona) => edadTotal + persona.edad, 0); //El valor inicial es 0

console.log(total);
console.log(total / personas.length); // Promedio de edad de este grupo