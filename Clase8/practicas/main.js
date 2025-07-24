// PASO A PASO DEL GESTOR DE TICKET


/* 
1 crear un array vacio donde vamos a meter todos los ticket *
cada ticket va a ser un objeto con propiedes id,nombre, problema, estado

2 necesito una variable que me ayude a incrementar el id de manera automatica *

3 crear una funcion que muestre el menu con las opciones. *
las opciones pueden ser: generar ticket, ver ticket, filtrar, cerrar, salir. *

4 hacer un bucle while que repita el menu hasta que el usuario diga basta. *
dentro del bucle, segun lo que elige el usuario, deberiamos llamar a la funcion correspondiente*

5 funcion para generar ticket:*
-pedirle los datos al usuario*
-creo un objeto con esos datos, el id, el nombre, el problema y el estado*
-agregamos el objeto al array*
-mostramos un alert que diga que ya se agrego el ticket*





6 funcion para ver todos los ticket:*
-recorrer el array con un foreach*
-armar un string para mostrar los datos*
-mostrar el resultado*

7 funcion para filtrar por estado (abierto/cerrado)
-pedirle al usuario que estado quiere ver
-filtrar el array
-mostrar los ticket


8 fnucion para cerrar*
-pedir el id del ticket que quiere cerrar*
-buscarlo con find*
-si existe y esta abierto, pedir confirmacion para cerrarlo*
-si acepta, cambiar el estado a "cerrado"*
*/





//creamos array donde se guardan los ticket
let tickets = []

//variable para asignar id autoincrementable
let ultimoId = 1


//funcion para mostrar menu
function mostrarMenu(){
    return prompt(
        "Gestor de tickets \n\n"+
        "1. Generar nuevo ticket \n "+
        "2. Ver todos los ticket \n "+
        "3. Filtrar ticket \n "+
        "4. Cerrar ticket \n "+
        "5. Salir"


    )
}


//bucle principal

let salir = false;

while(!salir){
    let opcion = mostrarMenu()

    switch(opcion){
        case "1": 
            crearTicket();
            break;
        case "2": 
            mostrarTickets(tickets);
            break;
        case "3": 
            filtrarPorEstado();
            break;
        case "4": 
            cerrarTicket();
            break;
        case "5": 
            salir= confirm("estas seguro de salir?")
            break;
            default:
                alert("Opcion invalida, Intenta de nuevo")
    }
}





//funcion para crear ticket

function crearTicket(){
    const nombre = prompt("Nombre del usuario:");
    const descripcion = prompt("Descripcion del problema")

    const ticket = {
        id:ultimoId++,
        nombre: nombre,
        problema: descripcion,
        estado: "abierto"
    }
    tickets.push(ticket)
    alert("✅ ticket creado")
}


function mostrarTickets(lista){
    if(lista.length ===0){
        alert("no hay ticket registrados");
        return;
    }

    let mensaje = " lista de tickets: \n\n";

    lista.forEach(  (t)=>{
        mensaje += `Id: ${t.id} - Usuario: ${t.nombre} - Descripcion: ${t.problema} - Estado: ${t.estado} \n`
    })
    alert(mensaje);
}




//funcion para cerrar un ticket

function cerrarTicket(){

    const id = parseInt(prompt("ingresa el id del ticket a cerrar:")) 
    const ticket = tickets.find(  (t)=> t.id === id )

    if(!ticket){
        alert("ticket no encontrado")
        return;
    }

    if(ticket.estado === "cerrado"){
        alert("el ticket ya esta cerrado")
        return;
    }

    const confirmar = confirm("queres cerrar este ticket?")

    if(confirmar){
        ticket.estado = "cerrado"
        alert("ticket cerrado")
    }
}



function filtrarPorEstado(){

    const estado= prompt("que estado queres ver? (abierto/cerrado)")


    if(estado !== "abierto" && estado !== "cerrado"){
        alert("estado invalido")
        return;
    }

    const filtrados = tickets.filter(  (t)=>t.estado === estado)
       mostrarTickets(filtrados)
}








