const b1=document.querySelector(".btn1 button");
const b2=document.querySelector(".btn2 button");
const c=document.querySelector(".count");
let counter=0;

b1.addEventListener("click",()=>{
    counter++;
    c.innerHTML="Count: "+counter;
})
b2.addEventListener("click",()=>{
    let colorGEN=getColor();
    let div=document.querySelector(".content");
    div.style.backgroundColor=colorGEN;
});

function getColor(){
    let red=Math.floor(Math.random()*255);
    let green=Math.floor(Math.random()*255);
    let blue=Math.floor(Math.random()*255);

    let color=`rgb(${red}, ${green}, ${blue})`;
    return color;
}