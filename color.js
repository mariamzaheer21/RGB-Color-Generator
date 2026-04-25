let btn= document.querySelector("button");

btn.addEventListener("click", function(){
    let h2= document.querySelector("h2");
    let randomColor= randomcolor();
    console.log("randomColor");
    h2.innerHTML=randomColor;
    let div= document.querySelector("div");
    div.style.backgroundColor=randomColor;
});

function randomcolor(){
let red= Math.floor(Math.random()*255);
let green= Math.floor(Math.random()*255);
let blue= Math.floor(Math.random()*255);
let color= `rgb(${red} , ${green}, ${blue})`
return color;
}

