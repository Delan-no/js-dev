'use strict';
document.addEventListener("DOMContentLoaded", function(){

    let zombietomb = document.getElementById("zombietomb");
    let divWidht = zombietomb.scrollWidth;
    let imageWidht = divWidht*11;
    let position = 0 ;
    let moveZombi = 0;
    let sens = 1 ;
   

    moveZombie()
    function moveZombie(){

        zombietomb.style.backgroundPosition = `${position}px`; 
        const setTimeoutId = setTimeout( function() {
            requestAnimationFrame(moveZombie)
        }, 300);

        position-= divWidht;
        if (position < -imageWidht + divWidht) {
            clearTimeout(setTimeoutId)
        }
    }


    document.addEventListener("keydown", function(event){
        // if(event.code === "ArrowRight"){
        //     clearTimeout(setTimeoutId);
        //     zombietomb.style.transform = "rotateY(180deg)";
        // }
        switch (event.code) {
            case "ArrowRight":
                // clearTimeout(setTimeoutId);
                zombietomb.style.transform = "rotateY(180deg)";
                moveZombi += 90;
                zombietomb.style.marginLeft = `${moveZombi}px`
                break;
            
            case "ArrowLeft":
                zombietomb.style.transform = "rotateY(0deg)";
                moveZombi -= 100;
                zombietomb.style.marginLeft = `${moveZombi}px`    
                break;

            case "ArrowUp":
                zombietomb.style.transform = "rotateY(0deg)";
                moveZombi -= 100;
                zombietomb.style.marginBottom = `${moveZombi}px`    
                break;
            case "ArrowDown":
                // zombietomb.style.transform = "rotateY(180deg)";
                // moveZombi += 100;
                // zombietomb.style.marginTop = `${moveZombi}px`    
              requestAnimationFrame(moveZombie)
             
                break;
        }


        console.log(event.code)
    })



});



// image.addEventListener("click", function(){
    
// })
