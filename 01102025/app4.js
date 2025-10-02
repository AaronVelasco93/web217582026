// carrito de frutas

const frutas = [];

const fruta = prompt("Que fruta desea comprar");

frutas.push(fruta);

// console.log(fruta);
// console.log(frutas);

while ( confirm('Desea agregar otra fruta?') ){
    const fruta =prompt('Que otra furta agregas a tu carrito?');
    frutas.push(fruta);
    
}

// console.log(frutas);

for ( let fruta of frutas ){
    alert(`${fruta}\n`);
    console.log(fruta);
}