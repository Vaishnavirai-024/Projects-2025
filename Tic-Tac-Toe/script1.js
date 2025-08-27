const arr=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
let turn0=true;

const btn=document.querySelectorAll(".grid");
const reset=document.querySelector("#restart");

let count=0;


reset.addEventListener("click",()=>{
    clean();
})
function clean(){
    btn.forEach((gridBtn)=>{
        gridBtn.innerHTML="";
        gridBtn.disabled=false;
    })
    document.querySelector(".display").innerHTML=""
    count=0;
}

btn.forEach((gridBtn)=>{
    gridBtn.addEventListener("click",()=>{
        if(turn0){
            gridBtn.innerHTML="O";
            turn0=false;
        }else{
            gridBtn.innerHTML="X";
            turn0=true;
        }
        gridBtn.disabled=true;
        count++;
        if (winner()) {
            disableAll();
        } else if (count == 9) {
            document.querySelector(".display").innerHTML = "Match Draw!";
            count=0;
        }
    })
});


function winner(){
    for(let val of arr){
        if(btn[val[0]].innerHTML!=="" && btn[val[0]].innerHTML==btn[val[1]].innerHTML && btn[val[1]].innerHTML==btn[val[2]].innerHTML){
            if(btn[val[0]].innerHTML="X"){
                document.querySelector(".display").innerHTML="Winner is X!"
            }else{
                document.querySelector(".display").innerHTML="Winner is O!"

            }
            return true;
        }
    }
    return false;
    
}
function disableAll() {
    btn.forEach((gridBtn) => gridBtn.disabled = true);
}
