

/* 
crear un programa que cuente del 1 al 10 
que muestre cada numero por consola
*/


/* for (let i = 1; i <= 10; i++) {
    console.log("voy por el numero" + i);
  }

  let contador=1
do{
    console.log("el valor del contado es: "+contador)
    contador++
} while( contador <=10)


let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
} */



/* 
Mostrar todos los numero pares 
desde el 2 al 20 
usando un bucle
*/

/* 
for (let i = 1; i <= 20; i++) {
    if (i % 2 == 0) {
      console.log(i);
    }
  }

  let i = 2; 

while (i <= 20) {
   if(i % 2 == 0){
       console.log(i);
   }
    i++
}

for (let i=2; i<=20; i++) {
    if( i % 2 === 0) {
        console.log(i + " es par");
    }
}


let i =2;
while (i<=20){
 if(i%2==0){
console.log("son pares: " + i)
}
i++
} 



for (let par = 2; par <= 20; par += 2) {
  console.log(par);
}*/


/* for (let i =2; i<=20; i= i+2){
    console.log(i)
} */




/* 
Declarar una variable con una edad (x)
van a usar condicionales para mostrar si:
la persona es "menor de edad", "adulto joven", "adulto"

*/

/* let edad = prompt("Ingresa una edad:"); //falta parsear
if (edad >= 30) { 
  console.log("Adulto");
} else if (edad >= 21 && edad <30) {    21
  console.log("Adulto joven");
} else {
  console.log("Menor de edad");
}






let edad=prompt("Ingrese su edad");
if (edad < 18) {
    alert("Eres menor de edad");
}
else if (edad >= 18 && edad < 35) {
    alert("Eres adulto joven");
}
else {
    alert("Eres adulto");
}



let edad = prompt("Ingrese su edad:");
edad = parseInt(edad);
if (edad < 18) {
  console.log("Menor de edad");
} else if (edad >= 18 && edad < 30) {
  console.log("Adulto joven");
} else {
  console.log("Adulto");
}


let edad= parseInt prompt("Ingrese su edad: ")
if(edad<18){
    console.log("Es menor de edad")
}else if(edad>=18){
    console.log("Usted es un adulto joven")
}else{
    console.log("Usted está viejo")
} */





/* 
let palabra = prompt("Ingrese una palabra:");
let vocales = "aeiouAEIOU";
let contador = 0;
for (let i = 0; i < palabra.length; i++) {
  if (vocales.includes(palabra[i])) {
    contador++;
  }
} */


/* 

pedir al usuario que ingrese una palabra
vamos a contar la cantidad de vocales que tiene esa palabra
teniendo en cuenta mayusculas y minusculas

*/











function buscarVolcales(){


    let palabra = prompt("ingresa una palabra:").toLowerCase().trim()
    let vocales = 0
    
    for(let i = 0; i< palabra.length; i++){
        let letra = palabra[i]
    
        if(letra === "a" || 
           letra === "e" || 
           letra === "i" || 
           letra === "o" || 
           letra === "u"){
            vocales = vocales+1
        }
    }
    console.log("la palabra tiene " +vocales+" vocales")


}

buscarVolcales()
buscarVolcales()
buscarVolcales()