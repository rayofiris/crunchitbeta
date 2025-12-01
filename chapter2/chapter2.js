
let seconds = 60; 
let timer = null; 
function updateTimer() {

}

function startTimer() {
    if (timer === null) {
timer = setInterval (()=> {
    seconds--; 
    document.querySelector(".time").textContent = seconds;
if (seconds <= 0) {
    stopTimer();
}

}, 1000)}
    

   
}

window.onload = startTimer();

function stopTimer(){
        clearInterval(timer);
        timer = null;
        let next = document.querySelector(".next");
        next.style.visibility = "hidden";
        let fail = document.querySelector(".failcontainer");
        fail.style.visibility = "visible";
        document.addEventListener("click", playVideo);
        
     function playVideo()
{
    if (fail.style.visibility = "visible")
    {
let video = document.querySelector(".gif");
    video.style.visibility = "visible";
    video.play();
    setTimeout(reload, 2000)
    
function reload() {
        if (video.style.visibility="visible"){
        window.open("chapter2.html", "_self");
        }
}}
    }

}




/*window.open("chapter2.html", "_self");*/




let coverOne = document.getElementsByClassName("cover1");
for (let i = 0; i < coverOne.length; i++) {
  coverOne[i].style.visibility = "visible";
}
let coverTwo = document.getElementsByClassName("cover2");
let coverThree = document.getElementsByClassName("cover3");
let coverFour = document.getElementsByClassName("cover4");
let coverFive = document.getElementsByClassName("cover5");
let coverSix = document.getElementsByClassName("cover6");
let coverSeven = document.getElementsByClassName("cover7");

document.addEventListener("keydown", function(event) {

    const pressedKey = event.key;
 
    if (pressedKey === "r")
    {
        for (let i = 0; i < coverOne.length; i++) {
        coverOne[i].style.visibility = "hidden";
        }
        for (let j = 0; j < coverTwo.length; j++) {
        coverTwo[j].style.visibility = "visible";
        }
        for (let k = 0; k < coverThree.length; k++) {
        coverThree[k].style.visibility = "visible";
        }
        for (let l = 0; l < coverFour.length; l++) {
        coverFour[l].style.visibility = "visible";
        }
        for (let m = 0; m < coverFive.length; m++) {
        coverFive[m].style.visibility = "visible";
        }
        for (let n = 0; n < coverSix.length; n++) {
        coverSix[n].style.visibility = "visible";
        }
        for (let o = 0; o < coverSeven.length; o++) {
        coverSeven[o].style.visibility = "visible";
        }
        
    }
    
     });

document.addEventListener("keydown", function(event) {

    const pressedKey = event.key;
    if (pressedKey === "o")
    {
        for (let i = 0; i < coverOne.length; i++) {
        coverOne[i].style.visibility = "visible";
        }
        for (let j = 0; j < coverTwo.length; j++) {
        coverTwo[j].style.visibility = "hidden";
        }
        for (let k = 0; k < coverThree.length; k++) {
        coverThree[k].style.visibility = "visible";
        }
        for (let l = 0; l < coverFour.length; l++) {
        coverFour[l].style.visibility = "visible";
        }
        for (let m = 0; m < coverFive.length; m++) {
        coverFive[m].style.visibility = "visible";
        }
        for (let n = 0; n < coverSix.length; n++) {
        coverSix[n].style.visibility = "visible";
        }
        for (let o = 0; o < coverSeven.length; o++) {
        coverSeven[o].style.visibility = "visible";
        }
    }


});

document.addEventListener("keydown", function(event) {

    const pressedKey = event.key;
    if (pressedKey === "y")
    {
         for (let i = 0; i < coverOne.length; i++) {
        coverOne[i].style.visibility = "visible";
        }
        for (let j = 0; j < coverTwo.length; j++) {
        coverTwo[j].style.visibility = "visible";
        }
        for (let k = 0; k < coverThree.length; k++) {
        coverThree[k].style.visibility = "hidden";
        }
        for (let l = 0; l < coverFour.length; l++) {
        coverFour[l].style.visibility = "visible";
        }
        for (let m = 0; m < coverFive.length; m++) {
        coverFive[m].style.visibility = "visible";
        }
        for (let n = 0; n < coverSix.length; n++) {
        coverSix[n].style.visibility = "visible";
        }
        for (let o = 0; o < coverSeven.length; o++) {
        coverSeven[o].style.visibility = "visible";
        }
    }


});

