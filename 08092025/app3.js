
/*
    function saludo(){
        console.log("Hola como estas");
        
    }
    saludo();
*/
/*
    //Todo esto esta mal
    console.log(function saludo);
    console.log(function saludo());
    console.log(saludo);
    console.log(saludo(""));
    console.log(saludo());
*/


/*
    //funcion con argumentos y parametros

    function saludar (nombreUsuario){
        console.log("Hola como estas "+ nombreUsuario);
    }
    saludar("Aaron");
*/
function sumar(n1,n2){
    let resulatado = parseInt(n1) + parseInt(n2);
    return resulatado;
}

var numero1 = prompt("Numero 1:");
var numero2 = prompt("Numero 2:");
let resulatdoSuma= sumar(numero1,numero2);
console.log("El resultado es: "+resulatdoSuma);




