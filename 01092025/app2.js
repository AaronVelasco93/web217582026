
/*let opUser= prompt (`
    Selecciona una opcion
        1.- Libros
        2.- Pelicula
        3.- Juego
    `);
    */
let opUser= prompt (" Selecciona una opcion \n 1.- Libros \n 2.- Pelicula\n 3.- Juego");
    
    switch( opUser){
        case "1":
            console.log("1984");
            break;

        case "2":
            console.log("Matrix");
            break;
        case "3":
            console.log("LOL");
            break;
        default:
            console.log("Dato invalido");
            break;
     }