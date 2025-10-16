//inicializamoa el arreglo vacio
let inventario = [];

// Funcion para mostrar menu
function mostrarMenu(){
    return  parseInt( prompt(`
            Opciones disponibles\n
            "1.- Agregar Producto"\n
            "2.- Mostrar todos los productos"\n
            "3.- Buscar producto por nombre"\n
            "4.- Salir"\n
            "Elige una opcion"
        `));
}

function agregarProducto(){
    let nombre = prompt("Ingresa el nombre del producto: ");
    let cantidad = parseInt(prompt("Ingresa la catidad del producto"));
    let precio = parseInt(prompt("Ingresa el precio del producto"));

    if(cantidad > 0 && precio > 0 ){
        let producto={
            nombre: nombre,
            cantidad: cantidad,
            precio: precio
        };
        inventario.push(producto);
        alert("Producto agregado");
    }else{
        alert("Cantodad y precio tiene que ser numero positivos");
    }

}


// funcion para mostrar productos

function mostrarProductos(){
    if( inventario.length === 0 ){ 
        alert("No hay productos");
    }else{
        let mensaje = "Productos en el inventario";
        for( let i =0 ; i<inventario.length; i++ ){
            mensaje+=`Producto ${i+1}:\n`+
                     `Nombre: ${inventario[i].nombre}\n`+
                     `Cantidad: ${inventario[i].cantidad}\n`+
                     `Precio: ${inventario[i].precio}\n`+
                     `----------------------------------\n`;
        }
        alert(mensaje);

    }   
}
function buscarProducto(){

    let nombreBuscar = prompt("Introduce el nombre a buscar: ");
    let encontrado = false;

    for ( let i = 0 ; i<inventario.length;i++ ){
        if( inventario[i].nombre.toLowerCase() === nombreBuscar.toLowerCase()){
            alert(
                 ` Producto encontrado: \n`+
                 `Nombre: ${inventario[i].nombre}\n`+
                 `Cantidad: ${inventario[i].cantidad}\n`+
                 `Precio: ${inventario[i].precio}`               

            );
            encontrado= true;
            break;
        }
    }
    if(!encontrado){
        alert("No se encontro");
    }
}

function iniciarPrograma(){
    let continuar = true;

    while(continuar){
        let opcion = mostrarMenu();
        switch(opcion){
            case 1:
                agregarProducto();
                break;
            case 2:
                mostrarProductos();
                break;
            case 3:
                buscarProducto();
                break;
            case 4:
                alert("Saliendo del programa");
                continuar= false;
                break;
            default:
                alert("Opcion no valida");

        }
    }
    alert("Programa Finalzado");
}

iniciarPrograma();