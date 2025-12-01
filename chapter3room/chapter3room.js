document.addEventListener("keydown", (event) => {
    let music = document.querySelector("audio");
    switch(event.key) {
    case "ArrowLeft":
         music.play();
    break;
    case "ArrowRight":
        music.play();
    break;
    case "ArrowUp":
        music.play();
    break;
    case "ArrowDown":
        music.play();
    break;
    }

});

let canvas= document.querySelector("canvas");
canvas.width = 600;
canvas.height = 560;
let ctx = canvas.getContext("2d");
canvas.style.imageRendering = "pixelated";
ctx.imageSmoothingEnabled = false;
    


let spriteObject = 
{
    width: 40,
    height: 64,
    frameWidth: 40,
    frameHeight: 64,
    frameX: 0,
    frameY: 0,
}

let sprite = Object.create(spriteObject);
sprite.x = 278;
sprite.y = 486;
var image = new Image();
image.addEventListener("load", loadHandler, false);
image.src= "../sprites/front2.png";
let Xspeed = 0;
let Yspeed = 0;
let moveLeft = false;
let moveRight = false;
let moveUp = false;
let moveDown = false;

window.addEventListener("keydown", function(e) {
   switch(e.key)
   {
    case "ArrowUp": 
        moveUp = true;
        break;
    case "ArrowDown": 
        moveDown = true;
        break;
    case "ArrowLeft": 
        moveLeft = true;
        break;
    case "ArrowRight": 
        moveRight = true;
        break;
   }
}, false);

window.addEventListener("keyup", function(e) {
   switch(e.key)
   {
    case "ArrowUp": 
        moveUp = false;
        break;
    case "ArrowDown": 
        moveDown = false;
        break;
    case "ArrowLeft": 
        moveLeft = false;
        break;
    case "ArrowRight": 
        moveRight = false;
        break;
   }
}, false);

function loadHandler()
{
    update();
}

function update()
{
    window.requestAnimationFrame(update, canvas);
    sprite.x += Xspeed;
    sprite.y += Yspeed;

    if(moveUp && !moveDown && !moveLeft && !moveRight)
    {
        Xspeed = 0;
        Yspeed = -3;
        image.src="../sprites/back2.png";
    }
     if(moveUp && !moveDown)
    {
        Xspeed = 0;
        Yspeed = -3;
        image.src="../sprites/back2.png";
    }
    
    
    if(moveLeft && !moveRight && !moveUp && !moveDown)
    {
        Xspeed = -3;
        Yspeed = 0;
        image.src="../sprites/left2.png";
    }
     if(moveLeft && !moveRight)
    {
        Xspeed = -3;
        Yspeed = 0;
        image.src="../sprites/left2.png";
    }
    if(!moveLeft && moveRight && !moveUp && !moveDown)
    {
        Xspeed = 3;
        Yspeed = 0;
        image.src="../sprites/right2.png";
    }
    if(!moveLeft && moveRight)
    {
        Xspeed = 3;
        Yspeed = 0;
        image.src="../sprites/right2.png";
    }
    if(!moveUp && !moveDown && !moveLeft && !moveRight)
    {
        Yspeed = 0;
        image.src="../sprites/back2.png";
    }
     if(!moveLeft && !moveRight && !moveLeft && !moveRight)
    {
        Xspeed = 0;
        image.src="../sprites/back2.png";
    }

       if(moveLeft && !moveRight && moveUp && !moveDown)
  {
    Xspeed = -2;
    Yspeed = -2;
    image.src="../sprites/back2.png";

  }
    if(!moveLeft && moveRight && moveUp && !moveDown)
  {
    Xspeed = 2;
    Yspeed = -2;
    image.src="../sprites/back2.png";

  }
    if(moveLeft && !moveRight && !moveUp && moveDown)
  {
    Xspeed = -2;
    Yspeed = 2;
    image.src="../sprites/front2.png";
  }
      if(!moveLeft && moveRight && !moveUp && moveDown)
  {
    Xspeed = 2;
    Yspeed = 2;
    image.src="../sprites/front2.png";
  } 
  if(!moveUp && moveDown && !moveLeft && !moveRight)
    {
        Xspeed = 0;
        Yspeed = 3;
        image.src="../sprites/front2.png";
    }

    if(sprite.x < 0)
    {
        sprite.x = 0;
    }

    if(sprite.y < 260)
    {
        sprite.y = 260;
    }
    if(sprite.x + sprite.width > canvas.width)
    {
        sprite.x = canvas.width- sprite.width;
    }
    if(sprite.y + sprite.height > canvas.height)
    {
        sprite.y = canvas.height - sprite.height;
    }
/*
    if (sprite.y < 476)
    {
        sprite.y=476;
    }

    if (sprite.y > 476)
    {
        sprite.y = 476;
    }

*/

    if ((sprite.x > 260) && (sprite.x < 296) && (sprite.y > 486) && (sprite.y < 520))
    {
        window.open("../chapter3/chapter3.html", "_self");
    }

if (sprite.y > 486) 
{
    topRow.src = "img/room.png";
}

if (sprite.y < 486)
{
    topRow.src = "img/empty.png";
}

if ((sprite.y <= 260) && (sprite.x > 260) && (sprite.x < 296))
{
        let instructions = document.querySelector(".instructions");
        instructions.style.visibility = "visible";
}

    render();
}   


var topRow = new Image();
topRow.src = "img/room.png";



  
document.addEventListener("keydown", function(event) {
  const pressedKey = event.key;
  if (pressedKey === "o") {
    window.open("../transition5/transition5.html", "_self");
  }
});
    



function render()
{
      
    ctx.clearRect(0,0, canvas.width, canvas.height);

    ctx.drawImage(
    image,
    sprite.frameX, sprite.frameY, sprite.frameWidth, sprite.frameHeight, sprite.x, sprite.y, sprite.width, sprite.height, 
    );

    ctx.drawImage(
        topRow,
        0, 0, 600, 560,
    );

}






var image = new Image();
image.src = "../sprites/back2.png";
var image = new Image();
image.src = "../sprites/left2.png";
var image = new Image();
image.src = "../sprites/right2.png";