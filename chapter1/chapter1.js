let canvas= document.querySelector("canvas");
canvas.width = 470;
canvas.height = 290;
let ctx = canvas.getContext("2d");
canvas.style.imageRendering = "pixelated";
ctx.imageSmoothingEnabled = false;



let spriteObject = 
{
    width: 1200,
    height: 560,
    frameWidth: 1200,
    frameHeight: 560,
    frameX: 0,
    frameY: 0,
}



/*let bg = new Image(); 
let speedX = 0;
let speedY = 0;
bg.addEventListener("load", loadHandlerTwo, false);
bg.src = "img/draftbg.png";
bg.width = 1200;
bg.height = 560;
bg.x = 0;
bg.y = 0;
bg.frameX = 0;
bg.frameY = 0;
bg.frameWidth= 1200;
bg.frameHeight = 560; */
let sprite = Object.create(spriteObject);
sprite.x = 200;
sprite.y = 100;
var image = new Image();
image.addEventListener("load", loadHandler, false);
image.src = "img/draftbg.png";

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
/*
function loadHandlerTwo()
{ updateBg();
}
*/
function loadHandler()
{
    
    update();
}

/*
function updateBg()
{
    window.requestAnimationFrame(updateBg, canvas);
   
   bg.x += speedX;
   bg.y += speedY;

   
    if(!moveUp && moveDown && !moveLeft && !moveRight)
    {
        
        speedX = 0;
        speedY = -5;
        
    }
     if(!moveUp && moveDown)
    {
        
        speedX = 0;
        speedY = -5;
        
    }
    if(moveLeft && !moveRight && !moveUp && !moveDown)
    {
        
        speedX = 5;
        speedY = 0;
     
    }
     if(moveLeft && !moveRight)
    {
        
        speedX = 5;
        speedY = 0;
        
    }
    if(!moveLeft && moveRight && !moveUp && !moveDown)
    {
        
        speedX = -5;
        speedY = 0;
        
    }
    if(!moveLeft && moveRight)
    {
     
        speedX = -5;
        speedY = 0;
       
    }
    if(!moveUp && !moveDown && !moveLeft && !moveRight)
    {
        
        speedY = 0;
        
    }
     if(!moveLeft && !moveRight && !moveLeft && !moveRight)
    {
        
        speedX = 0;
        
    }

       if(moveLeft && !moveRight && moveUp && !moveDown)
  {
 
    speedX = 4;
    speedY = 4;
    
  }
    if(!moveLeft && moveRight && moveUp && !moveDown)
  {
    
    speedX = -4;
    speedY = 4;
   

  }
    if(moveLeft && !moveRight && !moveUp && moveDown)
  {
    
    speedX = 4;
    speedY = -4;
    
  }
      if(!moveLeft && moveRight && !moveUp && moveDown)
  {
    
    speedX = -4;
    speedY = -4;
    
  } 
   if(moveUp && !moveDown && !moveLeft && !moveRight)
    {
        
        
        speedX = 0;
        speedY = 5;
       
    }

window.addEventListener(render);
    
}   
*/

function update()
{
    window.requestAnimationFrame(update, canvas);
   
  
    sprite.x += Xspeed;
    sprite.y += Yspeed;

   
    if(!moveUp && moveDown && !moveLeft && !moveRight)
    {
        Xspeed = 0;
        Yspeed = 5;
        
        guy.src="../sprites/front2.png";
    }
     if(!moveUp && moveDown)
    {
        Xspeed = 0;
        Yspeed = 5;
       
        guy.src="../sprites/front2.png";
    }
    if(moveLeft && !moveRight && !moveUp && !moveDown)
    {
        Xspeed = -5;
        Yspeed = 0;
       
        guy.src="../sprites/left2.png";
    }
     if(moveLeft && !moveRight)
    {
        Xspeed = -5;
        Yspeed = 0;
       
        guy.src="../sprites/left2.png";
    }
    if(!moveLeft && moveRight && !moveUp && !moveDown)
    {
        Xspeed = 5;
        Yspeed = 0;
        
        guy.src="../sprites/right2.png";
    }
    if(!moveLeft && moveRight)
    {
        Xspeed = 5;
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
    Xspeed = -4;
    Yspeed = -4;
    
    guy.src="../sprites/back2.png";

  }
    if(!moveLeft && moveRight && moveUp && !moveDown)
  {
    Xspeed = 4;
    Yspeed = -4;
    
    guy.src="../sprites/back2.png";

  }
    if(moveLeft && !moveRight && !moveUp && moveDown)
  {
    Xspeed = -4;
    Yspeed = 4;
   
    guy.src="../sprites/front2.png";
  }
      if(!moveLeft && moveRight && !moveUp && moveDown)
  {
    Xspeed = 4;
    Yspeed = 4;
    
    guy.src="../sprites/front2.png";
  } 
   if(moveUp && !moveDown && !moveLeft && !moveRight)
    {
        Xspeed = 0;
        Yspeed = -5;
        
       
        guy.src="../sprites/back2.png";
    }

  /*  if(sprite.x < 0)
    {
        sprite.x = 0;
    }

    if(sprite.y < 0)
    {
        sprite.y = 0;
    }
    if(sprite.x + sprite.width > canvas.width)
    {
        sprite.x = canvas.width- sprite.width;
    }
    if(sprite.y + sprite.height > canvas.height)
    {
        sprite.y = canvas.height - sprite.height;
    } */

    
        



    render();
}   






  
      
      



function render()
{
 
    ctx.clearRect(0,0, canvas.width, canvas.height, bg.x, bg.y, sprite.x, sprite.y);

    
   
    
    ctx.drawImage(
    image,
    sprite.frameX, sprite.frameY, sprite.frameWidth, sprite.frameHeight, sprite.x, sprite.y, sprite.width, sprite.height, 
    );
     /*ctx.drawImage(
        guy, 
        guy.x, guy.y, guy.width, guy.height, 
    );*/

}



/*
var guy = new Image();
guy.src= "../sprites/front2.png";
var guy = new Image();
guy.src = "../sprites/back2.png";
var guy = new Image();
guy.src = "../sprites/left2.png";
var guy = new Image();
guy.src = "../sprites/right2.png";
*/