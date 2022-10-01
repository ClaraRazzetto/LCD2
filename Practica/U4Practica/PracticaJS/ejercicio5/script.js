/*
Realizar un programa que simule, mediante una función denominada cuenta, como el ordenador cuenta por pantalla,
desde 0 hasta un número a determinar por el usuario. Dicho número se pide en la función principal y 
se envía a la función cuenta por valor, donde se irán imprimiendo. 
*/

function cuenta(){
    var numero = document.getElementById("numero").value;
    var contador = document.getElementById("contador");
    var contador2 = document.getElementById("contador2");

    for(i=0; i <= numero; i++){
        
        (function(i){
            window.setTimeout(function (){
                contador.innerHTML = i.toString();
            }, i * 2000);
        }(i));

        // (function(){}()) https://developer.mozilla.org/en-US/docs/Glossary/IIFE

    }

    for(let i=0; i <= numero; i++){ 
        //Usando let hacemos que la variable i sea global
    
        window.setTimeout(function (){
            contador2.innerHTML = contador2.innerHTML + '-' + i.toString();
        }, i * 2000);
    
        // (function(){}()) https://developer.mozilla.org/en-US/docs/Glossary/IIFE

    }
}









// var num = prompt("Ingrese un número:");
// cuenta(num);

// function cuenta(num){
//     console.log("Cuenta:")
//     for(var i=0; i<= num; i++){
//        console.log(i)
//     }
// }