document.addEventListener("keydown", function(event) {

    const pressedKey = event.key;
    if (pressedKey === "g")
    {
        for (let i = 0; i < coverOne.length; i++) {
        coverOne[i].style.visibility = "visible";
        }
        for (let j = 0; j < coverTwo.length; j++) {
        coverTwo[j].style.visibility = "visible";
        }
        for (let k = 0; k < coverThree.length; k++) {
        coverThree[k].style.visibility = "visible";
        }
        for (let l = 0; l < coverFour.length; l++) {
        coverFour[l].style.visibility = "hidden";
        }
        for (let m = 0; m < coverFive.length; m++) {
        coverFive[m].style.visibility = "visible";
        }
        for (let n = 0; n < coverSix.length; n++) {
        coverSix[n].style.visibility = "visible";
        }
        for (let o = 0; o < coverSeven.length; o++) {
        coverSeven[o].style.visibility = "visible";
        }
    }


});

document.addEventListener("keydown", function(event) {

    const pressedKey = event.key;
    if (pressedKey === "b")
    {
       for (let i = 0; i < coverOne.length; i++) {
        coverOne[i].style.visibility = "visible";
        }
        for (let j = 0; j < coverTwo.length; j++) {
        coverTwo[j].style.visibility = "visible";
        }
        for (let k = 0; k < coverThree.length; k++) {
        coverThree[k].style.visibility = "visible";
        }
        for (let l = 0; l < coverFour.length; l++) {
        coverFour[l].style.visibility = "visible";
        }
        for (let m = 0; m < coverFive.length; m++) {
        coverFive[m].style.visibility = "hidden";
        }
        for (let n = 0; n < coverSix.length; n++) {
        coverSix[n].style.visibility = "visible";
        }
        for (let o = 0; o < coverSeven.length; o++) {
        coverSeven[o].style.visibility = "visible";
        }
    }


});

document.addEventListener("keydown", function(event) {

    const pressedKey = event.key;
    if (pressedKey === "i")
    {
         for (let i = 0; i < coverOne.length; i++) {
        coverOne[i].style.visibility = "visible";
        }
        for (let j = 0; j < coverTwo.length; j++) {
        coverTwo[j].style.visibility = "visible";
        }
        for (let k = 0; k < coverThree.length; k++) {
        coverThree[k].style.visibility = "visible";
        }
        for (let l = 0; l < coverFour.length; l++) {
        coverFour[l].style.visibility = "visible";
        }
        for (let m = 0; m < coverFive.length; m++) {
        coverFive[m].style.visibility = "visible";
        }
        for (let n = 0; n < coverSix.length; n++) {
        coverSix[n].style.visibility = "hidden";
        }
        for (let o = 0; o < coverSeven.length; o++) {
        coverSeven[o].style.visibility = "visible";
        }
    }


});

document.addEventListener("keydown", function(event) {

    const pressedKey = event.key;
    if (pressedKey === "v")
    {
        for (let i = 0; i < coverOne.length; i++) {
        coverOne[i].style.visibility = "visible";
        }
        for (let j = 0; j < coverTwo.length; j++) {
        coverTwo[j].style.visibility = "visible";
        }
        for (let k = 0; k < coverThree.length; k++) {
        coverThree[k].style.visibility = "visible";
        }
        for (let l = 0; l < coverFour.length; l++) {
        coverFour[l].style.visibility = "visible";
        }
        for (let m = 0; m < coverFive.length; m++) {
        coverFive[m].style.visibility = "visible";
        }
        for (let n = 0; n < coverSix.length; n++) {
        coverSix[n].style.visibility = "visible";
        }
        for (let o = 0; o < coverSeven.length; o++) {
        coverSeven[o].style.visibility = "hidden";
        }
    }


});

function goNext()
{
    window.open("../transition4/transition4.html", "_self");
}