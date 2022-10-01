/* EJERCICIO 2
Se ingresa por teclado un valor entero, mostrar una leyenda que indique si 
el número es positivo, cero o negativo. */


function tipo_numero(){

    var num = document.getElementById("numero").value;
    var resultado = document.getElementById("resultado");

    if (num < 0) {
        resultado.innerHTML = "El número es negativo";
    } else if(num > 0) {
        resultado.innerHTML = "El número es positivo";
    } else {
        resultado.innerHTML = "El número es nulo";
    }
    

}

/* EJERCICIO 
Realizar un programa que, pidiendo la introducción de un número,averigüe mediante una función, 
si dicho número que se le pase es positivo, negativo o nulo. Para ello, deberá escribir en 
pantalla, en caso positivo, el mensaje “El número es positivo”. En el caso de ser negativo escribirá 
“El número es negativo”. Si resulta ser nulo escribirá “El número es nulo”. 
*/

// var num = parseInt(prompt("Ingrese un número"));
// resultado = tipo_numero(num);

// function tipo_numero(num){
//     if (num < 0) {
//         alert("El número es negativo");
//     } else if(num > 0) {
//         alert("El número es positivo");
//     } else {
//         alert("El número es nulo");
//     }
// }
