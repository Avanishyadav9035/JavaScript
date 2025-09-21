// Bubbling vs Capturing

// Bubbling (default): Event travels from child → parent → root.

// Capturing: Event travels from root → parent → child.

// const parent = document.querySelector("#parent")
// const child = document.querySelector("#child")

// Bubbling (default → false)
// parent.addEventListener("click",()=>{
//    console.log("Parent Click(Bubbling)")
// }, false);

// child.addEventListener("click",()=>{
//     console.log("Child clicked")
// })

// Capturing (third param = true)
// parent.addEventListener("click",()=>{
//     console.log("Parent clicked(Capturing)")
// },true)

// child.addEventListener("click",()=>{
//     console.log("Child Clicked")
// },true)

// const btn = document.createElement("button")
// btn.textContent = "click"
// parent.appendChild(btn)
// parent.append(btn);

// const form = document.getElementById("myForm")


// form.addEventListener("submit",(e)=>{
//     e.preventDefault()
//      const input = form.querySelector("input")
//      console.log(input.value)
//     //console.log(e.target.elements[0].value)
//     console.log("Form Submitted")
// })

// const fruit = document.getElementById("fruits")
// // Delegating event to parent <ul>
// fruit.addEventListener("click",(e)=>{
//     if(e.target.tagName === "LI"){
//         e.target.classList.toggle("highlight")
//     }
// })

const parent1 = document.getElementById("parent1")
const child1 = document.getElementById("child1")
const innerBtn = document.getElementById("innerBtn")

//Bubbling   -   // Bubbling (default, from inside → outside)
// parent1.addEventListener("click",()=>{
//     console.log("Parent Click")
// })
// child1.addEventListener("click",()=>{
//     console.log("Child Clicked")
// })
// innerBtn.addEventListener("click",()=>{
//     console.log("button is clicked")
// })

// Capturing (outside → inside, set 3rd arg = true)

parent1.addEventListener("click",()=>{
    console.log("paret clicked")
},true)
child1.addEventListener("click",()=>{
    console.log("child clicked")
},true)
innerBtn.addEventListener("click",()=>{
    console.log("btn clicked")
},true)