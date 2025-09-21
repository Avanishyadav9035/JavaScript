const title = document.getElementById("title")
console.log(title.textContent)

const desc = document.querySelector(".desc")
desc.style.color = "red"
desc.style.backgroundColor = "black";


// innerText → Human-readable (ignores hidden).

// textContent → All text (even hidden).

// innerHTML → Includes HTML tags.

const title1 = document.querySelector("#title")
title1.innerText = "DOM Mastry Yes"
title.innerHTML = "<em>Dom mastry</em>" 


// getAttribute("name") → Get attribute.

// setAttribute("name", "value") → Set new attribute.

// removeAttribute("name") → Remove.

const link = document.createElement('a')
link.setAttribute("href","https:google.com")
link.innerText = "Go to Google"
document.body.appendChild(link)
console.log(link.getAttribute("href"))

// element.style.property → Inline style.

// element.classList.add/remove/toggle → Better for CSS classes.

// const desc = document.querySelector(".desc")

// desc.style.fontSize = "20px"

const heading = document.getElementById("heading")
heading.innerText = "Learning DOM Basics"

const ul = document.createElement("ul")
const li = document.createElement("li")

li.textContent =  "Mango";
ul.appendChild(li)
ul.setAttribute("title","fruit list")


const paragraph = document.createElement("p");
    paragraph.innerText = "Whenever";
    paragraph.setAttribute("class", "hello");
    
    paragraph.addEventListener("click", () => {
      paragraph.classList.toggle("highlight");
    });

    console.log(paragraph)
    document.body.appendChild(paragraph);
document.body.appendChild(ul)