// // parentNode → Get parent element.

// // children → Returns only element nodes (ignores text).

// // firstElementChild → First child element.

// // lastElementChild → Last child element.

// const ul = document.querySelector("#fruits");

// // Get parent of <ul>
// console.log(ul.parentNode); // <div id="container">

// // Get children (all <li> elements)
// console.log(ul.children); // HTMLCollection [li, li, li]

// // First child
// console.log(ul.firstElementChild.textContent); // Apple

// // Last child
// console.log(ul.lastElementChild.textContent); // Orange


// // nextElementSibling → Get next sibling element.

// // previousElementSibling → Get previous sibling element.

// const banana = ul.children[1]; // <li>Banana</li>

// console.log(banana.previousElementSibling.textContent); // Apple
// console.log(banana.nextElementSibling.textContent);     // Orange


// // childNodes → Returns all nodes (elements + text + comments).
// // (⚠ includes whitespace as #text).

// console.log(ul.childNodes);  
// // NodeList(7) [text, li, text, li, text, li, text]


const title = document.querySelector("#title")
title.innerText = "Hello DOM Master!"
console.log(title.innerText)
console.log(title.textContent)

title.innerHTML = "<span style = 'color:blue'>Blue Title</span>"


const link = document.querySelector("#link")
link.setAttribute("href","https://google.com")
console.log(link.getAttribute("href"))
link.removeAttribute("href")

// const desc = document.querySelector("#desc")
// desc.classList.add("highlight")
// desc.classList.remove("highlight")
// desc.classList.toggle("hightlight")
// console.log(desc)
// desc.style.color = "red"
// desc.style.fontSize = "20px"

const p = document.getElementById("desc")
p.classList.add("highlight")
console.log(p)