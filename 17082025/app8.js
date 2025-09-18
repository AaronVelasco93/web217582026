const frutas=[];
const fruta = prompt("Que fruta quieres agregar a tu carrito");

    frutas.push(fruta);
while( confirm("Quieres agregar una nueva fruta?") ){
    const fruta = prompt("Que otra fruta quieres agregar a tu carrito");
    frutas.push(fruta);
}
console.log("Usted compro: ");

for(let fruta of frutas){
    console.log(fruta);
}