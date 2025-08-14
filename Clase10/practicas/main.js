

/* 
funcion para cargar el perfil*
retornar la promesa usando resolve y reject*
settimeout para simular el proceso con math.random*
condicional*

funcion asincronica que consuma a la anterior
usamos asinc y await
try, catch
mostrar en dom

modularizar salida al dom

*/





//AHORA USAMOS EL DOM

//simula la lectura de un perfil, desde un archivo o una base de datos

 function cargarPerfilUsuario(){

    return new Promise(  (resolve,reject)=>{
        setTimeout( ()=>{
            const exito = Math.random() > 0.2 // 80% de chances de que sea verdadero


            if(exito){
                //Datos simulados del perfil
                const perfil = {
                    nombre: "juan perez",
                    edad: 30,
                    deporte: "taekwondo",
                    nivel: "cinturon negro 3er dan"
                }
                resolve(perfil)
            }else{
                reject("error: no se pudo cargar el perfil")
            }
        },1000)

    })

} 
//------------------------------------------------------------------------------------

async function mostrarPerfil(){

    try{

        const perfil = await cargarPerfilUsuario()
        mostrarMensaje(`nombre: ${perfil.nombre}`)
        mostrarMensaje(`edad: ${perfil.edad}`)
        mostrarMensaje(`deporte: ${perfil.deporte}`)
        mostrarMensaje(`nivel: ${perfil.nivel}`)
    }catch(error){
        mostrarMensaje(error)
    }
}




//------------------------------------------------------------------------------------

function mostrarMensaje(texto){
    const div = document.getElementById("output") //voy a buscar al html el contenedor
    const p= document.createElement("p")  //crear un elemento de tipo parrafo
    p.textContent = texto   //le agrego el contenido textual a mi parrafo
    div.appendChild(p)
}




mostrarPerfil()