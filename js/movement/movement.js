const friction = 0.7;
const gravity = 0.25;

keys = [];

const movementFunc = () => {

    //--------------------------------JUMPING-------------------------------------//
    
        if (keys[38] || keys[32] || keys[87]) {
            if ((player.jumping) == false && (player.grounded == true) ) {
              player.jumping = true;
              player.grounded = false;
              // USE NEGATIVE VALUE TO MOVE UP ON CANVAS
              player.velocity_Y = -(player.speed * 2);
            }
        }
    
    //-------------------------------MOVE RIGHT-----------------------------------//
    
        if (keys[39] || keys[68]) {
            if (player.velocity_X < player.speed) {
              // player.velocity_X++;
              player.velocity_X = (player.speed * 1.5);
            }
        }
    
    //-------------------------------MOVE LEFT------------------------------------//
    
        if (keys[37] || keys[65]) {
            if ( player.velocity_X > -(player.speed) ) {
              // USE NEGATIVE VALUE TO MOVE LEFT ON CANVAS
              // player.velocity_X--;
              player.velocity_X = -(player.speed * 1.5);
    
            }
        }
    
    //----------------------------------------------------------------------------//
    //---------------REALISM EFFECTS OF GRAVITY AND FRICTION----------------------//
    //---------------------X VELOCITY WILL APPROACH 0-----------------------------//
    //--------------Y VELOCITY WILL GO DOWN WITH POSITIVE VALUES------------------//
    //----------------------------------------------------------------------------//
    
        player.velocity_X *= friction;
        player.velocity_Y += gravity;
    
    //----------------------------------------------------------------------------//
    
    //----------------------------------------------------------------------------//
    //-------------------------GROUNDED STOPS ALL Y MOVEMENT----------------------//
    //----------------------------------------------------------------------------//
    
        if (player.grounded == true) {
             player.velocity_Y = 0;
        }
    
    //----------------------------------------------------------------------------//
    //-------------------------UPDATE X AND Y POSITION----------------------------//
    //--------------------------EACH ANIMATION FRAME------------------------------//
    //----------------------------------------------------------------------------//
    
        player.x += player.velocity_X;
        player.y += player.velocity_Y;
    
    //----------------------------------------------------------------------------//
    //-------------------DELETE OLD FRAMES WITH CLEAR RECT ()---------------------//
    //-----------------------------AND BEGIN PATH ()------------------------------//
    //----------------------------------------------------------------------------//
    
        context.clearRect(0, 0, width, height);
        context.fillStyle = "Aquamarine";
        context.beginPath();
    
    //----------------------------------------------------------------------------//
    //---------------------PREVENT WALKING OFF PLATFORMS--------------------------//
    //----------------------------------------------------------------------------//
    
        player.grounded = false;
    
    //----------------------------------------------------------------------------//
    //--------------------LOOP FOR COLLISIONS ON EACH PLATFORM--------------------//
    //----------------------------------------------------------------------------//
    
        for (let i = 0; i < platforms.length; i++) {
            context.rect(platforms[i].x,
              platforms[i].y,
              platforms[i].width,
              platforms[i].height);
    
            let direction = collisionCheck(player, platforms[i]);
    
            if (direction === "left" || direction === "right") {
                // STOP VELOCITYX IF COLLISION LEFT OR RIGHT
                player.velocity_X = 0;
                player.jumping = false;
            }
            else if (direction === "bottom") {
                // IF BOTTOM COLLISION GO BACK TO GROUNDED
                player.grounded = true;
                player.jumping = false;
            }
            else if (direction === "top") {
                // PLAYER HIT HEAD BY JUMPING
                // SWITCH VELOCITYY IF TOP COLLISION
                player.velocity_Y *= -1;
            }
    
        }
    
    //----------------------------------------------------------------------------//
    
    //----------------------------------------------------------------------------//
    //-------------------------HOW TO WIN AND HOW TO LOSE-------------------------//
    //----------------------------------------------------------------------------//
    
        let winningCondition = collisionCheck(player, winningStar);
    
        if (winningCondition == "left" || winningCondition == "right" ||
          winningCondition == "top" || winningCondition == "bottom") {
          alert("YOU WIN! --- press enter to RESTART");
          player.x = width - 100;
          player.y = height - 115;
          document.location.reload();
        }
    
        let fireBallCollision = collisionCheck(player, fireBall);
    
        if (fireBallCollision == "left" || fireBallCollision == "right" ||
          fireBallCollision == "top" || fireBallCollision == "bottom") {
          alert("YOU LOSE! --- press enter to RESTART");
          player.x = width - 100;
          player.y = height - 115;
          document.location.reload();
        }
    
    //----------------------------------------------------------------------------//
    
    //----------------------------------------------------------------------------//
    //--------------------DRAW THE PLAYER AND OBJECTS-----------------------------//
    //----------------------------------------------------------------------------//
    
        context.fill();
    
        let playerImg = new Image();
        playerImg.src = "images/player.png";
        context.drawImage(playerImg,
          player.x,
          player.y,
          player.width,
          player.height);
    
    //----------------------------------------------------------------------------//
    
        let winningTouch = new Image();
        winningTouch.src = "images/star.jpeg";
        context.drawImage(winningTouch, 20, 20, 100, 100);
    
    //----------------------------------------------------------------------------//
    
    
    //----------------------------------------------------------------------------//
    //-------------------------MAKE FIREBALL MOVE---------------------------------//
    //----------------------------------------------------------------------------//
    
        let fireBallImg = new Image();
        fireBallImg.src = "images/fireball.png";
        context.drawImage(fireBallImg,
          fireBall.x + 40, fireBall.y,
          fireBall.width,
          fireBall.height);
    
        let fireBallVelocity_Y = 5;
    
        if (fireBall.y == 50)
        {
          fireBall.y = 800;
        }
    
        fireBall.y -= fireBallVelocity_Y;

        // add another fireball

        let fireBallImg2 = new Image();
        fireBallImg2.src = "images/fireball.png";
        context.drawImage(fireBallImg2,
          fireBall2.x + 100, fireBall2.y,
          fireBall2.width,
          fireBall2.height);
    
        let fireBallVelocity_Y2 = 8;
    
        if (fireBall2.y == 8)
        {
          fireBall2.y = 800;
        }
    
        fireBall2.y -= fireBallVelocity_Y2;
    
    
    //----------------------------------------------------------------------------//
    
    
    // CIRCULAR MOVEMENT LOGIC
    
    
    // let angle = Math.PI / 2;
    // function animate(time, lastTime) {
    //   if (lastTime != null) {
    //     angle += (time - lastTime) * 0.001;
    //   }
    //   fireObj3.y = (Math.sin(angle) * 20) + "px";
    //   fireObj3.x = (Math.cos(angle) * 200) + "px";
    //   requestAnimationFrame(newTime => animate(newTime, time));
    // }
    // requestAnimationFrame(animate);
    
    //----------------------------------------------------------------------------//
    //---------------------------REQUEST ANIMATION FRAME--------------------------//
    //----------------------------------------------------------------------------//
    
        requestAnimationFrame(movementFunc);


        // MAKE PLATFORM MOVE
        // -------------------------------------------------
        // let lastPlatform = platforms.length - 1;
        // let platformVelocity = 2;
      
        // platforms[lastPlatform].y -= platformVelocity;
      
        // if (platforms[lastPlatform].y == 300) {
        //    platforms[lastPlatform].y = 700;
        //  }
        // -------------------------------------------------
    
    } // end movementFunc ------------------------------------------------------------------------------------



    document.body.addEventListener("keydown", function (e) {
        keys[e.keyCode] = true;
    });
    
    document.body.addEventListener("keyup", function (e) {
        keys[e.keyCode] = false;
    });
    
    
    window.addEventListener("load", function () {
        movementFunc();
    });