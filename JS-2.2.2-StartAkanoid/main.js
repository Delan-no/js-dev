'strict use'
let ball = document.getElementById("ball");
let speed = 6;
let diametreBall = parseFloat(getComputedStyle(ball).width);
let ballPosX = 0;
let direction = 1; 
function animateBall() {
        let xBall = parseFloat(getComputedStyle(ball).left);
        let xMax = parseFloat(getComputedStyle(balle).width);
        if ((xBall + diametreBall > xMax) || (xBall < ballPosX)) {
               direction *= -1;
    }
        ball.style.left = (xBall + speed * direction) + "px";
        animationId = requestAnimationFrame(animateBall);
}



let demarrerBtn = document.getElementById("demarrer");
let arreterBtn = document.getElementById("arreter");
let body = document.querySelector("body")

demarrerBtn.style.background = "green";
demarrerBtn.style.padding = "1rem";
demarrerBtn.style.color = "white";
demarrerBtn.style.fontSize = "1.5rem";

arreterBtn.style.background = "red";
arreterBtn.style.padding = "1rem";
arreterBtn.style.color = "white";
arreterBtn.style.fontSize = "1.5rem";


body.style.display = "flex";
body.style.flexDirection = "column";
// body.style.alignItems = "center";
demarrerBtn.addEventListener("click", function () {
    demarrerBtn.style.display = "none";
    arreterBtn.style.display = "inline-block"
        // demarrerBtn.disabled = true;
        // arreterBtn.disabled = false;
        requestAnimationFrame(animateBall);
});

arreterBtn.addEventListener("click", function () {
    arreterBtn.style.display = "none";
    demarrerBtn.style.display = "inline-block"
        //  demarrerBtn.disabled = false;
        //  arreterBtn.disabled = true;
        cancelAnimationFrame(animationId);
});
