
//&& || !

/* let numA = parseInt(prompt("ingresa el primer numero")) 
let numB = parseInt(prompt("ingresa el segundo numero")) 

if (numA < numB &&  (numA>=18 && numB <=60) ){
    alert("te dejo entrar")
}else if(numA < numB &&  (numA>=60 && numB <80)){
    alert("ingresa, pero firmame, que si moris, es tu culpa")
}else{
    alert("no pasas")
}
 */

/* el usuario ingresa su nombre
le doy la bienvenida y muestro por pantalla
si el usuario esta vacio lo saco y aviso el error en consola */


/* let usuario = prompt("ingresa tu usuario")
if (usuario){
    alert("bienvenido "+usuario)
}else{
    console.error("no pusiste el susario")
} */


/* let num1 = parseInt(prompt("ingresa primer numero")) 
let num2 = parseInt(prompt("ingresa segundo numero"))
let operacion= prompt("ingresa la operacion que deceas realizar")
let resultado = 0

if (operacion === "+"){
    resultado = num1 +num2
}else if(operacion ==="-"){
    resultado = num1-num2
}
else if(operacion ==="*"){
    resultado = num1-num2
}
else if(operacion ==="/"){
    resultado = num1-num2
} */



/* 
dar la bienvenida*
consulta sobre el coche a elegir*
color del coche
confirmar si tenemos coche y si no, avisar al usuario
*/


alert("bienvenido/a a la consecionaria del pela")
let comprar = confirm("te puedo ayudar a buscar tu coche?")


if(comprar){
    let marca = prompt("que coche buscas, ingresa la marca")
    let color = prompt("elegi el color de tu " + marca)
    //estructura del switch
    
    switch(color){ //esto es la key
        case "blanco":
            alert("tenemos "+ marca + " en color "+ color)
            break;
        case "negro":
            alert("tenemos "+ marca + " en color "+ color)
            break;
        case "gris":
            alert("tenemos "+ marca + " en color "+ color)
            break;
        case "rojo":
            alert("tenemos "+ marca + " en color "+ color)
            break;
        default:
            alert("no tenemos "+ marca+ " en color "+color)
    }
}





