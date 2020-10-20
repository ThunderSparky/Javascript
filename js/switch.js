const metodoPago = 'Efectivo';

switch (metodoPago) {
    case 'Efectivo':
        hola();
        break;
    case 'Cheque':
        console.log(`Pagaste con ${metodoPago} revisaremos que tiene fondo`);
        break;
    case 'Tarjeta':
        console.log(`Pagaste con ${metodoPago} espere un momento...`);
        break;
    default:
        console.log("Aun no has pagado");
}

function hola() {
    console.log("Hola amigos");
}