window.onload=function(){setTimeout(showPopup,3000)};

function showPopup()
{
    let popup1= document.querySelector(".dialogue");
    popup1.style.visibility="visible";
    let bigray = document.querySelector(".bigray");
    bigray.style.backgroundImage= "url(../sprites/bigray12.png)";

}

function hideOne()
{
    let popup1= document.querySelector(".dialogue");
    popup1.style.visibility="hidden";
}

window.addEventListener('load', function(){setTimeout(showPopuptwo,23000)});

function showPopuptwo()
{
    let popup2= document.querySelector(".dialogue2");
    popup2.style.visibility="visible";
    let bigray = document.querySelector(".bigray");
    bigray.style.backgroundImage= "url(../sprites/bigray2.png)";
}

function hideTwo()
{
    let popup2= document.querySelector(".dialogue2");
    popup2.style.visibility="hidden";
}

window.addEventListener('load', function(){setTimeout(showPopupthree, 43000)});

function showPopupthree()
{
    let popup3= document.querySelector(".dialogue3");
    popup3.style.visibility="visible";
    let bigray = document.querySelector(".bigray");
    bigray.style.backgroundImage= "url(../sprites/bigray6.png)";
}

function hideThree()
{
    let popup3= document.querySelector(".dialogue3");
    popup3.style.visibility="hidden";
}

window.addEventListener('load', function(){setTimeout(showPopupfour, 68000)});

function showPopupfour()
{
    let popup4= document.querySelector(".dialogue4");
    popup4.style.visibility="visible";
    let bigray = document.querySelector(".bigray");
    bigray.style.backgroundImage= "url(../sprites/bigray7.png)";
}

function hideFour()
{
    let popup4= document.querySelector(".dialogue4");
    popup4.style.visibility="hidden";
}

function goNext()
{
    window.open("../transition2/transition2.html", "_self");
}