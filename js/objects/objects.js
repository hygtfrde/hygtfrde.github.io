width = 600;
height = 400;

let player = {
    x: width - 68,
    y: height - 160,
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

let bottomBound = {
    x: 0,
    y: height - 11,
    width: width,
    height: 1
}

