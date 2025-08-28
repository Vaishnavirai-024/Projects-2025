const undo=[];
const redo=[];
document.body.addEventListener("click" ,(e)=>{
    if(e.target.tagName=="BUTTON")return;
    const a=Math.floor(Math.random()*256);
    const b=Math.floor(Math.random()*256);
    const c=Math.floor(Math.random()*256);

    let ele=document.createElement("div");
    ele.className="circle";
    ele.style.left=`${e.clientX}px`;
    ele.style.top=`${e.clientY}px`;
    ele.style.backgroundColor=`rgb(${a},${b},${c})`;
    document.body.appendChild(ele);
    undo.push(ele);
});

document.querySelector("#Undo").addEventListener("click",()=>{
    if(undo.length>0){
        const lastCircle=undo.pop();
        redo.push(lastCircle);
        lastCircle.remove();
    }
});

document.querySelector("#Redo").addEventListener("click",()=>{
    if(redo.length>0){
        const ele=redo.pop();
        document.body.appendChild(ele);
        undo.push(ele);
    }
});
document.querySelector("#Reset").addEventListener("click",()=>{
   while(undo.length>0){
   const ele= undo.pop();
   ele.remove();
   redo.length=0;
   }
});
