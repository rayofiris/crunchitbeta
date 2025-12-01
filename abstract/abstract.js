window.onload=function(){setTimeout(showPopup,3000)};

function showPopup()
{
    let popup1= document.querySelector(".dialogue");
    popup1.style.visibility="visible";
    let bigray = document.querySelector(".bigray");
    bigray.style.backgroundImage= "url(../sprites/bigray7.png)";

}

function hideOne()
{
    let popup1= document.querySelector(".dialogue");
    popup1.style.visibility="hidden";
}

window.addEventListener('load', function(){setTimeout(showPopuptwo,13000)});

function showPopuptwo()
{
    let popup2= document.querySelector(".dialogue2");
    popup2.style.visibility="visible";
    let bigray = document.querySelector(".bigray");
    bigray.style.backgroundImage= "url(../sprites/bigray9.png)";
}

function hideTwo()
{
    let popup2= document.querySelector(".dialogue2");
    popup2.style.visibility="hidden";
}

window.addEventListener('load', function(){this.setTimeout(showPopupthree, 23000)});

function showPopupthree()
{
    let popup3= document.querySelector(".dialogue3");
    popup3.style.visibility="visible";
    let bigray = document.querySelector(".bigray");
    bigray.style.backgroundImage= "url(../sprites/bigray5.png)";
}


function hideThree()
{
    let popup3= document.querySelector(".dialogue3");
    popup3.style.visibility="hidden";
}

window.addEventListener('load', function(){this.setTimeout(showPopupfour, 36000)});

function showPopupfour()
{
    let popup4= document.querySelector(".dialogue4");
    popup4.style.visibility="visible";
    let bigray = document.querySelector(".bigray");
    bigray.style.backgroundImage= "url(../sprites/bigray15.png)";
}

function hideFour()
{
    let popup4= document.querySelector(".dialogue4");
    popup4.style.visibility="hidden";

}

/*
function showFourpointfive()
{
    let popup4point5= document.getElementById("popup4point5");
    popup4point5.style.visibility="visible";
}



window.addEventListener('load', function(){this.setTimeout(showPopupfive, 51000)});

function showPopupfive()
{
    let popup5= document.getElementById("popup7");
    popup5.style.visibility="visible";
}

function hideFive()
{
    let popup5= document.getElementById("popup7");
    popup5.style.visibility="hidden";
}

window.addEventListener('load', function(){this.setTimeout(showPopupsix, 61000)});

function showPopupsix()
{
    let popup6= document.getElementById("popup3");
    popup6.style.visibility="visible";
}

function hideSix()
{
    let popup6= document.getElementById("popup3");
    popup6.style.visibility="hidden";
}

window.addEventListener('load', function(){this.setTimeout(showPopupseven, 73000)});

function showPopupseven()
{
    let popup7= document.getElementById("popup8");
    popup7.style.visibility="visible";
}

function hideSeven()
{
    let popup7= document.getElementById("popup8");
    popup7.style.visibility="hidden";
}

window.addEventListener('load', function(){this.setTimeout(showPopupeight, 87000)});

function showPopupeight()
{
    let popup8= document.getElementById("popup5");
    popup8.style.visibility="visible";
}

function hideEight()
{
    let popup8= document.getElementById("popup5");
    popup8.style.visibility="hidden";
}

window.addEventListener('load', function(){this.setTimeout(showPopupnine, 97000)});

function showPopupnine()
{
    let popup9= document.getElementById("popup9");
    popup9.style.visibility="visible";
}

function hideNine()
{
    let popup9= document.getElementById("popup9");
    popup9.style.visibility="hidden";
}
*/

function goNext()
{
    window.open("../transition1/transition1.html", "_self");
}