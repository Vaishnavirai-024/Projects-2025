function age(){
let inp=document.querySelector("#dob");


let d=inp.value
let date=new Date(d);
let yr=date.getFullYear();
let curr=new Date().getFullYear();
     
 let c=document.querySelector(".container");
    if(curr-yr>=18){
        c.innerHTML=` <h1 style="text-align: center;">You are valid!</h1>
        <div id="Retry" style="display: flex; justify-content: center; align-items: center; height: 50px;">
            <button  type="button" onClick="content()" style="width: 80px; height: 30px; background-color: black; color: white; border-radius: 4px; ">Retry</button>
        </div>`;
        
    }else{
         c.innerHTML=`  <h1 style="text-align: center;">You are not valid!</h1>
        <div id="Retry" style="display: flex; justify-content: center; align-items: center; height: 50px;">
            <button  type="button" onClick="content()" style="width: 80px; height: 30px; background-color: black; color: white; border-radius: 4px; ">Retry</button>
        </div>`;
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
   



