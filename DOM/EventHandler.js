// const btn = document.getElementById("btn")

// btn.addEventListener("click",()=>{
//     alert("Button Clicked!")
// })

// const input = document.querySelector("#name")

// input.addEventListener("keyup",(event)=>{
//     console.log("Event type:",event.type) // keyup
//     console.log("Key pressed:",event.key) //which key
//     console.log("Target Value:", event.target.value); // input value
// })

//event.preventDefault() → Stops default action.

const form = document.querySelector("#myForm")
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    // const input = form.querySelector("input")
    // console.log(input.value)
    // console.log(e.target.elements[0].value)
    console.log(e.target.username.value)
    console.log("Successfully submit")
})