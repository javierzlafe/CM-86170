/* 
 const coche= {
    marca: "toyota",
    modelo:"corolla",
    anio:"2022",
    color:"gris",

    arrancar: function(){
        console.log("el coche esta arrancando")
    },
    acelerar: function(){
        console.log("el coche esta acelerando")
    },
    frenar: ()=>{console.log("el coche esta frenando")}
 }


 coche.arrancar() */
 
 
 
 
 //const frutas = ["manzanas","bananas", "naranjas"]

                                            //FOREACH


/* 
foreach():   ejecuta una funcion por cada elemento del array
*/

 //frutas.forEach(   function(x){  console.log(x.toUpperCase())   })




                                    //MAP

/* 
map(): crea un NUEVO array con el resultado de llamar a la funcion que se ejecuta por cada elemento
*/



/* const num = [1,2,3,4,5]


let doble = num.map(   function(x){ return x*2}   )

console.log(doble)
console.log(num) */


/* 
const precios = indexedDB.fetch//http// labasededatos.com

precios.foreach(  (x)=>x * 0.8    )
precios.map(  (x)=>x * 0.9    )


alert(
    blackfriday
) */


                            //FIND


/* 
find(): se usa para buscar un elemento en un array que cumpla con cierta condicion.
devuelve SOLO el primer elemento
*/


/* 
const num = [1,2,3,4,5,6,7,8,9,10,5]
const encontrado =  num.find(  (x)=>x >=5)


if(encontrado){
    alert("si javi, hay un conincidencia")
}
 */



//                      FILTER

/* filter(): crea un nuevo array con TODOS los elementos que pasan esa prueba*/



/* const num = [1,2,3,4,5,6,7,8,9,10,5,2,4,6,32,86,54,72,98]

const numerosPares = num.filter( function(x){return x % 2===0}   )

console.log(numerosPares)
 */



//                      REDUCE

/* 
se usa para reucir a un unico valor todo el array,
aplica una funcion de reduccion en cada elemento */


/* let numeros = [1,2,3,4,5]


const precioTotal = numeros.reduce((acumulador, ValorActual)=> acumulador + ValorActual)
 */




/* 
let producto = parseFloat(prompt("ingresa el valor de lo que queres comprar")) 
let precio = []
precio.push(producto)



let compraTerminada =confirm("terminaste la compra?")

if(compraTerminada){
    let precioFinal = precio.reduce(  (acc,val)=>acc+val  )
    console.log("el precio final del carrito es " + precioFinal)
}

 */




//                  SORT

/*  ordena numeros de menor a mayor o viceversa*/



const precios= [123,654,789,528,653,129]



function menorAMayor(){
    precios.sort(  function(a,b){
        return a-b
    }  )

}
function mayorAmenor(){
    precios.sort(  function(a,b){
        return b-a
    }  )

}





