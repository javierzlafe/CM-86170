

/* function Producto(id, nombre, importe, stock){
    this.id = id
    this.nombre = nombre
    this.importe = importe
    this.stock = stock
}

let producto1 = new Producto(1, "teclado", 15000,25)
let producto2 = new Producto(2, "mouse", 15000,25)
let producto3 = new Producto(256, "mouse", 15000,25)


alert(producto1.importe) */


/* 
function Personas(nombre,apellido,edad,ingreso){
    this.nombre=nombre
    this.apellido=apellido
    this.edad=edad
    this.ingreso= ingreso
    this.causa= function(){
        console.log(`paciente ${this.nombre} ingresado por ${this.ingreso}`)
    }
}

let pacientes=[]



persona1.causa()
persona2.causa() */


/* 
function Producto(id, nombre, importe, stock){
    this.id = id
    this.nombre = nombre
    this.importe = importe
    this.stock = stock
}

let producto1 = new Producto(1, "notebook lenovo", 15000,25)
let producto2 = new Producto(2, "notebook samsung", 15000,25)
let producto3 = new Producto(256, "notebook macbook", 15000,25)

let lista =[producto1,producto2,producto3]



function filtrarProductos(){
let palabraClave = prompt("decime que producto buscas")
let resultado = lista.filter((producto)=>producto.nombre.includes(palabraClave))


if(resultado.length >0){
    console.table(resultado)
}else{
    console.log("no se encontro nada")
}

}

 */




//HAY 4 METODOS PARA EL USO DEL STORAGE


/* 
setItem() permite crear una clave y asignarle un valor
getItem() permite recuperar o traer una clave desde el storage
removeItem() para eliminar un dato
clear() limpia todo
*/



//JSON.stringify convierte un objeto de javascript en json
//JSON.parse convierte un json en un objeto javascript


function sacarPass(){
    const datos= JSON.parse(localStorage.getItem("usuario"))
console.log(datos)
}





