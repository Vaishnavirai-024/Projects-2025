const heading=document.querySelector(".container");
const ele=document.createElement("div")
ele.className="main"
ele.innerHTML="<h1>Main heading</h1>"
heading.appendChild(ele);

document.querySelector("#btn").addEventListener("click",()=>{
    const b=document.createElement("div")
    b.className="main"
    b.innerHTML="<h1>Main heading</h1>"
    heading.append(b);
    // console.log();
})

