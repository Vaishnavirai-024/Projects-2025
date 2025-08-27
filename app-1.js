let btn=document.querySelector("button");

btn.addEventListener("click",function(){
    let h1=document.querySelector("h1");
    let colorGEN=getColor();
    h1.innerText=colorGEN;
    let div=document.querySelector("div");
    div.style.backgroundColor=colorGEN;

    console.log("color is updated");
}
);

function getColor(){
    let red=Math.floor(Math.random()*255);
    let green=Math.floor(Math.random()*255);
    let blue=Math.floor(Math.random()*255);

    let color=`rgb(${red}, ${green}, ${blue})`;
    return color;
}