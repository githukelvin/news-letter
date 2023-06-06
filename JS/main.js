let reg= /^[A-Za-z0-9._-]+@[A-Za-z0-9.]+[A-Za-z]{2,}$/gi

let email= document.getElementById("email");
let err= document.getElementById("error")
let subm= document.getElementById("submit");




subm.addEventListener("click",(e)=>{
    e.preventDefault();
   let val = email.value;
    if(!reg.test(val)){
        err.style.display="block";
        email.classList.add("error")
    }
    else{
        window.location.href="../sucess.html"
    }
})

