var usuarioError = document.getElementById("usuario-error");
var zonaError = document.getElementById("zona-error");
var consumoError = document.getElementById("consumo-error");
var formError = document.getElementById("form-error");
var usuario = document.getElementsByName("usuario");
var zona = document.getElementById("zona");
var consumo = document.getElementById("consumo");
var costoTotal = document.getElementById("CostoTotal");
const costoServicio = 102;
var iva;
var costoZona;
var respuesta = document.getElementById("resultado");


function validarUsuario(){

    let seleccion = false;
    
    for(var i=0; i< usuario.length; i++){

        limpiarValidacion(usuario[i], usuarioError);
        
        if(usuario[i].checked == true){
            iva = parseFloat(usuario[i].value);
            seleccion = true;
        } 

    }

    if(seleccion == false){
        usuario[0].classList.add("error");
        usuario[1].classList.add("error");
        usuarioError.classList.add("mensaje-error");
        usuarioError.innerHTML='Por favor, seleccione una opción';
        return false;
    }

    usuarioError.classList.add("mensaje-exito");
    usuarioError.innerHTML='Valido!';
    return true;
}

function validarZona(){
   
    limpiarValidacion(zona, zonaError);

    if(zona.selectedIndex == 0){
        error(zona, zonaError);
        zonaError.innerHTML="Por favor, seleccione una opción";
        return false;
    } 
    
    exito(zona, zonaError);
    zonaError.innerHTML="Valido!";
    
    return true;
}

function validarConsumo(){
    
    limpiarValidacion(consumo, consumoError);

    if (isNaN(consumo.value)) {
        error(consumo, consumoError);
        consumoError.innerHTML="Por favor, complete el campo";
        return false;

    } else if(consumo.value <= 0){
        error(consumo, consumoError);
        consumoError.innerHTML="El consumo debe ser mayor a 0";
        return false;
    } 

    costoZona =  parseFloat(zona.options[zona.selectedIndex].value);
    exito(consumo, consumoError);
    consumoError.innerHTML="Valido!";
    return true;
}

function validarFormulario(){

    formError.classList.remove("mensaje-error");
    
    if(validarUsuario() && validarZona() && validarConsumo()){
        costoTotal.classList.remove("div_hide");
        calcularCosto();

    }else{

        formError.classList.add("mensaje-error");
        formError.innerHTML = "Por favor, complete los datos del formulario";
        
    }

}

function error(elemento, mensaje){
    elemento.classList.add("error");
    elemento.focus();
    mensaje.classList.add("mensaje-error");
}

function exito(elemento, mensaje){
    elemento.classList.add("exito");
    elemento.focus();
    mensaje.classList.add("mensaje-exito");
}

function limpiarValidacion(elemento, mensaje){
    elemento.classList.remove("error", "exito");
    mensaje.classList.remove("mensaje-error", "mensaje-exito");
}

function calcularCosto(){ 
    var resultado;
    resultado = costoServicio + (consumo.value * costoZona) *(1 + iva);
    respuesta.innerHTML = resultado.toFixed(2) + "$";
}


