//function nombreDeFuncion(parametros si es que lleva){el cuerpo de la funcion}


/* function saludar(nombre){ //parametro
    alert("hola "+ nombre + " bienvenido a la clase" )
} */


//saludar("felipe")//argumento

                //saludar()
/* ahora... una funcion hace una tarea especifica, y la idea es que 
el nombre de una funcion sea relacionado con lo que hace 

*/




/* let usuario = "javier"


function login (){
    let usuario = prompt("ingresa tu usuario")
    //aca voy a validar si es diferente a ""
    if(usuario!==""){
        alert("bienvenido "+ usuario)
    }else{
        alert("error en el dato ingresado")
    }
}


login() */


/* let iva = 1.21
function calcularIva(importe){ //creo funcion con parametro
    if( parseFloat(importe)){
        let resultado= importe * iva
        alert("el importe mas iva es: " + resultado)
    }
}
function calcularPrecioFinal(){
    let precioDelProducto= parseFloat(prompt("ingrese el importe del producto"))
    calcularIva(precioDelProducto)
} */

//calcularPrecioFinal()


//funcion anonima


/* let sumar= function (a,b){
    return a+b
}

console.log( sumar(5,5)    ) */


//funcion flecha


/* function normal(a,b){
    let resultado = a+b
    alert(resultado)
}


let anonima =function(a,b){
    return a+b
}


let flecha =(a,b)=>a+b

 */



//suggar sintax



//ejercicios


/* 
crear una funcion llamada saludar, que muestre un mensaje con alert,
diciendo hola, bienvenido al sistema.
*/

/* function saludar(){
    alert("bienvenido al sistema")
}
saludar()
 */


/* 
modifica la funcion saludar para que repita el mensaje 3 veces usando un for*
*/


/* 
crear una funcion llamada saludarUsuario(nombre) que reciba un nombre por parametro.
y muestre un mensaje como: "hola, [nombre], que tengas un gran dia"
*/



/* 
mostrar si una palabra es corta o larga
crear una funcion analizarPalabra(palabra) que me diga si la palabra ingresada tiene
mas de 5 letras o no
*/


/* function analizarPalabra(palabra) {
  if (palabra.length > 5) {
    alert("Esta palabra es larga");
  } else {
    alert("Esta palabra es corta");
  }
}

analizarPalabra("pitufo") */



/* const AnalizarPalabra = (palabra = "programacion") => {
  tamanoPalabra = palabra.length;
  if (tamanoPalabra > 5) {
    console.log("La palabra tiene mas de 5 letras.");
  } else {
    console.log("La palabra no tiene mas de 5 letras.");
  }
};
AnalizarPalabra();
 */


/* 
function analizarPalabra(palabra) {
    if (palabra.length < 5) {
        return "La palabra es corta.";
    } else {
        return "La palabra es larga.";
    }
}
console.log(analizarPalabra("palabra")); */

/* let palabra = prompt("Ingresa una palabra").trim()
function analizarPalabra(palabra){
if(palabra.length > 5){
    alert("palabra larga")
} else {
        alert("palabra corta")
    }
}
    analizarPalabra(palabra) */




    /* 
    crear una funcion llamada doble(numero) que devuelva el doble de este numero
    
    */


   /*  function doble(num){
        return num * 2;
    }
    console.log(doble(4))



    const doble = (num) => console.log(num * 2);
    doble(2)


    const doble = num => num * 2;



console.log(doble(7)); */




/* 
crear una funcion validarPass(pass) que devuelva true 
si la contraseña tiene al menos 8 caracteres y no contiene espacios
*/





/* 
Crear una funcion que pida 3 numeros distintos al usuario.
El sistema debe comparar esos tres valos y mostar un mensaje
indicando cual es el numero mas alto  */



/* function buscarMayor() {
    let numero1 = prompt("Ingresa un numero:");
    let numero2 = prompt("Ingresa un numero:");
    let numero3 = prompt("Ingresa un numero:");
    let mayor = numero1;
    if (numero2 > mayor) mayor = numero2 ;
    if (numero3 > mayor) mayor = numero3;
    console.log(mayor + " es el numero mas alto");
  } */

/*   const n1 = parseInt(prompt("Ingrese el primer número:"));
const n2 = parseInt(prompt("Ingrese el segundo número:"));
const n3 = parseInt(prompt("Ingrese el tercer número:"));
const calcularMayor = (n1, n2, n3) => {
  if (n1 > n2 && n1 > n3) {
    return n1;
  } else if (n2 > n1 && n2 > n3) {
    return n2;
  } else {
    return n3;
  }
};
const mayor = calcularMayor(n1, n2, n3);
console.log(`El número mayor es: ${mayor}`); */





