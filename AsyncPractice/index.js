// let count = 0;
// let timer = setInterval(()=>{
//     console.log("Repeating:", count);
//     count++;
//     if(count>5){
//         clearInterval(timer)  // stops repeating
//     }
// }, 1000);


//Example – Simple Callback

// function greet(name,callback){
//     console.log("Hello, " + name);
//     callback()  //calling the callback function
// }
// function sayBye(){
//     console.log("GoodBye!")
// }

// greet("Avanish", sayBye)

//Example – Callback Hell (Real-life Asynchronous Example)

// Suppose we need to perform tasks in sequence: 
// 1. Get user
// 2. Get user orders
// 3. Get order details

// getUser(1, function(user){
//     console.log("User:", user)
//     getOrders(user.id, function(orders){
//         console.log("Orders:", orders)
//         getOrderDetails(orders[0], function(details){
//             console.log("Order Details:", details);
//               // More nested callbacks...
//         })
//     })
// })

//Dummy async functions

// function getUser(id, callback){
//     setTimeout(()=> callback({ id: id, name:"Avanish"}), 1000)
// }

// function getOrders(userId, callback){
//     setTimeout(()=>callback(["order1", "order2"]), 1000)
// }

// function getOrderDetails(orderId, callback){
//     setTimeout(()=>callback({ id: orderId, item: "Laptop" }),1000)
// }

//2. Using Promises- Promises flatten the nesting and make code more readable.

//Async functions returning Promises

// function getUser(id){
//     return new Promise((resolve)=>{
//         setTimeout(()=>resolve({id: id, name: "Avanish"}),1000)
//     })
// }

// function getOrders(userId){
//     return new Promise((resolve)=>{
//         setTimeout(()=>resolve(["order1","order2"]), 1000)
//     })
// }

// function getOrderDetails(orderId){
//     return new Promise((resolve)=>{
//         setTimeout(()=>resolve({id: orderId, item: "Laptop"}), 1000)
//     });
// }

//chaining with .then

// getUser(1)
//  .then(user=>{
//     console.log("User:", user)
//     return getOrders(user.id);
//  })
//  .then(orders=>{
//     console.log("Orders:", orders);
//     return getOrderDetails(orders[0])
//  })
//  .then(details=>{
//     console.log("Order Details:", details)
//  })
//  .catch(error=>console.log("Error:", error));

//3. Using async/await (Modern Way)

//Looks like synchronous code, but still asynchronous.

// async function fetchUserData(){
//     try {
//         const user = await getUser(1);
//         console.log("User:", user);

//         const orders = await getOrders(user.id);
//         console.log("Orders:", orders)

//         const details = await getOrderDetails(orders[0]);
//         console.log("Order Details:", details)
//     } catch(error){
//         console.log("Error:", error);
//     }
// }
// fetchUserData()

// Clean, readable, and easy to maintain.


//Creating a Promise

// const myPromise = new Promise((resolve,reject)=>{
//     let success = true;
//     if(success){
//         resolve("Operation Successfully!")
//     } else{
//         reject('Operation failed!')
//     }
// })
//console.log(myPromise)

//🔹 Consuming a Promise
//We handle results with .then(), .catch(), and .finally().
// myPromise
//   .then(result => {
//     console.log(result); // runs if resolved
//   })
//   .catch(error => {
//     console.log(error); // runs if rejected
//   })
//   .finally(() => {
//     console.log("Promise finished (success or fail).");
//   });


  //🔹 Example: Async with Promise

//   function fetchData(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             let success = true
//             if(success){
//                 resolve("Data Recieved")
//             } else{
//                 reject("Data Rejected!")
//             }
//         }, 2000)
//     });
//   }

  // Consume it

//   fetchData()
//   .then(data=>console.log(data))
//   .catch(err=>console.log(err))

  //🔹 Chaining Promises

//We can chain .then() to avoid nesting (unlike callbacks).

// getUser(1)
//   .then(user=>{
//     console.log("User:", user)
//     return getOrders(user.id)
//   })
//   .then(orders=>{
//       console.log("Orders:", orders)
//       return getOrderDetails(orders[0])
//   })
//   .then(details=>{
//     console.log("Details:", details)
    
//   })
//  .catch(error => console.log("Error:", error));


// Async/Await

// Async/Await Promises को synchronous-जैसा readable तरीके से handle करने देता है।

// async function declare करता है कि function asynchronous है और यह हमेशा Promise return करेगा।

// await का use करके हम किसी Promise के result का wait कर सकते हैं बिना callback chain के।


// async → function को asynchronous बनाता है।

// await → Promise complete होने तक wait करता है।

// Async/Await code को clean, readable और manageable बनाता है।

// async function getData() → बताता है कि function asynchronous है।

// await fetch(...) → JS को बताता है कि fetch complete होने तक wait करो।

// try/catch → error handling, जैसे synchronous code में।

// async function getData() {
//     try {
//         const result = await fetch("https://jsonplaceholder.typicode.com/users");
//         const data = await result.json()
//         console.log(data)
//     } catch (error) {
//         console.log("Error:",error)
//     }
// }
// getData()

//Example: GET Request

//Common HTTP Request Methods

// GET → Retrieve data from server.

// POST → Send new data to server.

// PUT/PATCH → Update existing data.

// DELETE → Remove data.

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then(response => response.json())   // Convert response to JSON
//   .then(data => console.log(data))     // Use the data
//   .catch(error => console.log(error));


  //This fetches data from the server (like an API).

  //exmaple of post request
  fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    title: "Hello",
    body: "This is a test post",
    userId: 1
  })
})
  .then(response => response.json())
  .then(data => console.log("Created:", data))
  .catch(error => console.log("Error:", error));
