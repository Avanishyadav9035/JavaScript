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

// Async functions returning Promises

function getUser(id){
    return new Promise((resolve)=>{
        setTimeout(()=>resolve({id: id, name: "Avanish"}),1000)
    })
}

function getOrders(userId){
    return new Promise((resolve)=>{
        setTimeout(()=>resolve(["order1","order2"]), 1000)
    })
}

function getOrderDetails(orderId){
    return new Promise((resolve)=>{
        setTimeout(()=>resolve({id: orderId, item: "Laptop"}), 1000)
    });
}

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

async function fetchUserData(){
    try {
        const user = await getUser(1);
        console.log("User:", user);

        const orders = await getOrders(user.id);
        console.log("Orders:", orders)

        const details = await getOrderDetails(orders[0]);
        console.log("Order Details:", details)
    } catch(error){
        console.log("Error:", error);
    }
}
fetchUserData()

// Clean, readable, and easy to maintain.