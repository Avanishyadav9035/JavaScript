// const form = document.getElementById("myForm")

// form.addEventListener("submit",(event)=>{
//     event.preventDefault() //stop page reload
//     const name = document.getElementById("username").value;
//     const subscribe = document.getElementById("subscribe").checked;
//     const country = document.getElementById("country").value;

//     console.log("Name",name)
//     console.log("Subscribe",subscribe)
//     console.log("Country",country)
// })


// 2. Form Events: input, change, submit

// input → fires on every keystroke
// document.getElementById("liveInput").addEventListener("click",(e)=>{
//     console.log("Typing:",e.target.value)
// })

 // change → fires only when value finalized (e.g., select)
// document.getElementById("dropdown").addEventListener("click",(e)=>{
//     console.log("You Selected:",e.target.value)
// })

  // submit → triggered when form submitted
//  document.getElementById("testForm").addEventListener("click",(e)=>{
//     e.preventDefault()
//     console.log("Form Submitted!")
//  })

const signupForm = document.getElementById("signupform")
signupForm.addEventListener("submit",(e)=>{
    e.preventDefault()    // stop reload
    
    const fullName = document.getElementById("fullname").value
    const email = document.getElementById("email").value
    const gender = signupForm.querySelector('input[name="gender"]:checked').value
    const termAccepted = document.getElementById("terms").checked

    console.log("FullName:",fullName)
    console.log("Email:",email)
    console.log("Gender:",gender)
    console.log("Terms Accepted:",termAccepted)
})