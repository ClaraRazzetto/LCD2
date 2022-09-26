/* EJERCICIO 1 
Realizar un programa que simule, mediante una función denominada cuenta, como el ordenador cuenta por pantalla,
desde 0 hasta un número a determinar por el usuario. Dicho número se pide en la función principal y 
se envía a la función cuenta por valor, donde se irán imprimiendo. 
*/

// var num = prompt("Ingrese un número:");
// cuenta(num);

// function cuenta(num){
//     console.log("Cuenta:")
//     for(var i=0; i<= num; i++){
//        console.log(i)
//     }
// }


/* EJERCICIO 2. 
Realizar un programa que una vez que solicita dos números por teclado, los pasa 
una función donde se calcula la suma de éstos. La función devolverá dicho resultado, 
pero en el caso de que salga negativo, deberá cambiarle el signo antes de devolverlo. 
Imprimir el resultado en la función principal. 
*/

// alert("Suma de dos números");
// var num1 = parseInt(prompt("Ingrese el primer número:"));
// var num2 = parseInt(prompt("Ingrese el segundo número:"));
// var resultado = suma(num1,num2)
// alert("La suma es: " + resultado);

// function suma(num1, num2){
//     resultado = num1 + num2
//     return resultado < 0 ? ((resultado) * -1) : (resultado);
// }


/* EJERCICIO 3
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


/* EJERCICIO 4
Crear un programa que permita cargar un entero en un text y al presionar un botón 
nos muestre dicho valor elevado al cubo (emplear la función alert).  */

// function cubo(){
//     var num = document.getElementById("num").value;
//     num = parseInt(num);
//     var cubo = (num * num * num);
//     alert("El cubo es: " + cubo);
// }

/* EJERCICIO 5
Cargar dos números en objetos de tipo text y al presionar un 
botón, mostrar el mayor. */
function mayor(){
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    resultado = num1 > num2 ? num1 : num2;
    alert("El mayor es: " + resultado);
}


/* EJERCICIO 6
Cargar un nombre y un apellido en sendos text. Al presionar un botón, 
concatenarlos y mostrarlos en un tercer text (Tener en cuenta que podemos modificar la 
propiedad value de un objeto TEXT cuando ocurre un evento */

function concatenar(){
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    document.getElementById("nombre_apellido").value = nombre + apellido;
}

