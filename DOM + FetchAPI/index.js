const btn = document.getElementById("loadBtn")
const list = document.getElementById("userList")

btn.addEventListener("click",async ()=>{
   const res = await fetch("https://jsonplaceholder.typicode.com/users")
   const users = await res.json()
   list.innerHTML = "" // clear old data

   users.forEach(user=>{
     const li = document.createElement("li")
     li.textContent = `${user.name} (${user.email})`;
     list.appendChild(li)
   })
  ()
})