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
sprite.x = 86;
sprite.y = 38; 

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
        Yspeed = 3;
        image.src="../sprites/front2.png";
    }
     if(!moveUp && moveDown)
    {
        Xspeed = 0;
        Yspeed = 3;
        image.src="../sprites/front2.png";
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
        image.src="../sprites/front2.png";
    }
     if(!moveLeft && !moveRight && !moveLeft && !moveRight)
    {
        Xspeed = 0;
        image.src="../sprites/front2.png";
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

   if(moveUp && !moveDown && !moveLeft && !moveRight)
    {
        Xspeed = 0;
        Yspeed = -3;
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

   /* if (sprite.y < 476)
    {
        sprite.y=476;
    }

    if (sprite.y > 476)
    {
        sprite.y = 476;
    }
*/


if ((sprite.x > 190) && (sprite.x < 230) && (sprite.y >= 38) && (sprite.y <= 54)) 
{
    let textOne = document.querySelector(".text1");
    textOne.style.visibility = "visible";
    image.src= "../sprites/back2.png";
}
else {
    let textOne = document.querySelector(".text1");
    textOne.style.visibility = "hidden";
}

if ((sprite.x > 640) && (sprite.x < 680) && (sprite.y >= 38) && (sprite.y <= 54)) 
{
    let textTwo = document.querySelector(".text2");
    textTwo.style.visibility = "visible";
    image.src= "../sprites/back2.png";
}
else {
    let textTwo = document.querySelector(".text2");
    textTwo.style.visibility = "hidden";
}

if ((sprite.x > 800) && (sprite.x < 840) && (sprite.y >= 108) && (sprite.y <= 128)) 
{
    let textThree = document.querySelector(".text3");
    textThree.style.visibility = "visible";
    image.src= "../sprites/back2.png";
}
else {
    let textThree = document.querySelector(".text3");
    textThree.style.visibility = "hidden";
}

if ((sprite.x > 480) && (sprite.x < 520) && (sprite.y >= 182 ) && (sprite.y <= 200)) 
{
    let textFour = document.querySelector(".text4");
    textFour.style.visibility = "visible";
    image.src= "../sprites/back2.png";
}
else {
    let textFour = document.querySelector(".text4");
    textFour.style.visibility = "hidden";
}

if ((sprite.x > 940) && (sprite.x < 980) && (sprite.y >= 182 ) && (sprite.y <= 200)) 
{
    let textFive = document.querySelector(".text5");
    textFive.style.visibility = "visible";
    image.src= "../sprites/back2.png";
}
else {
    let textFive = document.querySelector(".text5");
    textFive.style.visibility = "hidden";
}

if ((sprite.x > 90) && (sprite.x < 130) && (sprite.y >= 254 ) && (sprite.y <= 274)) 
{
    let textSix = document.querySelector(".text6");
    textSix.style.visibility = "visible";
    image.src= "../sprites/back2.png";
}
else {
    let textSix = document.querySelector(".text6");
    textSix.style.visibility = "hidden";
}

if ((sprite.x > 260) && (sprite.x < 300) && (sprite.y >= 330 ) && (sprite.y <= 346)) 
{
    let textSeven = document.querySelector(".text7");
    textSeven.style.visibility = "visible";
    image.src= "../sprites/back2.png";
}
else {
    let textSeven = document.querySelector(".text7");
    textSeven.style.visibility = "hidden";
}

if ((sprite.x > 670) && (sprite.x < 710) && (sprite.y >= 330 ) && (sprite.y <= 346)) 
{
    let textEight = document.querySelector(".text8");
    textEight.style.visibility = "visible";
    image.src= "../sprites/back2.png";
}
else {
    let textEight = document.querySelector(".text8");
    textEight.style.visibility = "hidden";
}

if ((sprite.x > 910) && (sprite.x < 950) && (sprite.y >= 398) && (sprite.y <= 420)) 
{
    let textNine = document.querySelector(".text9");
    textNine.style.visibility = "visible";
    image.src= "../sprites/back2.png";
}
else {
    let textNine = document.querySelector(".text9");
    textNine.style.visibility = "hidden";
}

if ((sprite.x > 440) && (sprite.x < 480) && (sprite.y >= 474 ) && (sprite.y <= 492)) 
{
    let textTen = document.querySelector(".text10");
    textTen.style.visibility = "visible";
    image.src= "../sprites/back2.png";
}
else {
    let textTen = document.querySelector(".text10");
    textTen.style.visibility = "hidden";
}

if ((sprite.x > 1030) && (sprite.x < 1080) && (sprite.y >= 474 ) && (sprite.y <= 492)) 
{
    
    image.src= "../sprites/back2.png";
}

if ((sprite.x > 1040) && (sprite.x < 1070) && (sprite.y >= 474) && (sprite.y <= 492))
{
    window.open("../chapter3room/chapter3room.html", "_self");
}


if (sprite.y < 38)
{
    rowOne.src = "img/row1.png";
}

if (sprite.y >= 38)
{
    rowOne.src = "img/empty.png";
}


if (sprite.y < 108) 
{
    rowTwo.src = "img/row2.png";
}

if (sprite.y >= 108)
{
    rowTwo.src = "img/empty.png";
}

if (sprite.y < 184) 
{
    rowThree.src = "img/row3.png";
}

if (sprite.y >= 184)
{
    rowThree.src = "img/empty.png";
}

if (sprite.y < 254) 
{
    rowFour.src = "img/row4.png";
}

if (sprite.y >= 254)
{
    rowFour.src = "img/empty.png";
}

if (sprite.y < 330) 
{
    rowFive.src = "img/row5.png";
}

if (sprite.y >= 330)
{
    rowFive.src = "img/empty.png";
}

if (sprite.y < 398) 
{
    rowSix.src = "img/row6.png";
}

if (sprite.y >= 398)
{
    rowSix.src = "img/empty.png";
}

if (sprite.y < 474) 
{
    rowSeven.src = "img/row7.png";
}

if (sprite.y >= 474)
{
    rowSeven.src = "img/empty.png";
}



    render();
}   




let rowOne = new Image();
rowOne.src = "img/row1.png";


let rowTwo = new Image();
rowTwo.src = "img/row2.png";


let rowThree = new Image();
rowThree.src = "img/row3.png";


let rowFour = new Image();
rowFour.src = "img/row4.png";

     
let rowFive = new Image();
rowFive.src = "img/row5.png";


let rowSix = new Image();
rowSix.src = "img/row6.png";


let rowSeven = new Image();
rowSeven.src = "img/row7.png";

      



function render()
{
      
    ctx.clearRect(0,0, canvas.width, canvas.height);

    ctx.drawImage(
    image,
    sprite.frameX, sprite.frameY, sprite.frameWidth, sprite.frameHeight, sprite.x, sprite.y, sprite.width, sprite.height, 
    );

    ctx.drawImage (
        rowOne,
        0, 0, 1200, 560);
    
    ctx.drawImage (
        rowTwo,
        0, 0, 1200, 560);

    ctx.drawImage (
        rowThree,
        0, 0, 1200, 560);

    ctx.drawImage (
        rowFour,
        0, 0, 1200, 560);

    ctx.drawImage (
        rowFive,
        0, 0, 1200, 560);
    
    ctx.drawImage (
        rowSix,
        0, 0, 1200, 560);
    
    ctx.drawImage (
        rowSeven,
        0, 0, 1200, 560);

}






var image = new Image();
image.src = "../sprites/back2.png";
var image = new Image();
image.src = "../sprites/left2.png";
var image = new Image();
image.src = "../sprites/right2.png";