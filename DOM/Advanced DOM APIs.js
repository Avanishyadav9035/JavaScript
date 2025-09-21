//1.closest() → Find nearest parent with selector
// const btn = document.getElementById("btn")
// btn.addEventListener("click",()=>{
//     const card = btn.closest(".card")
//     console.log("Found Closest parent:",card)
// })

//2. matches() → Check if element matches a selector

// const list  = document.getElementById("list")
// list.addEventListener("click",(e)=>{
//     if(e.target.matches(".fruit")){
//         console.log(e.target.innerText, "is a fruit!")
//     } else{
//         console.log(e.target.innerText,"is not a fruits!")
//     }
// })

//3. dataset → Custom data-* attributes

// const btn = document.getElementById("userBtn");
// btn.addEventListener("click",()=>{
//     console.log("User ID:",btn.dataset.id)
//     console.log("User Role:",btn.dataset.role)
// })

//4. getBoundingClientRect() → Element size & position

// const box = document.getElementById("box")
// box.addEventListener("click",()=>{
//     console.log(box.getBoundingClientRect())    //Useful for animations, tooltips, collision detection.
// })

//5. scrollIntoView() → Auto-scroll to element
// document.getElementById("scrollBtn").addEventListener("click",()=>{
//     document.getElementById("target").scrollIntoView({behavior:"smooth"})
// })

//6. Clipboard API → Copy to clipboard
// const button = document.getElementById("copyBtn")
// button.addEventListener("click", async ()=>{
//        const text = document.getElementById("copyText").value;
//        await navigator.clipboard.writeText(text)
//        console.log("Copied:",text)
// })

//7. Intersection Observer API → Detect element visibility

const img = document.getElementById("lazyImg")
const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            img.src = img.dataset.src    //lazy load
            console.log("Image loaded when visible!")
            observer.unobserve(img)
        }
    })
})
observer.observe(img)