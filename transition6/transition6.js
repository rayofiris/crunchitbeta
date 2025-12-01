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
canvas.width = 1086;
canvas.height = 448;
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
sprite.x = 340;
sprite.y = 352;
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

  
    if(!moveUp && moveDown && !moveLeft && !moveRight)
    {
        Xspeed = 0;
        Yspeed = 5;
        image.src="../sprites/front2.png";
    }
     if(!moveUp && moveDown)
    {
        Xspeed = 0;
        Yspeed = 5;
        image.src="../sprites/front2.png";
    }
    if(moveLeft && !moveRight && !moveUp && !moveDown)
    {
        Xspeed = -5;
        Yspeed = 0;
        image.src="../sprites/left2.png";
    }
     if(moveLeft && !moveRight)
    {
        Xspeed = -5;
        Yspeed = 0;
        image.src="../sprites/left2.png";
    }
    if(!moveLeft && moveRight && !moveUp && !moveDown)
    {
        Xspeed = 5;
        Yspeed = 0;
        image.src="../sprites/right2.png";
    }
    if(!moveLeft && moveRight)
    {
        Xspeed = 5;
        Yspeed = 0;
        image.src="../sprites/right2.png";
    }
    if(!moveUp && !moveDown && !moveLeft && !moveRight)
    {
        Yspeed = 0;
        image.src="../sprites/front2.png";
    }
     if(!moveLeft && !moveRight && !moveUp && !moveDown)
    {
        Xspeed = 0;
        image.src="../sprites/front2.png";
    }

       if(moveLeft && !moveRight && moveUp && !moveDown)
  {
    Xspeed = -4;
    Yspeed = -4;
    image.src="../sprites/back2.png";

  }
    if(!moveLeft && moveRight && moveUp && !moveDown)
  {
    Xspeed = 4;
    Yspeed = -4;
    image.src="../sprites/back2.png";

  }
    if(moveLeft && !moveRight && !moveUp && moveDown)
  {
    Xspeed = -4;
    Yspeed = 4;
    image.src="../sprites/front2.png";
  }
      if(!moveLeft && moveRight && !moveUp && moveDown)
  {
    Xspeed = 4;
    Yspeed = 4;
    image.src="../sprites/front2.png";
  } 
  if(moveUp && !moveDown && !moveLeft && !moveRight)
    {
        Xspeed = 0;
        Yspeed = -5;
        image.src="../sprites/back2.png";
    }

    /*

    if(sprite.y < 0)
    {
        sprite.y = 0;
    }
   
    if(sprite.y + sprite.height > canvas.height)
    {
        sprite.y = canvas.height - sprite.height;
    } */
    if(sprite.x < 0)
    {
        sprite.x = 0;
    }
     if(sprite.y > 352)
    {
        sprite.y = 352;
    }
      if(sprite.y < 344)
    {
        sprite.y = 344;
    }
     if(sprite.x + sprite.width > canvas.width)
    {
        sprite.x = canvas.width- sprite.width;
    }
    
        
if ((sprite.x > 570) && (sprite.x < 590) && (sprite.y >= 344) && (sprite.y <= 344))
    {
        window.open("../bibliography/bibliography.html", "_self");
    }


    render();
}   






     
      
      



function render()
{
      
    ctx.clearRect(0,0, canvas.width, canvas.height);

    ctx.drawImage(
    image,
    sprite.frameX, sprite.frameY, sprite.frameWidth, sprite.frameHeight, sprite.x, sprite.y, sprite.width, sprite.height, 
    );

}






var image = new Image();
image.src = "../sprites/back2.png";
var image = new Image();
image.src = "../sprites/left2.png";
var image = new Image();
image.src = "../sprites/right2.png";