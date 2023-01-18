// document.body.style.backgroundImage = "url(images/backgroundImg.jpg)";
document.body.style.backgroundSize = "1000px 1000px";
document.body.style.backgroundSize = 'cover';

(function () {
    let requestAnimationFrame = window.requestAnimationFrame;
    window.requestAnimationFrame = requestAnimationFrame;
})();