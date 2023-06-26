'use strict'

document.addEventListener("DOMContentLoaded", function () {  
    const ball = document.getElementById("ball");
    let ballDirectionX = 1;
    let ballDirectionY = 1;
    let ballPosX = 0;
    let ballPosY = 0;
    let speed = 6;

    const body = document.querySelector("body")

    const windowHeigth = window.innerHeight;
    let limiBottomY = windowHeigth - ball.offsetHeight ;

    const windowWidth = window.innerWidth;
    let limiRightX = windowWidth - ball.offsetWidth

    function animateBall() {
        ballPosX += ballDirectionX * speed;
        ballPosY += ballDirectionY * speed;

        if (ballPosX >= limiRightX || ballPosX <= 0) {
            ballDirectionX *= -1;
            ball.style.backgroundColor = `rgb(${generateRandomNumber(0, 256)}, ${generateRandomNumber(0, 256)}, ${generateRandomNumber(0, 256)}, ${generateRandomNumber(0, 256)})`
            body.style.backgroundColor = `rgb(${generateRandomNumber(0, 25)}, ${generateRandomNumber(0, 25)}, ${generateRandomNumber(0, 25)}, ${generateRandomNumber(0, 256)})`
        }
        
        if (ballPosY >= limiBottomY || ballPosY <= 0) {
            ballDirectionY *= -1;
            ball.style.backgroundColor = `rgb(${generateRandomNumber(0, 256)}, ${generateRandomNumber(0, 256)}, ${generateRandomNumber(0, 256)}, ${generateRandomNumber(0, 256)})`
            body.style.backgroundColor = `rgb(${generateRandomNumber(0, 25)}, ${generateRandomNumber(0, 25)}, ${generateRandomNumber(0, 25)}, ${generateRandomNumber(0, 256)})`
                
        }

        ball.style.transform = ` translateX(${ballPosX}px)translateY(${ballPosY}px) `;
        requestAnimationFrame(animateBall);
    }
    animateBall();

    function generateRandomNumber(min, max){
        return Math.floor(Math.random() * ((max - min + 1) + min))
    }
    

    
})
