
//set timeout (establecer tiempo de espera)

//setTimeout(function,tiempo);



/* function saludar(){
    console.log("hola")
}



setTimeout(saludar,  2000) */

//setInterval(  ()=> console.log("hola don pepito"), 1000  )



/* let num = prompt("ingresa los segundos")
let segundos = num*1000


let time= setInterval( ()=>{
    const date = new Date();
    console.log(date.toLocaleTimeString())
}, 1000  )



setTimeout(() =>{
    clearInterval(time)
},segundos); */



/* const promesa = new Promise( (resolve,reject)=>{
//hacer algo asincronico, solicitud http
//si la operacion se realiza bien, llama al resolve con el resultado
//si la promesa falla, llamo al reject con su respectivo error
})


promesa.then(  resultado=>{
    //maneja el resultado si la promesa se cumple
} ).catch(error=>{
    //maneja el error si la promesa se rechaza
}) */





/* const eventoFuturo = (x)=>{
    return new Promise(  (resolve,reject)=>{
        if(x===true){
            resolve("promesa resuelta")
        }else{
            reject("promesa rechazada")
        }
    } )
}



console.log(eventoFuturo(false)) */




/* 
function holaMundo(){
    const mensaje = "hola mundo"

    try{
        procesarMensaje()
    }catch(error){
        console.log(error)
    }finally{
        console.log("saliendo del sistema")
    }
} */


/* 
function leerArchivo(){
    return new Promise( resolve=>{
        setTimeout( ()=>{
            resolve("esto es el contenido del archivo simulando que tardo 2 segundos")
        },2000  )
    } )
}


async function procesoAsincronico(){
    console.log("iniciando lectura del archivo")

    const contenido = await leerArchivo()

    console.log("el archivo se esta leyendo")
    console.log(contenido)
}

procesoAsincronico() */



/* 
crear una funcion leer un archivo 
generar una promesa
simular con un setTimeout
usamos el resolve

generar la funcion asincronica
implementaar try y catch
*/



/* function leerArchivo() {
    const miPromesa = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Contenido del archivo");
      }, 2000);
        reject("exploto todo")
    });
    return miPromesa;
  }
  async function asincronia() {
    console.log("Inicia lectura del archivo");
    console.log("Leyendo el archivo");
    try {
      const resultado = await leerArchivo();
      console.log(resultado);
    } catch (error) {
      console.log(error);
    }
  }
  asincronia(); */
