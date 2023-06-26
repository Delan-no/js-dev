 //'use strict'
document.addEventListener("DOMContentLoaded", function () {
    let startButton = document.getElementById("start");
    let stopButton = document.getElementById("stop");
    let resetButton = document.getElementById("reset");
    let chronome = document.getElementById("chrono");
    let seconde = document.getElementById("seconde");
    let minu = document.getElementById("minute");

    let counter = 0;
    let secondes = 0;
    let minutes = 0

// chronome.innerHTML = minutes + " : " + secondes + " : " + counter
startButton.addEventListener("click", function () {
        // chronome.innerHTML = minutes + " : " + secondes + " : " + counter
        function times() {
            timeout = setTimeout(function () {
                counter++;
                chronome.innerHTML = counter ;
                times();
            }, 1000/60)

            if (counter > 59) {
                counter = 0;
                secondes++;
                seconde.innerHTML = secondes + " : ";
            };

             if (secondes > 59) {
                secondes = 0;
                minutes++;
                minu.innerHTML = minutes + " : "
            }

        }
        times();
    })
    stopButton.addEventListener("click", function(){
        clearTimeout(timeout)
    } )
    
    resetButton.addEventListener("click", function(){
        clearTimeout(timeout);
        counter = 0;
        secondes = 0;
        minutes = 0;

    } )



})
