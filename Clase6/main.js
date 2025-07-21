
//let array = [1,"dos",true]


//let frutas = ["manzana","banana","pera"]
//indice           0        1       2

/* console.log(frutas[0]) //me tira la manzana
console.log(frutas[1]) //me arroja el elemento bananas

let frutaPreferida= frutas[2]
console.log(frutaPreferida)
 */


/* let lista1 =[10,20,30,40,50]
let lista2 =[60,70,80,90,100]


console.log( lista1 [2] + lista2[3]   )       
 */


/* let frutas = ["manzana","banana","pera"]



for(let i=0;  i<frutas.length   ;i++){
        console.log(frutas[i])
}
 */




//metodos y propiedades de los array

//push():push agrega un elemnto en la ultima posicion del array



/* let alumnos = ["nico", "paula", "karen"]
alumnos.push("luciano")

console.log(alumnos) */

//pop(): elimina el ultimo elemento de mi array

/* alumnos.pop()

console.log(alumnos) */

//shift():eliminar el primer elemento del array
/* 
let alumnos = ["nico", "paula", "karen"]

alumnos.unshift("seba")

console.log(alumnos) */

//slice(): retornar una copia de una parte del array
//no incluye la ultima posicion

/* let alumnos = ["nico", "paula", "karen","seba","walter","feli"]

const copia = alumnos.slice(0,3)
console.log(copia) */



/* const perros=["puqui","orejas","negrito","manchita"]
console.log(perros)
const gatos=["michi","salem","felix","garfield"]

const mascotas= gatos.concat(perros)
console.log(mascotas)
 */



/* 
const perros=["puqui","orejas","negrito","manchita"]

let nuevoPerro= prompt("ingresa nuevo perro")
console.log(perros)
perros.push(nuevoPerro)
 */



//INCLUDES


/* includes():me permite saber si un elemento que recibe por parametro, 
existe o no dentro del array */


/* let alumnos = ["nico", "paula", "karen","seba","fer"]


console.log(alumnos.includes("mayco")) */

/* 
let miArray=["elemento3","elemento2","elemento3","elemento3"]

let indice= miArray.filter("elemento3")



 */





let celular={
    marca: "iphone",
    modelo:"16pro"
}
let celular2={
    marca: "iphone",
    modelo:"16"
}
let celular3={
    marca: "iphone",
    modelo:"16proMax"
}

                    //OBJETOS   



/*     const empleado1 ={
        nombre:"javier",
        cargo: "profesor",
        ingreso:"25-03-2020"
    } 
    const empleado2 ={
        nombre:"Manuel",
        cargo: "teamleader",
        ingreso:"25-11-2020",
        equipo:{
            persona1: "luciano",
            persona2:"mayco"
        }
    }

    console.log(empleado2.nombre.length) */



 /*    let empleados=[
        {
            nombre:"sebastian",
            cargo:"frontend",
            edad:21,
            direccion:{
                ciudad:"buenos aires",
                calle:"avenida siempre viva"
            }
        },
        {
            nombre:"camilo",
            cargo:"frontend",
            edad:19,
            ciudad:"maldonado"
        },
        {
            nombre:"lucas",
            cargo:"frontend",
            edad:18,
            ciudad:"buenos aires"
        },
        {
            nombre:"paula",
            cargo:"fullstack",
            edad:29,
            ciudad:"montevideo"
        },
        {
            nombre:"fer",
            cargo:"profesor",
            edad:29,
            ciudad:"montevideo",
            comisiones:[60125,68569,32645]
        },
    ]




    let empleadoFerCargo= "profesor"
    let empleadoFercomision1= 60125
    let empleadoFercomision= 68569





    for(let i=0;i<empleados.length;i++){
        console.log(empleados[i])
    }


    alert(empleados[4].comisiones[1]) */


  

/*     let productos=[
        {
            producto:"arroz",
            precio:125
        },
        {
            producto:"fideos",
            precio:165
        },
        {
            producto:"pan",
            precio:2425
        },
        {
            producto:"arroz",
            precio:125
        },
        {
            producto:"fideos",
            precio:165
        },
        {
            producto:"pan",
            precio:2425
        },
        {
            producto:"arroz",
            precio:125
        },
        {
            producto:"fideos",
            precio:165
        },
        {
            producto:"pan",
            precio:2425
        },
        {
            producto:"arroz",
            precio:125
        },
        {
            producto:"fideos",
            precio:165
        },
        {
            producto:"pan",
            precio:2425
        },
        {
            producto:"arroz",
            precio:125
        },
        {
            producto:"fideos",
            precio:165
        },
        {
            producto:"pan",
            precio:2425
        },
        {
            producto:"arroz",
            precio:125
        },
        {
            producto:"fideos",
            precio:165
        },
        {
            producto:"pan",
            precio:2425
        },
        {
            producto:"arroz",
            precio:125
        },
        {
            producto:"fideos",
            precio:165
        },
        {
            producto:"pan",
            precio:2425
        },
        {
            producto:"arroz",
            precio:125
        },
        {
            producto:"fideos",
            precio:165
        },
        {
            producto:"pan",
            precio:2425
        },
    ]




    function descuentos(){
        for(let i=0;i<productos.length;i++){
            let blackfriday = productos[i].precio
            console.log(blackfriday *0.9)
        }
    }

    


    function mayuscula(){
        for(let i=0;i<productos.length;i++){
            let blackfriday = productos[i].email
            console.log(blackfriday.toUpperCase)
        }
    }

 */



    /*  
    necesito recorrer un array de remeras, y que por consola, me muestre el talle y el color de cada una

    
    */
   /* let remeras = [
  {
    talle: "M",
    color: "Negro",
  },
  {
    talle: "S",
    color: "Blanco",
  },
  {
    talle: "L",
    color: "Naranja",
  },
  {
    talle: "XL",
    color: "Negro",
  },
];
for (let i = 0; i < remeras.length; i++) {
  console.log("Talle: " + remeras[i].talle + " - Color: " + remeras[i].color);
} */





/* 
necesito un sistema que genere un descuento en cada remera (del 15%).
y que solo se active cuando llame a la funcion de Ofertas.
se debe mostrar color, talle y precio (original y con descuento)


*/


let remeras =[
    {
        talle:"M",
        color:"Azul",
        nombre:"Remera",
        precio:100,
    },{
        talle:"M",
        color:"Rojo",
        nombre:"Remera",
        precio:100,
    },{
        talle:"M",
        color:"Verde",
        nombre:"Remera",        
        precio:120,
    }
]
let ofertas = 0.85;
Oferta(ofertas);


{
for(let i=0;i<remeras.length;i++)
{
    console.log("Precio original:",remeras[i].precio);
    console.log("Precio con descuento:",remeras[i].precio*oferta);
}
}

function Oferta(oferta)