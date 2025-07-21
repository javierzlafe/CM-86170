

//if(condicion){lo que pasa si es verdadera}

/* let nombre = prompt("ingresa tu nombre")

if(nombre==="nicolas"){
    alert("bienvenido nico a la clase")
}else if(nombre == "inna"){
    alert("ahhh vos sos inna, welcome")
}else if(nombre== "lucas"){
    alert("que haces amigo?")
}else{
    alert("es posible que vos seas brian?")
} */


/* let nombreCompleto = prompt("ingresa tu nombre")
let apellido= prompt("ingresa tu apellido")

alert("hola "+nombre + " "+apellido) */


/* = ASIGNACION
== COMPARACION
=== COMPARACION ESTRICTA */

//operadores logicos avanzados  && || !=
 

/* let nombre="walter"
let pass = "1234"

if(nombre == "walter" || pass=="1234"){
    alert("bienvenido al sistema")
}else(alert("acceso denegado"))
 */

/* let numero

if(numero != String){
    alert("esto no es un numero")
}
 */



//desde, hasta,actualizacion


/* for(let i =0; i<5;i++){
    console.log("estoy iterando "+i)
} */


/* let iterar = true

while(iterar){
    console.log("imprimio el mensaje en la consola")
    iterar = confirm("desea continuar?")
    
} */

/* 
let contador = 1

do{
    console.log(" el valor del contador es 6")
    contador++
}while(contador <3) */



let identificar = true
let intentos = 1

do{
    let nombre = prompt("ingresa tu usuario")
    
    if(nombre ===""){
        alert("debes ingresar un dato")
        break
    }
    if(nombre === "javier gimenez" && intentos <=3){
        alert("bienvenido javier al sistema")
        identificar = false
    }else{
        alert("no se reconoce el usuario "+nombre)
        intentos++
        if(intentos>3){
            alert("usted supero los intentos")
            break
        }
    }
}while(identificar)
