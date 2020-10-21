var musica = 'Rock';

if (musica) {
    var musica = 'Grunge';
    console.log('Dentro del if ' + musica);
}
console.log('Fuera del IF' + musica);
//El valor de la variable al final es : Grunge
//Ya que lavariable musica se reescribe dentro del IF

//Veamos el caso en que usamos LET
let musica = 'Rock';

if (musica) {
    let musica = 'Grunge';
    console.log('Dentro del if ' + musica); //imprime Grunge
}
console.log('Fuera del IF' + musica); // imprime Rock