window.onload=function(){setTimeout(showPopup,3000)};

function showPopup()
{
    let popup1= document.querySelector(".dialogue");
    popup1.style.visibility="visible";
    let bigray = document.querySelector(".bigray");
    bigray.style.backgroundImage= "url(../sprites/bigray14.png)";

}

function hideOne()
{
    let popup1= document.querySelector(".dialogue");
    popup1.style.visibility="hidden";
}

window.addEventListener('load', function(){setTimeout(showPopuptwo,18000)});

function showPopuptwo()
{
    let popup2= document.querySelector(".dialogue2");
    popup2.style.visibility="visible";
    let bigray = document.querySelector(".bigray");
    bigray.style.backgroundImage= "url(../sprites/bigray11.png)";
}

function hideTwo()
{
    let popup2= document.querySelector(".dialogue2");
    popup2.style.visibility="hidden";
}

window.addEventListener('load', function(){this.setTimeout(showPopupthree, 38000)});

function showPopupthree()
{
    let popup3= document.querySelector(".dialogue3");
    popup3.style.visibility="visible";
    let bigray = document.querySelector(".bigray");
    bigray.style.backgroundImage= "url(../sprites/bigray8.png)";
}

function hideThree()
{
    let popup3= document.querySelector(".dialogue3");
    popup3.style.visibility="hidden";
}

function goNext()
{
    window.open("../transition6/transition6.html", "_self");
}