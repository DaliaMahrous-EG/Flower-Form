let inputs = document.querySelectorAll(`input`)
let link_logIn = document.querySelector(`#login-link`)
let link_signUp = document.querySelector(`#registed-link`)
let overlay_img = document.querySelector(`#overlay_img`)
let overlay = document.querySelector(`.overlay`)

const signUp = document.querySelector(`#signUp`)
const logIn = document.querySelector(`#logIn`)

// =================================

inputs.forEach((ele) =>{
    ele.addEventListener("focus" , ()=>{
        ele.previousElementSibling.classList.add("lable-selected")
    })
    ele.addEventListener("blur" , ()=>{
        if(ele.value === ""){
            ele.previousElementSibling.classList.remove("lable-selected")
        }
    })
})

link_signUp.addEventListener("click" , ()=>{
    if(window.innerWidth < 600){
        signUp.style.display = "block"
        logIn.style.display = "none"
    }else{
        overlay.style.transform = `translate(128% , -550px)`
        overlay_img.style.transform = `translate(-150px , -15px)`
    }
})
link_logIn.addEventListener("click" , ()=>{
    if(window.innerWidth < 600){
        signUp.style.display = "block"
        logIn.style.display = "none"
    }else{
        overlay.style.transform = `translate(0 , -550px)`
        overlay_img.style.transform = `translate(-10px , -15px)`
    }
})
