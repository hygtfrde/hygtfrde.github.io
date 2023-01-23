width = window.innerWidth - 271;
height = window.innerHeight - 314;

document.body.onresize = () => {
    width = window.innerWidth - 271;
    height = window.innerHeight - 314;
};

let platforms = [];

//----------------------------------------------------------------------------//
//------------------------------LEFT BOUND------------------------------------//
//----------------------------------------------------------------------------//

platforms.push({
    x: 0,
    y: 0,
    width: 10,
    height: height
});

//----------------------------------------------------------------------------//
//------------------------------TOP BOUND-------------------------------------//
//----------------------------------------------------------------------------//

platforms.push({
    x: 0,
    y: 0,
    width: width,
    height: 10
});

//----------------------------------------------------------------------------//
//------------------------------RIGHT BOUND-----------------------------------//
//----------------------------------------------------------------------------//

platforms.push({
    x: width -10,
    y: 0,
    width: 50,
    height: height
});

//----------------------------------------------------------------------------//
//------------------------------BOTTOM BOUND----------------------------------//
//----------------------------------------------------------------------------//

platforms.push({
    x: 0,
    y: height - 10,
    width: width,
    height: 50
});


//----------------------------------------------------------------------------//
//-------------------------------PLATFORMS------------------------------------//
//----------------------------------------------------------------------------//

// platforms.push({
//     x: width / 3,
//     y: height / 2,
//     width: 100,
//     height: 20
// });
platforms.push({
    x: width / 2,
    y: height / 1.5,
    width: 100,
    height: 20
});
platforms.push({
    x: width / 5,
    y: height / 2,
    width: 100,
    height: 20
});
// platforms.push({
//     x: 900,
//     y: 600,
//     width: 120,
//     height: 40
// });
// platforms.push({
//     x: 700,
//     y: 500,
//     width: 120,
//     height: 40
// });
// platforms.push({
//     x: 500,
//     y: 400,
//     width: 120,
//     height: 40
// });
// platforms.push({
//     x: 300,
//     y: 300,
//     width: 120,
//     height: 40
// });
// platforms.push({
//     x: 100,
//     y: 200,
//     width: 120,
//     height: 40
// });

// platforms.push({
//     x: 850,
//     y: 700,
//     width: 40,
//     height: 120
// });
