// init 2d canvas
let canvas = document.getElementById("canvas")
context = canvas.getContext("2d");

canvas.width = 600;
canvas.height = 400;

if (window.innerWidth <= 615 || window.innerHeight <= 515) {
    alert('Browser window too small, please expand to a larger view')
}

(function () {
    let requestAnimationFrame = window.requestAnimationFrame;
    window.requestAnimationFrame = requestAnimationFrame;
})();