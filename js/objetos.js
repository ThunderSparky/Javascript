//Esta forma de crear objetos se le conoce como: OBJECT LITERAL
const persona = {
        nombre: 'Julinho',
        apellido: 'Vasquez',
        edad: 21,
        trabajo: true,
        musica: ['Regue', 'Baladas', 'Rock'],
        hogar: {
            ciudad: 'Lima',
            pais: 'Peru'
        }
    }
    //de esta manera muestro el nombre
console.log(persona.nombre);
//de esta manera muestro el apellido
console.log(persona.apellido);
//Para acceder a una musica en particular
console.log(persona.musica[0]); //muestra Regue
//Para mostrar todas las musicas solo colocamos lo siguiente:
console.log(persona.musica);
//Para mostrar la ciudad
console.log(persona.hogar.ciudad);
//Otra manera para acceder a la ciudad
console.log(persona['hogar']['ciudad']);