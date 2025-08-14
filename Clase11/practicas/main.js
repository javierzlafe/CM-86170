


/* 
const URL = "https://pokeapi.co/api/v2/pokemon"

let pokemonContainer = document.getElementById("pokemon-container")



fetch(URL)
.then(  response=> response.json()) //se convierte la respuesta en json
.then((data)=>{   //trabajar con los datos recibidos
    const pokemons = data.results  //extraigo el arreglo de mi resultado
    
    pokemons.forEach((pokemon)=> {
        fetch(pokemon.url) //recorre cada pokemon de la lista que me traje
        .then( response=> response.json()) 
        .then((pokemonData) =>{//maneja los datos ya convertidos
            const pokemonElement= document.createElement("div")
            pokemonElement.innerHTML = `
                <h2>${pokemonData.name}</h2>
                <img src="${pokemonData.sprites.back_default}  ">      
            `
            pokemonContainer.appendChild(pokemonElement)         
        } )
        .catch((error)=>{
            console.error("ha ocurrido un error al obtener la lista de pokemon"+ error)
        })

    })

})
.catch((error)=>{
    console.error("ha ocurrido un error al obtener la lista de pokemon"+ error)

} )
 */

let frutasContainer = document.getElementById("frutas-container")

fetch("productos.json")
.then(  response=> response.json())
.then(  data=>{
    const frutas = data.frutas

    frutas.forEach(fruta =>{
        const frutaElement = document.createElement("p")
        frutaElement.textContent =  `Nombre: ${fruta.nombre}`
        frutasContainer.appendChild(frutaElement)
        frutasContainer.className = ("pepe")
    })
}).catch(error=>{
    console.log("exploto todo" + error)
})

