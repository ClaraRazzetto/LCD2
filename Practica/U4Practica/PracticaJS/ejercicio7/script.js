/* EJERCICIO 4
Crear un programa que permita cargar un entero en un text y al presionar un botón 
nos muestre dicho valor elevado al cubo (emplear la función alert).  */

function cubo(){
    var num = document.getElementById("num").value;
    var cubo;

    num = parseInt(num);
    cubo = (num * num * num);
    alert("El cubo es: " + cubo);

}