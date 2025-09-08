//  let age = Number(prompt("Enter your age"))
 //  let age = 14
// if(age >= 1 && age <= 12)
// {
//     console.log("Kid")
// }
// else if(age >= 13 && age <= 19)
// {
//     console.log("Teenager")
// }
// else if(age >= 20 && age <= 64)
// {
//     console.log("Adult")
// }
// else if(age >= 64)
// {
//     console.log("Senior Citizen")
// }
// else
// {
//     console.log("Senior Citizen")
// }


// let num = 21

// if(num<0){
//     console.log("-ve")
// }
// else if(num==0){
//     console.log("zero")
// } else{
//     console.log("+ve")
// }


let n1 = 23;
// let n2 = 23
// let n3 = 23

// if(n1 >= n2 && n1 >= n3)
// {
//     console.log(n1)
// }
// else if(n2 >= n1 && n2 >= n3)
// {
//     console.log(n2)
// }
// else{
//     console.log(n3)
// }
// if(n1 > n2 && n1 > n3)
// {
//     console.log(n1)
// }
// else if(n2 > n1 && n2 > n3)
// {
//     console.log(n2)
// }
// // else
// else if(n3 > n1 && n3 > n2)
// {
//     console.log(n3)
// }

// let password = prompt("Enter password")


// if(password == "avanishyadav")
// {
//     console.log("Permission Granted")
// }
// else{
//     console.log("Access Denied")
// }

// let a = 60
// let b = 80
// let c = 60



// if(a + b + c == 180)
// {
//     console.log("Is a triangle")
// }
// else
// {
//     console.log("Not a triangle")
// }

// let n = 5
// for(let i = 1;i<=n;i++){
//     let ans = ''
//     for(let star = 1;star<=n;star++){
//         ans += "* "
//     }
//     console.log(ans)
// }


//using while loop
// let i = 1
// while(i<=n){
//     let ans = ""
//     let j = 1
//     while(j<=n){
//         ans +="* "
//         j++
//     }
//     console.log(ans)
//     i++
// }

//star triangle

//let n = 5;

// for(let row = 1;row<=n;row++){
//     let ans = ""
//     for(let star = 1;star<=row;star++){
//         ans += "* "
//     }
//     console.log(ans)
// }

//using while loop
// let row = 1;
// while(row<=n){
//     let ans = ""
//     let star = 1
//     while(star<=row){
//         ans +="* "
//         star++
//     }
//     console.log(ans)
//     row++
// }

//number pattern

// Repeated Number Pyramid

// Right-Angled Number Triangle (with same numbers per row)

//   let n = 5
// for(let i = 1;i<=n;i++){
//     let ans = ''
//     for(let j = 1;j<=i;j++){
//         ans += i +" "
//     }
//     console.log(ans)
// }

// Number Rectangle Pattern

// for(let i = 1;i<=n;i++){
//     let ans = ""
//     for(let j = 1;j<=n;j++){
//         ans +=j + " "
//     }
//     console.log(ans)
// }

// Right-Angled Number Triangle)
// for(let i = 1;i<=n;i++){
//     let ans = ""
//     for(let j = 1;j<=i;j++){
//         ans +=j + " "
//     }
//     console.log(ans)
// }

//Inverted Pyramid Pattern (or Inverted Triangle Pattern)

// let n = 5
// for(let row = 1;row<=n;row++){
//     let ans =""
//     for(let star = 1;star<=n-row+1;star++){
//         ans +="* "
//     }
//     console.log(ans)
// }
 
//   Pyramid Pattern / Right Pyramid/Centered Pyramid Pattern/Equilateral Triangle Star Pattern

// let n = 5
// let sc = 1
// for(let row = 1;row<=n;row++){
//     let ans = ""
//     let spc = 1
//     while(spc<=n-row){
//         ans +=" "
//         spc++
//     }
//     let str = 1
//     while(str<=sc){
//         ans +="*"
//         str++
//     }
//     sc+=2
//     console.log(ans)
// }

// let n = 5
// for(let r = 1;r<=n;r++){
//     let ans =""
//     let sp = 1
//     while(sp<=n-r){
//         ans +=" "
//         sp++
//     }
//     let st= 1
//     while(st<=2 * r - 1){
//         ans +="*"
//         st++
//     }
//     console.log(ans)
// }

//Diamond Pattern (Half Diamond / Rhombus variation)

let n = 5
let spc = Math.floor(n / 2) 
let stc = 1

for(let r = 1; r <= n; r++)
{
    let ans = ""
    let sp = 1
    while(sp <= spc)
    {
        ans += "  "
        sp++
    }
    let st = 1
    while(st <= stc)
    {
        ans += "* "
        st++
    }
    console.log(ans)
    if(r >= Math.floor(n/2) + 1)
    {
        spc++
        stc -= 2
    }
    else
    {
        spc--
        stc+=2
    }
}