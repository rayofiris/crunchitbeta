let canvas= document.querySelector("canvas");
canvas.width = 470;
canvas.height = 290;
let ctx = canvas.getContext("2d");
canvas.style.imageRendering = "pixelated";
ctx.imageSmoothingEnabled = false;
    


let spriteObject = 
{
    width: 1559,
    height: 1055,
    frameWidth: 1559,
    frameHeight: 1055,
    frameX: 0,
    frameY: 0,
}

let sprite = Object.create(spriteObject);
sprite.x = -120;
sprite.y = -114; 


var image = new Image();
image.addEventListener("load", loadHandler, false);
image.src= "img/textbg.png";
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

   
    
    if(!moveUp && moveDown && !moveLeft && !moveRight)
    {
        Xspeed = 0;
        Yspeed = -3;
        guy.src="../sprites/front2.png";
    }
     if(!moveUp && moveDown)
    {
        Xspeed = 0;
        Yspeed = -3;
        guy.src="../sprites/front2.png";
    }
    if(moveLeft && !moveRight && !moveUp && !moveDown)
    {
        Xspeed = 3;
        Yspeed = 0;
        guy.src="../sprites/left2.png";
    }
     if(moveLeft && !moveRight)
    {
        Xspeed = 3;
        Yspeed = 0;
        guy.src="../sprites/left2.png";
    }
    if(!moveLeft && moveRight && !moveUp && !moveDown)
    {
        Xspeed = -3;
        Yspeed = 0;
        guy.src="../sprites/right2.png";
    }
    if(!moveLeft && moveRight)
    {
        Xspeed = -3;
        Yspeed = 0;
        guy.src="../sprites/right2.png";
    }
    if(!moveUp && !moveDown && !moveLeft && !moveRight)
    {
        Yspeed = 0;
        guy.src="../sprites/front2.png";
    }
     if(!moveLeft && !moveRight && !moveLeft && !moveRight)
    {
        Xspeed = 0;
        guy.src="../sprites/front2.png";
    }

       if(moveLeft && !moveRight && moveUp && !moveDown)
  {
    Xspeed = 2;
    Yspeed = 2;
    guy.src="../sprites/back2.png";

  }
    if(!moveLeft && moveRight && moveUp && !moveDown)
  {
    Xspeed = -2;
    Yspeed = 2;
    guy.src="../sprites/back2.png";

  }
    if(moveLeft && !moveRight && !moveUp && moveDown)
  {
    Xspeed = 2;
    Yspeed = -2;
    guy.src="../sprites/front2.png";
  }
      if(!moveLeft && moveRight && !moveUp && moveDown)
  {
    Xspeed = -2;
    Yspeed = -2;
    guy.src="../sprites/front2.png";
  } 

   if(moveUp && !moveDown && !moveLeft && !moveRight)
    {
        Xspeed = 0;
        Yspeed = 3;
        guy.src="../sprites/back2.png";
    }

  

   /* if (sprite.y < 476)
    {
        sprite.y=476;
    }

    if (sprite.y > 476)
    {
        sprite.y = 476;
    }
*/




 


    render();
}   






     
      
      



function render()
{
      
    ctx.clearRect(0,0, canvas.width, canvas.height);

    ctx.drawImage(
    image,
    sprite.frameX, sprite.frameY, sprite.frameWidth, sprite.frameHeight, sprite.x, sprite.y, sprite.width, sprite.height, 
    );

    ctx.drawImage(
        guy,
        212, 104,
        guy.width,
        guy.height,
    );
}





var guy = new Image();
guy.src = "../sprites/front2.png";
var guy = new Image();
guy.src = "../sprites/back2.png";
var guy = new Image();
guy.src = "../sprites/left2.png";
var guy = new Image();
guy.src = "../sprites/right2.png";

guy.x = 264;
guy.y = 100;
guy.width = 40;
guy.height = 64;

function goNext()
{
    window.open("../transition3/transition3.html", "_self");
}