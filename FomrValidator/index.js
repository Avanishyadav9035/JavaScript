const form  = document.getElementById("signupform")
const email = document.getElementById("email")
const error = document.getElementById("error")

email.addEventListener("input",()=>{
    if(!email.value.includes('@')){
        error.textContent = "Invalid Email!"
    } else{
        error.textContent = ""
    }
});

form.addEventListener("submit",(e)=>{
    if(!email.value.includes('@')){
        e.preventDefault()
        alert('Fix error before submit!')
    }
})

