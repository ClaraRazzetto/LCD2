/* EJERCICIO 1
Se cargan por teclado tres números distintos. Mostrar por pantalla el 
mayor de ellos */

function mayor(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var num3 = document.getElementById("num3").value;
    var resultado = document.getElementById("resultado");
    
    var TxtResultado = "El mayor es el número "

    if(num1 > num2 && num1 > num3){
        TxtResultado += num1;
    } else if (num2 > num1 && num2 > num3){
        TxtResultado += num2;
    } else {
        TxtResultado += num3;
    }
    
    resultado.innerHTML = TxtResultado;
}

// /* EJERCICIO 5
// Cargar dos números en objetos de tipo text y al presionar un 
// botón, mostrar el mayor. */
// function mayor(){
//     var num1 = parseInt(document.getElementById("num1").value);
//     var num2 = parseInt(document.getElementById("num2").value);
//     resultado = num1 > num2 ? num1 : num2;
//     alert("El mayor es: " + resultado);
// }
