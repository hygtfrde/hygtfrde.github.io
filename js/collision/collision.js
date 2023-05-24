const collisionCheck = (playerObj, inanimateObj) => {
    // get the vectors to check against
    // use Half Widths and Half Heights to get the center of each shape
    let X_Vector = (playerObj.x + (playerObj.width / 2)) -
      (inanimateObj.x + (inanimateObj.width / 2));

    let Y_Vector = (playerObj.y + (playerObj.height / 2)) -
      (inanimateObj.y + (inanimateObj.height / 2));

    let halfWidths = (playerObj.width / 2) + (inanimateObj.width / 2);
    let halfHeights = (playerObj.height / 2) + (inanimateObj.height / 2);
    let directionection = null;

//----------------------------------------------------------------------------//
//---------If X AND Y VECTORS ARE LESS THAN HALF WIDTH OR HALF HEIGHT---------//
//----------------THEN THE OBJECTS MUST BE COLLIDING--------------------------//
//---------SINCE THE DISTANCE BETWEEN OBJECTS CANNOT BE LESS------------------//
//--------------------THAN THEIR HALF WIDTHS OR HEIGHTS-----------------------//
//----------------------------------------------------------------------------//

// HALF WIDTH MINUS X VECTOR --> OFFSET_VECTOR_X
// HALF HEIGHT MINUS Y VECTOR --> OFFSET_VECTOR_Y
// IN OTHER WORDS ---->
// THE OFFSET VECTORS ARE THE X AND Y DISTANCES LEFT OVER
// FROM A COLLISION

// THUS ---->
// IF THERE IS MORE X LEFT OVER --> IT COLLIDED ON TOP OR BOTTOM
// IF THERE IS MORE Y LEFT OVER --> IT COLLIDED ON THE RIGHT OR LEFT


    if ( (Math.abs(X_Vector) < halfWidths) && (Math.abs(Y_Vector) < halfHeights) ) {

        let offset_X = halfWidths - Math.abs(X_Vector);
        let offset_Y = halfHeights - Math.abs(Y_Vector);

        // IF Y OFFSET VECTOR IS LESS THAN X OFFSET VECTOR
        if (offset_X >= offset_Y) {

          // IF Y VECTOR IS POSITIVE WITH RESPECT TO THE PLAYER
          // COLLISION IS ON TOP
            if (Y_Vector > 0) {
                directionection = "top";
                playerObj.y += offset_Y;
            }
            // IF Y VECTOR IS NEGATIVE WITH RESPECT TO THE PLAYER
            // COLLISION IF ON BOTTOM
            else {
                directionection = "bottom";
                playerObj.y -= offset_Y;
            }
        }
        // IF X OFFSET IS LESS THAN Y OFFSET

        else {
            // IF X VECTOR IS POSITIVE WITH RESPECT TO THE PLAYER
            // COLLISION IS ON LEFT
            if (X_Vector > 0) {
                directionection = "left";
                playerObj.x += offset_X;
            }
            else {
            // IF X VECTOR IS NEGATIVE WITH RESPECT TO THE PLAYER
            // COLLISION IS ON LEFT
                directionection = "right";
                playerObj.x -= offset_X;
            }
        }
    }

    return directionection;
}