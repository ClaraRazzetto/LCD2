// • Nombre
// • Apellido
// • Domicilio
// • Curso
// • Carrera
// • Materia
// • Nota primer parcial

function mostrar_datos(){
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var domicilio = document.getElementById("domicilio").value;
    var curso = document.getElementById("curso").value;
    var carrera = document.getElementById("carrera").value;
    var materia = document.getElementById("materia").value;
    var nota_parcial = document.getElementById("nota_parcial").value;

    var resultado = document.getElementById("resultado");

    resultado.insertAdjacentHTML('beforeend', '<p><b>Nombre:</b> ' + nombre + '</p>')
    resultado.insertAdjacentHTML('beforeend', '<p><b>Apellido:</b> ' + apellido + '</p>')
    resultado.insertAdjacentHTML('beforeend', '<p><b>Domicilio:</b> ' + domicilio + '</p>')
    resultado.insertAdjacentHTML('beforeend', '<p><b>Curso:</b> ' + curso + '</p>')
    resultado.insertAdjacentHTML('beforeend', '<p><b>Carrera:</b> ' + carrera + '</p>')
    resultado.insertAdjacentHTML('beforeend', '<p><b>Materia:</b> ' + materia + '</p>')
    resultado.insertAdjacentHTML('beforeend', '<p><b>Nota primer parcial:</b> ' + nota + '</p>')
}

// EJERCICIO 4
// function mostrar_datos(){

//     var inputs = document.getElementsByTagName("input");

//     for(var i=0; i >= 7; i++){
//         console.log(inputs[i].getAttribute("id") + ": " + inputs[i].value);
//     }
    
// }