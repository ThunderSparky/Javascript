//Destructuring: La forma en la que extraes valores de un objeto

const cliente = {
    nombre: 'Made',
    tipo: 'Premium',
    datos: {
        ubicacion: {
            ciudad: 'Peru',
            pais: 'Peru'
        },
        cuenta: {
            desde: '10-12-2012',
            saldo: 4000
        }
    },
    gustos: {
        musica: ['trance', 'rock']
    }
}

console.log(cliente);

//crear la variable
const nombreCliente = cliente.nombre,
    tipoCliente = cliente.tipo,
    ubicacionCliente = cliente.datos.ubicacion;

console.log(nombreCliente); //Muestra Made
console.log(ubicacionCliente); //muestra cuidad: peru y pais: peru


//------Usando el destructuring seria de la siguiente manera, lo que hemos hecho arriba--------

let { nombre } = cliente;
console.log(nombre); //muestra Made

let { nombre, tipo } = cliente;
console.log(tipo); //muestra primium
// De donde ? de cliente
let { datos: { ubicacion } } = cliente
console.log(ubicacion); //muestra cuidad: peru y pais: peru

//Supongamos que queremos extraer la ciudad
let { datos: { ubicacion: { ciudad } } } = cliente
console.log(ciudad); //muestra cuidad: Peru

//Supongamos que queremos extraer saldo
let { datos: { cuenta: { saldo } } } = cliente
console.log(saldo); //muestra saldo: 4000

//Supongamos que queremos extraer musica
let { gustos: musica } = cliente
console.log(musica); //muestra musica: ['trance', 'rock']