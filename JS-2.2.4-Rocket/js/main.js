'use strict';

/***********************************************************************************/
/* *********************************** DONNEES *************************************/
/***********************************************************************************/
let moon = document.getElementById("moon");
let billboard = document.getElementById("billboard");
let launching = document.getElementById("launching");
let firing = document.getElementById("firing");
let rocket = document.getElementById("rocket");
let span = document.querySelector("aside span");
let secondes = 10 ;
let updateSpeed = 1000 
let timerId

chrono()
function chrono (){
    span.innerHTML = `${secondes}`;
    
        setInterval(() => {
            if(secondes > 0){
                secondes--;
                span.innerHTML = `${secondes}`;
            }
        }, updateSpeed);
    
    
}
     firing.addEventListener("click", function () {
        firing.src = ""
         setTimeout(chrono, updateSpeed);
     })




/***********************************************************************************/
/* ********************************** FONCTIONS ************************************/
/***********************************************************************************/



/************************************************************************************/
/* ******************************** CODE PRINCIPAL **********************************/
/************************************************************************************/