/* function numeroMasAlto(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
      return `El número más alto es: ${num1}`;
    } else if (num2 > num1 && num2 > num3) {
      return `El número más alto es: ${num2}`;
    } else if (num3 > num1 && num3 > num2) {
      return `El número más alto es: ${num3}`;
    } else {
      return "Los números son iguales o no se puede determinar un número más alto.";
    }
  }
  let numero1 = parseInt(prompt("Ingrese el primer número: "));
  let numero2 = parseInt(prompt("Ingrese el segundo número: "));
  let numero3 = parseInt(prompt("Ingrese el tercer número: "));
  alert(numeroMasAlto(numero1, numero2, numero3)); */


 /*  function mayorNumero(numero){
    if ( numero1 > numero2 && numero1 > numero3)
        alert ("el numero mas alto es" +numero1);
    }else if (numero2 > numero1 && numero2 > numero3) {
      alert("El número más alto es: " + numero2);
    } else if (numero3 > numero1 && numero3 > numero2) {
      alert("El número más alto es: " + numero3);
    } else {
      alert("Hay números iguales, deben ser distintos.");
    }
    
    mayorNumero(); */



/* let a = parseInt(prompt("Ingresa un numero"))
let c = parseInt(prompt("Ingresa un numero"))
let b = parseInt(prompt("Ingresa un numero"))
 
function masAlto(a,b,c){
    if(a>b && a>c){
        alert("el numero"+ a , "es el mas alto")
    } else if(b>a && b>c){
        alert ("el numero"+ b , "es el mas alto")
    } else if (c>a && c>b){
        alert ("el numero"+ c , "es el mas alto")
    } else{
        alert("los numeros son iguales")
    }
    }
    masAlto(a,b,c) */
/*     let num1 = parseInt(prompt("ingrese num"));
let num2 = parseInt(prompt("ingrese num2"));
let num3 = parseInt(prompt("ingrese num3"));
if (num1 > num2 && num1 > num3) {
  alert("El mayor es: " + num1);
} else if (num2 > num1 && num2 > num3) {
  alert("El mayor es: " + num2);
} else if (num3 > num1 && num3 > num2) {
  alert("El mayor es: " + num3);
} else {
  alert("Los numeros son iguales");
} */


/* function numeroMayor() {
    let num1 = parseFloat(prompt('ingresa el primer numero'))
    let num2 = parseFloat(prompt('ingresa el segundo numero'))
    let num3 = parseFloat(prompt('ingresa el tercer numero'))
    if (!num1 || !num2 || !num3) {
      alert('ingresa los numeros')
      return
    }
    let mayor = num1
    if (num2 > mayor) {
      mayor = num2
    }
    if (num3 > mayor) {
      mayor = num3
    }
    alert(`El numero mayor es: ${mayor}`)
  }
  
  numeroMayor() */




  /* 
    El sistema tiene guardado un numero secreto entre el 1 y el 10.
    el usuario tiene solo 3 intentos para adivinar ese numero.
    si lo adivina, mostramos "ganaste"
    y si no lo adivina "perdiste"
  */




    let numeroSecreto = 5;
    function adivinarNumero() {
        alert("Adivina el número secreto entre 1 y 10, recorda que tenes 3 intentos.");
        for (let i = 0; i < 3; i++) {
            let numeroUsuario = parseInt(prompt("Introduce un número:"));
            if (numeroUsuario === numeroSecreto) {
                alert("Has adivinado el número secreto.");
                return;
            } else if (numeroUsuario < numeroSecreto) {
                alert("Intenta de nuevo");
            } else {
                alert("Intenta de nuevo");
            }
        }
        alert("Lo siento, no has adivinado el número secreto. El número era " + numeroSecreto + ".");
    }
    adivinarNumero();


















    /* 
    Se necesita desarrollar un programa en JavaScript que simule un sistema de evaluación de estudiantes. 
    El sistema debe permitir:

Calcular el promedio de tres notas numéricas.

Determinar el estado académico del estudiante en base a su promedio.

Mostrar un mensaje con el nombre del estudiante, su promedio y su estado final.*/


/* let nombre = prompt("Ingrese su nombre:");
let a = parseInt(prompt("Ingrese el primera nota:"));
let b = parseInt(prompt("Ingrese el segunda nota:"));
let c = parseInt(prompt("Ingrese el tercera nota:"));
let promedio = (a + b + c) / 3;
if (promedio >= 7) {
  alert("Promocionado con un promedio de: " + promedio);
} else if (promedio >= 4) {
  alert("Aprobado con un promedio de: " + promedio);
} else if (promedio >= 1) {
  alert("Desaprobado con un promedio de: " + promedio);
}

 */


let a = parseInt(prompt("Ingrese la primera nota"))
let b = parseInt(prompt("Ingrese la segunda nota"))
let c = parseInt(prompt("Ingrese la tercer nota"))
let promedio = 0
function calcular (a,b,c){
promedio = (a+b+c)/3
    if(promedio>=7){
        alert("sos re estudioso, tenes un "+ promedio + "de promedio")
    } else if (promedio<7)
        alert("sos un burro")
    
}
calcular(a,b,c)