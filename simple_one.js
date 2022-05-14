const title = document.querySelector("div.hello:first-child h1");

function handletitleClick() {
    title.style.color = "yellow"
}

function mouseOn(){
    title.innerText = "mouse is here";
}

function mouseOff(){
    title.innerText = "mouse is gone";
}

function handleWindow(){
    alert("copied!");
}

function changeBackgroundColor(){
    document.body.style.background = "blue";
}

title.addEventListener("click", handletitleClick);
title.addEventListener("mouseenter", mouseOn);
title.addEventListener("mouseleave", mouseOff);

window.addEventListener("resize", changeBackgroundColor);
window.addEventListener("copy", handleWindow);
