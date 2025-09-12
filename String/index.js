// let msg = "           Hello            "
// console.log(msg.trim())
// console.log(msg.trimStart())
// console.log(msg.trimEnd())

// let str = "iugdf;ius;oaiuwehrgf;iwuh;iuwhrfg;iafgliaghwrfg;difjbsd;fbu"
// console.log(str.length)

// let str = "Hitesh"
// console.log(str.charAt(0))
// console.log(str[5])

//  let str = "heloo ji"

// console.log(str.slice(0))
// console.log(str.slice(0,1))
// console.log(str.slice(0,8))
// console.log(str.slice(0,4))
// console.log(str.slice(5))
// console.log(str.slice(3,6))


// let str = "hello my name is lakhan"

// let nstr = str.replace("a", "z")
// let nstr1 = str.replaceAll("a", "z")
// console.log(nstr)
// console.log(nstr1)
// let ans = str.split("a")
// console.log(ans)

// let arr = [1,2,3,4]
// // let arr1 = arr.splice(0,1)
// let arr2 = arr.splice(0,1,10,20)
// console.log(arr2)
// console.log(arr)


//Ques.1 Reverse String
//1.Using Built-in Methods

// function reverseString(str){
//   return str.split("").reverse().join("")
// }
// console.log(reverseString("abcd"))

//2. Using a For Loop

// function reverseString(str){
//      let reversed = ""
//      for(let i = str.length-1;i>=0;i--){
//         reversed += str[i];
//      }
//      return reversed
// }
// console.log(reverseString("abcd"))


//3.Using Recursion

// function reverseString(str){
//     if(str == "") return ""
//     return reverseString(str.substr(1)) + str[0]
// }
// console.log(reverseString("hello"))

//4.Using Two-Pointer Technique (In-place)

// function reverseString(str){
//     let arr = str.split("")
//     let left = 0,  right = str.length -1
//     while(left<right){
//         [arr[left], arr[right]] = [arr[right], arr[left]]
//         left++
//         right--
//     }
//     return arr.join("")
// }
// console.log(reverseString("abcd"))

//Ques.2 Check Palindrome

//1.Using Two-Pointer Technique

// function checkPalindrome(str){
//     let left = 0
//     let right = str.length-1
//     while(left<right){
//         if(str[left]!==str[right]){
//             return false
//         }
//         left++
//         right--
//     }
//     return true
// }

//console.log(checkPalindrome("hello")); // false
//console.log(checkPalindrome("madam")); // true

//Efficient: O(n) time, O(1) space.

//2.Using reverse String
// function isPalindrome(str){
//     return str === str.split("").reverse().join("")
// }
// console.log(isPalindrome("racecar")); // true
// console.log(isPalindrome("hello")); // false


// let str = "JavaScript";

// console.log(str[0]);              // ?
// console.log(str.charAt(5));       // ?
// console.log(str.slice(-6, -1));   // ?
// console.log(str.substring(4, 1)); // ?
// console.log(str.includes("Script")); // ?
// console.log("abc" + 1 + 2);       // ?
// console.log(1 + 2 + "abc");       // ?


// let str = "JavaScript";

// console.log(str.slice(4, 10));     // ?
// console.log(str.substring(4, 10)); // ?
// console.log(str.substr(4, 6));     // ?


// let str = "Hello World";

// console.log(str.slice(-5));       // ?
// console.log(str.substring(-5));   // ?


// console.log("5" + 2 + 3); 
// console.log(5 + 2 + "3");


// let str = "OpenAI";
// let rev = str.split("").reduce((acc, ch) => ch + acc, "");
// console.log(rev);


//Ques.(3) “Find Duplicate Characters in a String”
//1. Using Hash Map (Most Common Approach)

// function findDuplicate(str){
//     let freq = {}
//     let duplicates= {}

//     for(let char of str){
//         freq[char] =(freq[char] || 0) + 1;
//     }

//     for(let char in freq){
//         if(freq[char]>1){
//             duplicates[char] = freq[char]
//         }
//     }
//     return duplicates
// }
// console.log(findDuplicate('programming'))

// Time Complexity: O(n)
// Space Complexity: O(k) (k = unique characters)


//2.Using set

// function findDuplicate(str){
//     let seen = new Set();
//     let duplicates = new Set()

//     for(let char of str){
//         if(seen.has(char)){
//             duplicates.add(char)
//         } else {
//             seen.add(char)
//         }
//     }
//     return [...duplicates];
// }
// console.log(findDuplicate("programming"))

// Returns just the duplicate characters.

//3.3. Without Extra Space (Naive Approach)

// function findDuplicate(str){
//     let duplicates = []
//     for(let i = 0;i<str.length;i++){
//         for(let j = i+1;j<str.length;j++){
//             if(str[i] === str[j] && !duplicates.includes(str[i])){
//                 duplicates.push(str[i])
//             }
//         }
//     }
//     return duplicates;
// }
// console.log(findDuplicate("programming"))

//Ques.4-Anagrams-Two strings are anagrams if they contain the same characters in the same frequency, but order can be different.

//1. Using Sorting

// function isAnagram(str1,str2){
//      if(str1.length !==str2.length) return false;

//      return str1.split("").sort().join("") === str2.split("").sort().join("");
// }
// console.log(isAnagram("listen", "silent")); // true
// console.log(isAnagram("hello", "world"));   // false

// Time Complexity: O(n log n) (because of sorting).

//2. Using Hash Map (Optimized O(n))

function isAnagram(str1, str2){
    if(str1.length !==str2.length) return false
    let freq = {}

     for(let char of str1){
        freq[char] = (freq[char] || 0) + 1
     }    

     for(let char of str2){
        if(!freq[char]) return false;
        freq[char]--
     }
     return true
}

console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("triangle", "integral")); // true
console.log(isAnagram("hello", "world"));   // false

// Time Complexity: O(n)
// Space Complexity: O(k) (k = unique characters)