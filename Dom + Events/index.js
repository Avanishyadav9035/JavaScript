const app = document.getElementById("app")
const pages = {
      home: "<h1>🏠 Home Page</h1><p>Welcome!</p>",
    about: "<h1>ℹ️ About Page</h1><p>We are learning DOM mastery!</p>",
    contact: "<h1>📞 Contact Page</h1><p>Email: test@example.com</p>"
};

function render(page){
      app.innerHTML = pages[page]
}

document.querySelector("nav").addEventListener("click",(e)=>{
    if(e.target.dataset.page){
        render(e.target.dataset.page)
    }
})

// Load default
render("home")