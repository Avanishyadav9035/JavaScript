    //(1)  Synchronous vs Asynchronous
    // JavaScript is single threated (one task at a time)
    // But with async features(callback, promises, async/wait).Js can handle task without blocking 


    // console.log("start")
    // setTimeout(() => {
    //     console.log("Async Task Finished");
    // }, 2000);

    // console.log("End")

    //(2)Callback-A function passed as an argument to another function excuted later

//     function fetchData(callback){
//         console.log("Fetching data...")
//         setTimeout(() => {
//               callback("Data received!");
//         }, 2000);
//     }

//     fetchData((result) => {
//   console.log(result);
// });

// function greetUser(name, callback){
//     console.log("Hello " + name);
//     callback()
// }

// function sayBye(){
//     console.log("GoodBye!")
// }
// greetUser("Avanish",sayBye)

//Here, sayBye is a callback function, because it’s passed to greetUser and executed later.

// console.log("Start")
// setTimeout(()=>{
//     console.log("This runs after 2 seconds")
// }, 2000)
// console.log("End")

//The arrow function inside settimout is a callback, excuted after a delay


//Promises:Represents a value that will be awailable in the future
//States:(1) Pending
// (2) Fulfilled(resolved)
//(3) Rejected

// const fetchData = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Data loaded!")
//     });
// });

// fetchData
// .then(result=>console.log(result))
// .catch(error=>console.log(error))
// .finally(()=>console.log("Done!"))


// Promise Methods

// Promise.all([p1, p2]) → Wait for all

// Promise.race([p1, p2]) → First to finish

// Promise.allSettled([p1, p2]) → Get results of all

// Promise.any([p1, p2]) → First success
// const p2 = new Promise(res=>setTimeout(()=>res("Second"),2000))
// const p1 = new Promise(res=>setTimeout(()=>res("First"),1000))


// Promise.all([p1,p2]).then(results=>console.log(results))
// Promise.race([p1,p2]).then(results=>console.log(results))
// Promise.allSettled([p1,p2]).then(results=>console.log(results))
// Promise.any([p1,p2]).then(results=>console.log(results))


//Async / Await
// Syntactic sugar over Promises.
// Looks synchronous, works asynchronously.

// async function fetchUser() {
//     try {
//         console.log("Fetching user...")
//         let result = await new Promise(res=>setTimeout(()=>res("User data")),2000)
//         console.log(result)
//     } catch(error){
//        console.log(error)
//     }
// }

// fetchUser()

// Fetch API (Real Example)  Used to call APIs.

// async function getData(){
//      try {
//          let result = await fetch("https://jsonplaceholder.typicode.com/users")
//          let data  = await result.json()
//          console.log(data)

//          // ek user ke liye example
//       //const user = data[0]; // pehla user
//      data.forEach(user=>{
//           const div = document.createElement("div")
//           const h1 = document.createElement("h1")
//           const h2 = document.createElement("h2")
//           h1.innerText = user.name
//           h2.innerText = user.email
//           div.append(h1, h2);
//           document.body.appendChild(div);
//        })
//      } catch(error){
//         console.log(error)
//      }
// }
// getData()


// Event Loop (Core Concept)

//  Explains how async tasks are handled in JS.

// Order of execution:

// Call Stack

// Web APIs

// Callback Queue (setTimeout, DOM events)

// Microtask Queue (Promises, async/await)

// Event Loop moves tasks to stack.


console.log("Start")
setTimeout(()=>console.log("Timeout"),0);
Promise.resolve().then(()=>console.log("Promise"));

console.log("End")