//modelo de negocio - informacion de como se organiza la empresa

//CONTROL DE STOCK


/* 
    modelo de informacion del producto => objeto    *
    modelado de producto => funcion constructora    *
    necesito el inventario productos  =>  lista de productos      *


    abm *
    funcion de filtrado *
    funcion alta        *
    funcion baja        
    funcion modifico
    guardar productos en el storage

*/


//funcion para guardar los productos en el storage

function guardarLista(){
    localStorage.setItem("productos", JSON.stringify(lista))
}

//cargar la lista desde local storage



//modelo de informacion
let obj={
    nombre:"producto",
    precio:123,
    stock:123
}


const Producto = function(nombre,precio,stock){
    this.nombre=nombre
    this.precio=precio
    this.stock=stock
}


let listaGuardada = localStorage.getItem("productos")

let lista

if(listaGuardada){
    lista = JSON.parse(listaGuardada)
    console.table(lista)
}else{
   agregarProducto()

}



/* let producto1 = new Producto("notebook LENOVO", 1400000,25)
let producto2 = new Producto("notebook samsung", 1700000,15)
let producto3 = new Producto("notebook macbook", 2000000,17)


let lista=[producto1,producto2,producto3]
 */
//------------------------------------------------------------------------------------
//aca arranca el abm

function filtrarProductos(){
    let palabraClave= prompt("ingresa el producto que buscas")
    let resultado= lista.filter( (producto)=>producto.nombre.includes(palabraClave))

    if(resultado.length >0){
        console.table(resultado)
    }else{
        console.error("no se encontro ninguna coincidencia")
    }

}



function agregarProducto(){
    
    let nombre = prompt("ingresa el nombre del nuevo producto:")

    if(!nombre){
        alert("el nombre no puede estar vacio")
        return;
    }   

    //verificamos si el producto ya existe

    let existe = lista.find(  (producto)=>producto.nombre.toLowerCase() === nombre.toLowerCase()  )



    if(existe){
        alert("ya existe un producto con ese nombre")
        return;
    }

    
    let precio = parseFloat(prompt("ingresa el precio de "+ nombre))

    if(isNaN(precio) || precio <=0){
        alert("el precio ingresado no es valido")
        return;
    }


    let stock = parseInt(prompt("ingresa el stock del propducto"))

    if(isNaN(stock) || stock<=0){

        alert("el stock ingresado no es valido")
        return;

    }

    //si todo esta bien validado y no hay errores

    let nuevoProducto = new Producto(nombre,precio,stock)
    lista.push(nuevoProducto)
    guardarLista()
    console.table(lista)

}

