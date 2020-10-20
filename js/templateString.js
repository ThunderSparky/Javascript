const nombre = "Julinho",
    trabajo = 'Desarrollador web';
//Ambas lineas hacen lo mismo PERO con diferente sintaxis
console.log('Nombre: ' + nombre + ', Trabajo: ' + trabajo);
console.log(`Nombre: ${nombre}, Trabajo : ${trabajo}`);

//querySelector me permite seleccionar un elemento de mi HTML
const contenedorApp = document.querySelector('#mensaje');

let html = '<ul>' +
    '<li> Nombre: ' + nombre + '</li>' +
    '<li> Trabajo: ' + trabajo + '</li>' +
    '</ul>';

contenedorApp.innerHTML = html;

//La otra manera de hacerlo
let html2 = `<ul>
                <li>Nombre: ${nombre} </li>
                <li>Trabajo: ${trabajo} </li>
            </ul>`;

const contenedorApp2 = document.querySelector('#mensaje2');
contenedorApp2.innerHTML = html2;