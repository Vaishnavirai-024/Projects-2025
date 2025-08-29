
function age(){
let inp=document.querySelector("#dob");


let d=inp.value
let date=new Date(d);
let yr=date.getFullYear();
let curr=new Date().getFullYear();
     
 let c=document.querySelector(".container");
    if(curr-yr>=18){
        c.innerHTML=`<h1>you are valid</h1>
        <button type="button" onClick="content()" style="width: 60px; height: 20px;">retry</button>`;
        
    }else{
        c.innerHTML=`<h1>you are not valid</h1>
        <button type="button" onClick="content()" style="width: 60px; height: 20px;">retry</button>`;
    }

}


document.querySelector("#sub").addEventListener("click",age);

function content(){
    let c=document.querySelector(".container");
    c.innerHTML=` <div class="main">
                <h2>Age Validater</h2>
            </div>
            <div class="input">
                <input type="date" id="dob">   
            </div>
            <div class="text">
                <h3>Enter you DOB</h3>
            </div>
            <div class="check">
                <button id="sub">Check</button>
            </div>`
            
}
   



