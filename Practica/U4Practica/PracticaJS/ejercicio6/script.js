/*
Realizar un programa que una vez que solicita dos números por teclado, los pasa 
una función donde se calcula la suma de éstos. La función devolverá dicho resultado, 
pero en el caso de que salga negativo, deberá cambiarle el signo antes de devolverlo. 
Imprimir el resultado en la función principal. 
*/

function suma(){
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);

    var resultado = document.getElementById("resultado");

    if(num1+num2 < 0){
        resultado.innerHTML = String(((num1+num2) * -1));
    }else{
        resultado.innerHTML = num1+num2;
    }
}

// alert("Suma de dos números");
// var num1 = parseInt(prompt("Ingrese el primer número:"));
// var num2 = parseInt(prompt("Ingrese el segundo número:"));
// var resultado = suma(num1,num2)
// alert("La suma es: " + resultado);

// function suma(num1, num2){
//     resultado = num1 + num2
//     return resultado < 0 ? ((resultado) * -1) : (resultado);
// }
