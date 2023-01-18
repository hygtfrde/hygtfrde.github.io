let canvas = document.getElementById("canvas")
context = canvas.getContext("2d");

// Static Height/Width
width = 2000;
height = 1000;
canvas.height = height;
canvas.width = width; 

// Set Canvas Inner Height/Width 
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// Screen Zoom 
document.body.style.zoom = 0.5; 