const zone =  document.getElementById("dropZone")

zone.addEventListener("dragover",(e)=>{
     e.preventDefault();
     zone.style.background = "lightblue"
})

zone.addEventListener('dragleave',()=>{
    zone.style.background = "white"
})


zone.addEventListener("drop",(e)=>{
    e.preventDefault();
    zone.textContent = "Dropped!"
})