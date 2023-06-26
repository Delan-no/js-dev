'use strict';


// la tierce......3
let chrono = {
    tierce: 0,
    seconde: 0,
    minute: 0,
}
let chronoDom;
let updateSpeed = 1000 / 60;

let timerId;
document.addEventListener("DOMContentLoaded", function () {


    /**
     * Déclarer des variables pour les tierces, min et secondes
     * récuperer les éléments de déclenchement et d'arrêt
     * récupérer l'élément html où afficher le chronomètre 
     * 
     * 
     * Au clic du bouton START, le chronomètre commence par compter ( serTimeout)
     *          - la tierce compte de 0 à 59
     *          - la seconde s'incrémente de 1. Quand elle atteint 59, 
     *          - la minute s'incrémente de 1 et la seconde retourne à 00
     * Au clic du bouton STOP, le chronomètre s'arrête (clearTimeout)
     */


    // L'objet du DOM où sera écrit la valeur du chronomètre

    chronoDom = document.querySelector("#chrono");

    // Le bouton de démarraghe du chronomètre
    let startButton = document.querySelector("#strt-btn");
    // Le bouton de d'arrêt du chronomètre
    let endButton = document.querySelector("#stop-btn");
    // Le bouton de de réinitialisation du chronomètre
    let resetButton = document.querySelector("#reset-btn");
     updateDisplay();


    startButton.addEventListener("click", function () {
        startButton.disabled = true;
        endButton.disabled = false;
        timerId = setTimeout(updateChrono, updateSpeed);
    })


    endButton.addEventListener("click", function () {
        clearTimeout(timerId);
        startButton.disabled = false;
        endButton.disabled = true;
    })


    resetButton.addEventListener("click", function () {
        clearTimeout(timerId);
        chrono.minute = 0;
        chrono.seconde = 0;
        chrono.tierce = 0;
        updateDisplay();
    })


})



/**=====================================
 * FONCTIONS DU CHRONOMETRE
 ======================================*/

function updateChrono() {
    //Modification des valeurs à afficher
    if (chrono.tierce < 59) {
        chrono.tierce++;
    } else if (chrono.seconde < 59) {
        chrono.tierce = 0;
        chrono.seconde++;
    } else {
        chrono.seconde = 0;
        chrono.minute++;
    }




    //On relance la mise à jour du chronomètre
    updateDisplay();

    //Répétition du comptage
    timerId = setTimeout(updateChrono, updateSpeed);
}

function updateDisplay() {
    chronoDom.innerText =
        formatNumber(chrono.minute) + ":" +
        formatNumber(chrono.seconde) + ":" +
        formatNumber(chrono.tierce);
}

function formatNumber(num) {
    return num < 10 ? "0" + num : num;
}