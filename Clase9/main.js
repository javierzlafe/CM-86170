

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


/* 
let contenedor =  document.getElementById("container")

contenedor.addEventListener("mousemove", (event)=>{
    console.log("x:" + event.clientX + " y: "+ event.clientY )
})

contenedor.addEventListener("click", ()=>console.log("tatatatatatatata"))
contenedor.addEventListener("mouseup", ()=>console.log("cargando"))
 */


/* let inputField = document.getElementById("pochoclo")

console.log(inputField)

inputField.addEventListener("change", function(event){
    console.log("el valor del campo cambio a: " + event.target.value)
}) */





let form = document.getElementById("formulario")

form.addEventListener("submit", function(event){
    event.preventDefault()
    confirm("queres enviarlo??")
    console.log("formulario enviado")
})