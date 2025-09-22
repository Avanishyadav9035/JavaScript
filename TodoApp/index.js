const input = document.getElementById("taskInput")
const addBtn = document.getElementById("addBtn")
const taskList = document.getElementById("taskList")

function saveTasks(){
    localStorage.setItem("tasks",taskList.innerHTML)
}
function loadTasks(){
    taskList.innerHTML = localStorage.getItem("tasks") || " "
}

addBtn.addEventListener("click",()=>{
    if (input.value.trim()){
        const li = document.createElement("li")
        li.textContent = input.value
        li.addEventListener("click",()=>li.remove());
        taskList.appendChild(li)
        input.value=""
        saveTasks()
    }
})
loadTasks()

const lightbox = document.getElementById("lightbox")
const fullImg = document.getElementById("fullImg")

document.querySelectorAll(".thumb").forEach(img=>{
    img.addEventListener("click",()=>{
        fullImg.src = img.dataset.full;
        lightbox.style.display = 'block'
    });
});

lightbox.addEventListener("click",()=>lightbox.style.display="none")