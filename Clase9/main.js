

/* let nombre = prompt("ingresa usuario")

if( nombre== "javier"){
    titulo.innerHTML= "bienvenido profe"
}else{
    titulo.innerHTML= "bienvenido alumno"
}
 */

/* boton.onclick = function(){
    boton.innerHTML = "carlitos"
} */



//elemento.addevenlistener(evento,funcion)


/* let boton = document.getElementById("boton") */



/* function saludar(){
   let nombre = prompt("ingresa tu nombre")
    alert("bienvenido al sistema "+nombre)
} */



/* 
let titulo = document.getElementById("titulo")


titulo.addEventListener("click", ()=>console.log("hola desde un evento"))
 */



let contenedor =  document.getElementById("container")

contenedor.addEventListener("mousemove", (event)=>{
    console.log("x:" + event.clientX + " y: "+ event.clientY )
})

contenedor.addEventListener("click", ()=>console.log("tatatatatatatata"))
contenedor.addEventListener("mouseup", ()=>console.log("cargando"))


