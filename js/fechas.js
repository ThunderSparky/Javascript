const diaHoy = new Date(); //La fecha de hoy 

let valor = diaHoy;
valor = diaHoy.getMonth(); // Retorna el numero del mes actual (empieza con Enero = 0, Febrero=1 y asi..)
valor = diaHoy.getDay(); // Retorna el día de la semana (Domingo = 0, Lunes = 1, ..)
valor = diaHoy.getDate(); // Retorna el número del día del mes
valor = diaHoy.getFullYear(); //Retorna el año actual
valor = diaHoy.getMinutes(); // Retorna los minutos de la hora ACTUAL
valor = diaHoy.getHours(); // Retorna la hora del dia 
valor = diaHoy.getTime(); // Retorna un Time Span que esta en milisegundos
valor = diaHoy.setFullYear(2000); //Cambiamos el año
valor = diaHoy.getFullYear(); // Nos mostrará el año 2000 porque arriba cambiamos el año 

console.log(valor);

// new Date es igual a Mes, Dia, Año    
const unDia = new Date("1-5-1987");
let valor2;
valor2 = unDia.getDay(); // Devolverá 1 (que significa Lunes)