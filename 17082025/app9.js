// iniciar un arreglo en vacio
let nombres = [];

//Funcion para agregar nombres
function agregarNombre(){
    let nombre = prompt("Ingresa un numbre");
    if(nombre){
        nombres.push(nombre);
        alert(`Nombre que agrego fue ${nombre}`);
    }else{
        alert("Sin datos")
    }
}

//funcion para mostrar nombres
function mostrarNombres(){
    if( nombres.length === 0){
        alert("Sin registros")
    }else{
        let mensaje = "Nombres almacenados \n";

        nombres.forEach((nombre,index)=>{
            mensaje += `${index+1}.- ${nombre} \n`;
        });
        alert(mensaje);
    }
}

//Funcion para mostrar menu

function mostrarMenu(){
    let opcion;
    
    do{

        opcion = prompt(`
            Opciones Diponbles:
            1.- Agregar Nombre
            2.- Mostrar lista de nombres
            3.- Salir
            "Elige una opcion"
            `);
        
        switch(opcion){
            case "1":
                agregarNombre();
                break;
            case "2":
                mostrarNombres();
                break;
            case "3":
                alert("Saliendo del programa");
                break;
            default:
                alert("Opcion no valida. Intenta de nuevo");
            
        }


    }while(opcion !== '3')



}
mostrarMenu();