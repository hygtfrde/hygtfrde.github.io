// init 2d canvas
let canvas = document.getElementById("canvas")
context = canvas.getContext("2d");

canvas.width = window.innerWidth - 271;
canvas.height = window.innerHeight - 314;

document.body.onresize = () => {
    canvas.width = window.innerWidth - 271;
    canvas.height = window.innerHeight - 314;
}

(function () {
    let requestAnimationFrame = window.requestAnimationFrame;
    window.requestAnimationFrame = requestAnimationFrame;
})();