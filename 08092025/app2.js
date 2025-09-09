let frutas = ["manzana","pera","platano","fresa"];

/*
    for (let i = 0 ; i < frutas.length ; i++ ){
        console.log(frutas[i]);
    }
*/
/*
    let i = 1;
            //1
    for (  i ; i <=7 ; i++ ){
    console.log("Hola"+i);
    }
    console.log("Termino el programa");
*/

// for of

for (let fruta of frutas){
    console.log(fruta);
}

// for in 
for (let fruta in frutas){
    console.log(fruta);
}