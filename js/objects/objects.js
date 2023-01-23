width = window.innerWidth - 271;
height = window.innerHeight - 314;

document.body.onresize = () => {
    width = window.innerWidth - 271;
    height = window.innerHeight - 314;
};

let player = {
    x: width - 100,
    y: height - 15,
    width: 50,
    height: 50,
    speed: 5,
    velocity_X: 0,
    velocity_Y: 0,
    jumping: false,
    grounded: false
};

let winningStar = {
    x: 20,
    y: 20,
    width: 100,
    height: 100
}

let star = {
    x: width - 300,
    y: height - 700,
    width: 100,
    height: 100,
    touched: false
};

let fireBall = {
    x: 600,
    y: 800,
    width: 50,
    height: 50
}

let fireBall2 = {
    x: 300,
    y: 800,
    width: 50,
    height: 50
}

