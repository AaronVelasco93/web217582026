const form = document.getElementById('userForm');
const salida = document.getElementById('salidaJson');
const descargaBtn= document.getElementById('descargaBtn');

let usuarios  = JSON.parse(localStorage.getItem('usuarios')) || [];
mostrarUsuario();

form.addEventListener('submit',function(e){
    e.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;
    const nuevoUsuario={
        nombre: nombre,
        correo: correo
    }
   
    usuarios.push(nuevoUsuario);
    localStorage.setItem('usuarios',JSON.stringify(usuarios));

    mostrarUsuario();
    form.reset();

});

function mostrarUsuario(){
    salida.textContent = JSON.stringify(usuarios,null,2);
}

// descarga de archivo

descargaBtn.addEventListener('click',function(){
    // convertimos el array de objeto JSON
    const contenidoJSON = JSON.stringify(usuarios,null,2);
    
    //se genera un objeto para poder guardar los datos objeto Blob
    const blob = new Blob([contenidoJSON],{type: "application/json"});

    const url  = URL.createObjectURL(blob);

    const enlace = document.createElement('a');
    enlace.href= url;
    enlace.download = 'usuarios.json';
    enlace.click();
    
    URL.revokeObjectURL(url);

});


