// * ARRAYS PROBLEM SOVLING QUESTIONS

// ? (1) FLATTEND 2D ARRAY INTO 1D ARRAY
// function flattenArray(arr) {
//   let flattenVal = [];
//   function flatten(current) {
//     if (Array.isArray(current)) {
//       for (let item of current) {
//         flatten(item);
//       }
//     } else {
//       flattenVal.push(current);
//     }
//   }
//   flatten(arr);
//   return flattenVal;
// }
// let arr = [1, 2, 4, [5, 6, 7], 8, [9, 10, 11]];
// console.log(flattenArray(arr));

// ? (2) Find the largest number in an array.
// function checkLargestNum() {
//   let arr = [1, 2, 5, 6, 36, 27, 2037, 2783];
//   let largestNum;
//   for (let i = 0; i < arr.length; i++) {
//     largestNum = Math.max(arr[i]);
//   }
//   return largestNum;
// }
// console.log(checkLargestNum());

// ? (3) Join all elements of an array into a single string.
// function joinArrInStr() {
//   let arr = ["hello worl", "how are you"];
//   return arr.join("");
// }
// console.log(joinArrInStr());

// ? (4) Merge two arrays into one.
// function mergeArr() {
//   let arr1 = [1, 2, 3, 4, 5, 6];
//   let arr2 = [7, 8, 9, 10];
//   return [...arr1, ...arr2];
//   return arr1.concat(arr2);
// }

// console.log(mergeArr());
// ? (5) Find the sum of all numbers in an array.
// function sumAllNum() {
//   let arr = [1, 2, 3, 4, 5, 2, 8, 5];
//   let result = 0;
//   for (let i = 0; i < arr.length; i++) {
//     result += arr[i];
//   }
//   return result;
// }

// console.log(sumAllNum());

// ? (6) Find the difference between the largest and smallest numbers in an array.

// function findDeference() {
//   let arr = [1, 2, 3, 4, 5, 2, 8, 5, 12];

//   let max = arr[0];
//   let min = arr[0];

//   for (const num of arr) {
//     if (num > max) max = num;
//     if (num < min) min = num;
//   }
//   return max - min;
// }

// console.log(findDeference());
// ? (8) Replace all occurrences of a value in an array.

// function replaceAccurance(arr, targetValu, newVal) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === targetValu) {
//       arr[i] = newVal;
//     }
//   }
//   return arr;
// }

// let array = [1, 2, 3, 4, 5, 6, 7, 2, 2, 4, 2];

// console.log(replaceAccurance(array, 2, 8));
