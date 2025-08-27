let login=document.querySelector(".login-form");
let navbar= document.querySelector(".header .navbar");

document.querySelector("#login-btn").onclick=()=>{
    login.classList.toggle("active")
    navbar.classList.remove("active")
}

document.querySelector("#menu-btn").onclick=()=>{
    login.classList.remove("active")
    navbar.classList.toggle("active")
}



