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
    x: 110,
    y: 95,
    width: 100,
    height: 100
  }
  
let rocketObj1 = {
    x: 200,
    y: 900,
    width: 75,
    height: 75
}

let eagleObj2 = {
    x: 600,
    y: 900,
    width: 50,
    height: 50
}

let fireObj3 = {
    x: 700,
    y: 900,
    width: 41,
    height: 41
}

let fireBall = {
    x: 600,
    y: 800,
    width: 50,
    height: 50
}

let star = {
    x: width - 300,
    y: height - 700,
    width: 100,
    height: 100,
    touched: false
};