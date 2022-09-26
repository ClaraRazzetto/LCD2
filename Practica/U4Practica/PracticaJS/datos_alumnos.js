// • Nombre
// • Apellido
// • Domicilio
// • Curso
// • Carrera
// • Materia
// • Nota primer parcial

function mostrar_datos(){

    var inputs = document.getElementsByTagName("input");

    for(var i=0; i >= 7; i++){
        console.log(inputs[i].getAttribute("id") + ": " + inputs[i].value);
    }
    
}