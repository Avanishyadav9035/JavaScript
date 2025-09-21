const ul = document.querySelector("#fruit-list")

// Create a new <li>
const newFruit =  document.createElement("li");
newFruit.textContent = 'Mango'

// Append → adds to END
ul.append(newFruit)

// Prepend → adds to START

const newFruit2 = document.createElement("li")
newFruit2.textContent = "Orange"
ul.prepend(newFruit2)

// Insert Before / After

const heading = document.querySelector("h2")

const paragraph = document.createElement("p")
paragraph.textContent = "This is a fruit list";

// Insert before <h2>
heading.before(paragraph)

// Insert after <h2>

const paragraph2 = document.createElement("p")
paragraph2.textContent = "Enjoy your fruits!"

heading.after(paragraph2)

//Remove Elements
const apple = ul.querySelector("li:nth-child(2)")
apple.remove()

//Replace Elements
const orange = ul.querySelector("li:first-child")
const newItem = document.createElement("li")
newItem.textContent  = "Grapes"
orange.replaceWith(newItem)



const item = document.createElement("li")
item.textContent = "Pineapple"

ul.append(item)

const item2 = document.createElement("li")
item2.textContent = "Kiwi"

ul.prepend(item2)


const paragraph3 = document.createElement("p")
paragraph3.textContent = "Fresh Fruits"
ul.before(paragraph3)

const paragraph4 = document.createElement("p")
paragraph4.textContent = "Seasonal Fruits"
 
ul.after(paragraph4)

const grapes = ul.querySelector("li:nth-child(2")
grapes.remove()

const kiwi = ul.querySelector("li:first-child");

const newItem1 = document.createElement("li");
newItem1.textContent = "papaya";

// Replace Apple with Grapes
kiwi.replaceWith(newItem1);

