// init 2d canvas
let canvas = document.getElementById("canvas")
context = canvas.getContext("2d");

canvas.width = window.innerWidth - (271);
canvas.height = window.innerHeight - (314);

document.body.onresize = () => {
        canvas.width = window.innerWidth - (271);
        canvas.height = window.innerHeight - (314);
}

if (window.innerWidth <= 500 || window.innerHeight <= 500) {
    alert('window too small, please use a larger size')
}

(function () {
    let requestAnimationFrame = window.requestAnimationFrame;
    window.requestAnimationFrame = requestAnimationFrame;
})();