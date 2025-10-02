let nombres = [];

function agregarNombre(){
    let nombre = prompt("Agrega un nombre");

    if(nombre){
        nombres.push(nombre);
        alert(`!Nombre: "${nombre}", se agrego de forma correcta`);
    }else{
        alert("El nombres no puede estar vacio");
    }

}


function mostrarNombres(){
    if( nombres.length === 0){
        alert("No tenemos nombres almacenados.");
    }else{
        let mensaje = "Nombre alamcenados\n";
        nombres.forEach((nombre,indice)=>{
            mensaje+=`${indice+1} . ${nombre}\n`;
        });
        alert(mensaje);
    }
}

function mostrarMenu(){
    let opcion;
    do{
        opcion = prompt(`
            Opciones disponibles: 
            1.- Agregar Nombre.
            2.- Mostrar Nombres.
            3.- Salir
            "Secciona una opcion"
            `);

        switch(opcion){
            case '1':
                agregarNombre();
                break;
            case '2':
                mostrarNombres();
                break;
            case '3':
                alert("Saliendo del programa");
                break;
            default:
                alert("Opcion no valida");
        }


    }while(opcion !== '3');
}

mostrarMenu();