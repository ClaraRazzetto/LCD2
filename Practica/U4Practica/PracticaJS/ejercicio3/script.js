/* 
De un postulante a un empleo, que realizó un test de capacitación, se obtuvo la siguiente información: 
    nombre del postulante
    cantidad total de preguntas que se le realizaron
    cantidad de preguntas que contestó correctamente. 
Se pide confeccionar un programa que lea los datos del postulante e informe el nivel del mismo según el 
porcentaje de respuestas correctas que ha obtenido, y sabiendo que:
Nivel superior: Porcentaje>=90%.
Nivel medio: Porcentaje>=75% y <90%.
Nivel regular: Porcentaje>=50% y <75%.
Fuera de nivel: Porcentaje<50%. 
*/

function calcular_nivel(){
    
    var nombre_apellido = document.getElementById("nombre_apellido").value;
    var cant_respuestas = document.getElementById("cant_respuestas").value;
    var cant_preguntas = document.getElementById("cant_preguntas").value;
    var resultado = document.getElementById("resultado");
    
    var TxtResultado = "El postulante " + nombre_apellido + " Obtuvo el Nivel ";
    var porcentaje = (cant_respuestas / cant_preguntas) * 100;
    
    
    if (porcentaje >= 90){
        TxtResultado += "Superior con el " + porcentaje + "%";
    } else if(porcentaje >= 75 && porcentaje < 90){
        TxtResultado += "Medio con el " + porcentaje + "%";
    } else if(porcentaje >= 50 && porcentaje < 75){
        TxtResultado += "Regular con el " + porcentaje + "%";
    }else {
        TxtResultado += "Fuera de nivel";
    }

   resultado.innerHTML = TxtResultado;
}