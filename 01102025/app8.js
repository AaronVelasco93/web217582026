/*
var miCarro = new Object();
    miCarro.marca = 'ford';
    miCarro.modelo = 'Ikon Fiesta';
    miCarro.año = 2013;

    console.log(miCarro);
*/
/*
    //Arreglos
    let frutas =["Manzana", "Pera","Platano","Melon","Sandia"];
    console.log(frutas);
*/

var miCarro ={
    marca: 'ford',
    modelo: 'Ikon Fiesta',
    año:2013 
};
console.log(miCarro);

console.log(miCarro.marca);
console.log(miCarro.año);
console.log(miCarro.kilometraje);

console.log(miCarro);

miCarro.kilometraje = 135256;

console.log(miCarro);

miCarro.año=2022;
miCarro.kilometraje = 25035;

console.log(miCarro);

delete miCarro.modelo;

console.log(miCarro);


