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
canvas.width = 1200;
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
sprite.x = 240;
sprite.y = 130;
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
     if(!moveLeft && !moveRight && !moveLeft && !moveRight)
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

    if(sprite.x < 0)
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
    }

    
   if ((sprite.x > 25) && (sprite.x < 75) && (sprite.y >= 0) && (sprite.y < 50))
    {
        let redsources= document.querySelector(".redsources");
        redsources.style.visibility="visible";
        let redbutton= document.querySelector(".redbutton");
        redbutton.style.backgroundColor="black";
   }
   else {
    
        let redsources= document.querySelector(".redsources");
        redsources.style.visibility="hidden";
        let redbutton= document.querySelector(".redbutton");
        redbutton.style.backgroundColor="#da1c44";
   }

      if ((sprite.x > 375) && (sprite.x < 425) && (sprite.y >= 0) && (sprite.y < 50))
    {
        let orangesources= document.querySelector(".orangesources");
        orangesources.style.visibility="visible";
        let orangebutton= document.querySelector(".orangebutton");
        orangebutton.style.backgroundColor="black";
   }
   else {
    
        let orangesources= document.querySelector(".orangesources");
        orangesources.style.visibility="hidden";
        let orangebutton= document.querySelector(".orangebutton");
        orangebutton.style.backgroundColor="#f44200";
   }

   if ((sprite.x > 725) && (sprite.x < 775) && (sprite.y >= 0) && (sprite.y < 50))
    {
        let lightorangesources= document.querySelector(".lightorangesources");
        lightorangesources.style.visibility="visible";
        let lightorangebutton= document.querySelector(".lightorangebutton");
        lightorangebutton.style.backgroundColor="black";
   }
   else {
    
        let lightorangesources= document.querySelector(".lightorangesources");
        lightorangesources.style.visibility="hidden";
        let lightorangebutton= document.querySelector(".lightorangebutton");
        lightorangebutton.style.backgroundColor="#fa9202";
   }

    if ((sprite.x > 25) && (sprite.x < 75) && (sprite.y >= 200) && (sprite.y < 250))
    {
        let yellowsources= document.querySelector(".yellowsources");
        yellowsources.style.visibility="visible";
        let yellowbutton= document.querySelector(".yellowbutton");
        yellowbutton.style.backgroundColor="black";
   }
   else {
    
        let yellowsources= document.querySelector(".yellowsources");
        yellowsources.style.visibility="hidden";
        let yellowbutton= document.querySelector(".yellowbutton");
        yellowbutton.style.backgroundColor="#fffeab";
   }

    if ((sprite.x > 375) && (sprite.x < 425) && (sprite.y >= 200) && (sprite.y < 250))
    {
        let greensources= document.querySelector(".greensources");
        greensources.style.visibility="visible";
        let greenbutton= document.querySelector(".greenbutton");
        greenbutton.style.backgroundColor="black";
   }
   else {
    
        let greensources= document.querySelector(".greensources");
        greensources.style.visibility="hidden";
        let greenbutton= document.querySelector(".greenbutton");
        greenbutton.style.backgroundColor="#26de67";
   }

   if ((sprite.x > 725) && (sprite.x < 775) && (sprite.y >= 200) && (sprite.y < 250))
    {
        let darkgreensources= document.querySelector(".darkgreensources");
        darkgreensources.style.visibility="visible";
        let darkgreenbutton= document.querySelector(".darkgreenbutton");
        darkgreenbutton.style.backgroundColor="black";
   }
   else {
    
        let darkgreensources= document.querySelector(".darkgreensources");
        darkgreensources.style.visibility="hidden";
        let darkgreenbutton= document.querySelector(".darkgreenbutton");
        darkgreenbutton.style.backgroundColor="#005b11 ";
   }

  if ((sprite.x > 25) && (sprite.x < 75) && (sprite.y >= 400) && (sprite.y < 450))
    {
        let bluesources= document.querySelector(".bluesources");
        bluesources.style.visibility="visible";
        let bluebutton= document.querySelector(".bluebutton");
        bluebutton.style.backgroundColor="black";
   }
   else {
    
        let bluesources= document.querySelector(".bluesources");
        bluesources.style.visibility="hidden";
        let bluebutton= document.querySelector(".bluebutton");
        bluebutton.style.backgroundColor="#7ec4ef";
   }

    if ((sprite.x > 375) && (sprite.x < 425) && (sprite.y >= 400) && (sprite.y < 450))
    {
        let indigosources= document.querySelector(".indigosources");
        indigosources.style.visibility="visible";
        let indigobutton= document.querySelector(".indigobutton");
        indigobutton.style.backgroundColor="black";
   }
   else {
    
        let indigosources= document.querySelector(".indigosources");
        indigosources.style.visibility="hidden";
        let indigobutton= document.querySelector(".indigobutton");
        indigobutton.style.backgroundColor="#241d75";
   }

   
    if ((sprite.x > 725) && (sprite.x < 775) && (sprite.y >= 400) && (sprite.y < 450))
    {
        let purplesources= document.querySelector(".purplesources");
        purplesources.style.visibility="visible";
        let purplebutton= document.querySelector(".purplebutton");
        purplebutton.style.backgroundColor="black";
        let nextcover= document.querySelector(".nextbuttoncover");
        nextcover.style.zIndex="1";
        
   }
   else {
    
        let purplesources= document.querySelector(".purplesources");
        purplesources.style.visibility="hidden";
        let purplebutton= document.querySelector(".purplebutton");
        purplebutton.style.backgroundColor="#a59dff";
        let nextcover= document.querySelector(".nextbuttoncover");
        nextcover.style.zIndex="7";
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

function back() {
window.open("../index.html", "_self");
}