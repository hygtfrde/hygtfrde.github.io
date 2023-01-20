// init 2d canvas
let canvas = document.getElementById("canvas")
context = canvas.getContext("2d");

canvas.width = window.innerWidth - 271;
canvas.height = window.innerHeight - 314;

document.body.onresize = () => {
    canvas.width = window.innerWidth - 271;
    canvas.height = window.innerHeight - 314;
}

// Static Height/Width
// width = 1000;
// height = 1000;
// canvas.height = height;
// canvas.width = width; 



// Screen Zoom 
// document.body.style.zoom = 0.5; 


// document.body.style.backgroundSize = "1000px 1000px";
// document.body.style.backgroundSize = 'cover';

(function () {
    let requestAnimationFrame = window.requestAnimationFrame;
    window.requestAnimationFrame = requestAnimationFrame;
})();