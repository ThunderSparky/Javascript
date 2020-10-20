//Métodos, en este caso nuestros metodos son : reproducir, pausar
const musica = {
    reproducir: function(cancion) {
        console.log("reproduciendo la cancion: " + cancion);
    },
    pausar: function() {
        console.log("pausa ...");
    }
}

musica.reproducir('Hoy es noche de sex'); //lo que imprime es reproduciendo la cancion: hoy es noche de sex

//Los metodos tambien pueden ir por fuera
musica.borrar = function(id) {
    console.log("Borrando la cancion con el ID: " + id);
}

musica.borrar(120); // devolverá : borrando la cancion con el id : 120