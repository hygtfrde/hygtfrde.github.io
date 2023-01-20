const friction = 0.7;
const gravity = 0.25;

keys = [];

function movementFunc() {

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
              player.velocity_X = (player.speed * 3);
            }
        }
    
    //-------------------------------MOVE LEFT------------------------------------//
    
        if (keys[37] || keys[65]) {
            if ( player.velocity_X > -(player.speed) ) {
              // USE NEGATIVE VALUE TO MOVE LEFT ON CANVAS
              // player.velocity_X--;
              player.velocity_X = -(player.speed * 3);
    
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
          // throw new Error(); is one way to end the program
          // window.stop(); // reload is better though
          // window.reload(); 
          player.x = width - 100;
          player.y = height - 15;
          document.location.reload();
    
        }
    
        let lionOneDeath = collisionCheck(player, rocketObj1);
        let lionTwoDeath = collisionCheck(player, eagleObj2);
        let lionThreeDeath = collisionCheck(player, fireObj3);
        let fireBallCollision = collisionCheck(player, fireBall);
    
        if (lionOneDeath == "left" || lionOneDeath == "right" ||
          lionOneDeath == "top" || lionOneDeath == "bottom") {
          alert("YOU LOSE! --- press enter to RESTART");
          // window.stop();
          // window.reload(); 
          player.x = width - 100;
          player.y = height - 15;
          document.location.reload();
    
        }
        if (lionTwoDeath == "left" || lionTwoDeath == "right" ||
          lionTwoDeath == "top" || lionTwoDeath == "bottom") {
          alert("YOU LOSE! --- press enter to RESTART");
          // window.stop();
          // window.reload(); 
          player.x = width - 100;
          player.y = height - 15;
          document.location.reload();
    
        }
        if (lionThreeDeath == "left" || lionThreeDeath == "right" ||
          lionThreeDeath == "top" || lionThreeDeath == "bottom") {
          alert("YOU LOSE! --- press enter to RESTART");
          // window.stop();
          // window.reload(); 
          player.x = width - 100;
          player.y = height - 15;
          document.location.reload();
    
        }
        if (fireBallCollision == "left" || fireBallCollision == "right" ||
          fireBallCollision == "top" || fireBallCollision == "bottom") {
          alert("YOU LOSE! --- press enter to RESTART");
          // window.stop();
          // window.reload(); 
          player.x = width - 100;
          player.y = height - 15;
          document.location.reload();
    
        }
    
    //----------------------------------------------------------------------------//
    
    //----------------------------------------------------------------------------//
    //--------------------DRAW THE PLAYER AND OBJECTS-----------------------------//
    //----------------------------------------------------------------------------//
    
        context.fill();
    
        // THIS WILL DRAW A BASIC RECTANGLE
    
        // context.fillStyle = "gold";
        // context.fillRect(player.x,
        //   player.y,
        //   player.width,
        //   player.height);
    
        let playerImg = new Image();
        playerImg.src = "images/walrus.svg";
        context.drawImage(playerImg,
          player.x,
          player.y,
          player.width,
          player.height);
    
    //----------------------------------------------------------------------------//
    
        let winningTouch = new Image();
        winningTouch.src = "images/star.svg";
        context.drawImage(winningTouch, 110, 95, 100, 100);
    
        let rocket1 = new Image();
        rocket1.src = "images/rocket.png";
        context.drawImage(rocket1, rocketObj1.x, rocketObj1.y, fireBall.width, fireBall.height);
    
        let eagle2 = new Image();
        eagle2.src = "images/lion.svg";
        context.drawImage(eagle2, 600, 900, 75, 75);
    
        let fireBall3 = new Image();
        fireBall3.src = "images/betterFire.svg";
        context.drawImage(fireBall3, fireObj3.x, fireObj3.y, fireBall.width, fireBall.height);
    
    //----------------------------------------------------------------------------//
    //-------------------------MAKE LION ONE MOVE---------------------------------//
    //----------------------------------------------------------------------------//
    
        let lionOnevelocity_Y = 15;
    
        if (rocketObj1.y == 105)
        {
          rocketObj1.y = 900;
        }
    
        rocketObj1.y -= lionOnevelocity_Y;
    
    
    //----------------------------------------------------------------------------//
    
    
    //----------------------------------------------------------------------------//
    //-------------------------MAKE FIREBALL MOVE---------------------------------//
    //----------------------------------------------------------------------------//
    
        let fireBallImg = new Image();
        fireBallImg.src = "images/betterFire.svg";
        context.drawImage(fireBallImg,
          fireBall.x, fireBall.y,
          fireBall.width,
          fireBall.height);
    
        let fireBallvelocity_Y = 5;
    
        if (fireBall.y == 250)
        {
          fireBall.y = 800;
        }
    
        fireBall.y -= fireBallvelocity_Y;
    
    
    //----------------------------------------------------------------------------//
    
    //----------------------------------------------------------------------------//
    //------------------------MAKE FIREBALL THREE MOVE----------------------------//
    //----------------------------------------------------------------------------//
    
      let lionThreevelocity_X = 5;
    
      if (fireObj3.x == 1400) {
        fireObj3.x = 700;
      }
    
      fireObj3.x += lionThreevelocity_X;
    
    // CIRCULAR MOVEMENT LOGIC
    // NEEDS REPAIR TO WORK
    
    
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
    //------------------------MAKE PLATFORM MOVE----------------------------------//
    //----------------------------------------------------------------------------//
    
      let lastPlatform = platforms.length - 1;
      let platformVelocity = 2;
    
      platforms[lastPlatform].y -= platformVelocity;
    
      if (platforms[lastPlatform].y == 300) {
         platforms[lastPlatform].y = 700;
       }
    
    
    //----------------------------------------------------------------------------//
    
    //----------------------------------------------------------------------------//
    //---------------------------REQUEST ANIMATION FRAME--------------------------//
    //----------------------------------------------------------------------------//
    
        requestAnimationFrame(movementFunc);
    
    } // end movementFunc

    document.body.addEventListener("keydown", function (e) {
        keys[e.keyCode] = true;
    });
    
    document.body.addEventListener("keyup", function (e) {
        keys[e.keyCode] = false;
    });
    
    
    window.addEventListener("load", function () {
        movementFunc();
    });