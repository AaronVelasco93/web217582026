
/*
//no es valido
const myArreglo = [];
myArreglo = ["miNuevoArreglo"];
*/
/*
const myArray =[];
myArray[0] = ["miArreglo"];
console.log(myArray);
*/

const frutas = ["Banana"];
console.log(frutas);
//Se agrega a el final
    frutas.push("Sandia");
    console.log(frutas);


//Se agrega a el pricipio

    frutas.unshift("Mango");
    console.log(frutas);

//eliminar el ultimo elemento
    let frutaEliminada = frutas.pop();
    console.log(frutaEliminada);
    console.log(frutas);

// eliminar el primer elemento

    let eliminaPrimero = frutas.shift();
    console.log(eliminaPrimero);
    console.log(frutas);