width = 600;
height = 400;

// document.body.onresize = () => {
//     width = window.innerWidth - 271;
//     height = window.innerHeight - 314;
// };

let player = {
    x: width - 40,
    y: height - 15,
    width: 25,
    height: 25,
    speed: 3,
    velocity_X: 0,
    velocity_Y: 0,
    jumping: false,
    grounded: false
};

let winningStar = {
    x: 20,
    y: 20,
    width: 50,
    height: 50
}

let fireBall = {
    x: width - 485,
    y: height - 200,
    width: 50,
    height: 50
}

