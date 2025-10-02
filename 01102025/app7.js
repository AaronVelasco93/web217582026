// carrito de frutas

const frutas = [];

const fruta = prompt("Que fruta desea comprar");

frutas.push(fruta);

while ( confirm('Desea agregar otra fruta?') ){
    const fruta =prompt('Que otra furta agregas a tu carrito?');
    frutas.push(fruta);
    
}

frutas.forEach((fruta,numeroFruta)=>{
    console.log(`${numeroFruta+1} .- ${fruta}`);
});


/*
for ( let fruta of frutas ){
    alert(`${fruta}\n`);
    console.log(fruta);
}
    */