
/* EJERCICIO 6
Cargar un nombre y un apellido en sendos text. Al presionar un botón, 
concatenarlos y mostrarlos en un tercer text (Tener en cuenta que podemos modificar la 
propiedad value de un objeto TEXT cuando ocurre un evento */

function concatenar(){
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    
    document.getElementById("nombre_apellido").value = nombre + " " + apellido;
}