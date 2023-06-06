let reg= /^[A-Za-z0-9._-]+@[A-Za-z0-9.]+[A-Za-z]{2,}$/gi

let email= document.getElementById("email");
let err= document.getElementById("error")
let subm= document.getElementById("submit");
let succ = document.querySelector(".sucess");
let component = document.querySelector(".component");
const diss = document.getElementById("diss");

diss.addEventListener("click",()=>{
    component.style.display="grid"
    succ.style.display="none"
    email.value="";
    
})


subm.addEventListener("click",(e)=>{
    e.preventDefault();
   let val = email.value;
    if(!reg.test(val)){
        err.style.display="block";
        email.classList.add("error")
    }
    else{
       component.style.display="none"
       succ.style.display="flex"
    }
})

