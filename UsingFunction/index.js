//(1) write a function that takes a string and return the count of vowels (a,e,i,o,u) .The count should be case-insensitive.

function countVowels(str){
    // Convert to lowercase for case-insensitive check
    const lowerStr = str.toLowerCase();
    const vowels = ['a','e','i','o','u'];
    let count = 0;

    for(let char of lowerStr){
        if(vowels.includes(char)){
            count++
        }
    }
    return count;
}
console.log(countVowels("Programming")); // 3
console.log(countVowels("HELLO World")); // 3

//(2)write a function that takes an array of integers and return a new array with all duplicate

// function removeDuplicates(arr){
    // Set automatically stores only unique values
  //  return [...new Set(arr)];
// }
// console.log(removeDuplicates([1, 2, 2, 3, 3, 4, 4, 4, 5]));

// 🔹 Without using Set (manual way)

function removeDuplicates(arr){
    let uniqueArr = []
    for(let num of arr){
        if(!uniqueArr.includes(num)){
            uniqueArr.push(num)
        }
    }
    return uniqueArr
}
console.log(removeDuplicates([1, 2, 2, 3, 3, 4, 4, 4, 5]))

// Solution 1: Using Math.max() with spread operator

// function findMax(arr){
//     return Math.max(...arr)
// }
// console.log(findMax([3, 8, 1, 5, 12])); // 12

// Solution 2: Using a loop

// function findMax(arr){
//     let max = arr[0]
//     for(let num of arr){
//         if(num>max){
//             max = num
//         }
//     }
//     return max
// }
// console.log(findMax([3, 8, 1, 5, 12])); // 12

// Solution 3: Using reduce()

function findMax(arr) {
  return arr.reduce((max, num) => num > max ? num : max, arr[0]);
}

// Example
console.log(findMax([3, 8, 1, 5, 12])); // 12
