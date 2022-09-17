"use strict";

// LOOP
// const array = ["one", "two", "three", "four"];

// for (let i = 0; i <= array.length - 1; i++) {
//   console.log(array[i]);
// }

// for of loop

// for (let number of array) {
//   console.log(number);
// }

// const object = {
//   x: 1,
//   y: 2,
// };

// for in
// for (let key in object) {
//   console.log(object[key]);
// }

// forEach map filter

// forEach

// array.forEach((element) => {
//   console.log(element);
// });

// map

// const newArray = array.map((number) => {
//   if (number === "two") {
//     return 2;
//   }
//   return number;
// });

// console.log(newArray);

// filter
// const filteredArray = array.filter(function (number) {
//   if (number === "three") {
//     return false;
//   } else {
//     return true;
//   }
// });

// const filteredArray = array.filter((number) => number !== "three");

// console.log(filteredArray);

// printArray
// 2D array [[1, 2], [3, 4], [5, 6]]
// 1 2 3 4 5 6

// 10 minut - 9 : 48

// function printArray(array) {
//   for (let i = 0; i <= array.length - 1; i++) {
//     for (let j = 0; j <= array[i].length - 1; j++) {
//       console.log(array[i][j]);
//     }
//   }
// }

// printArray([
//   [1, 2],
//   [3, 4],
//   [5, 6],
// ]); // 1 2 3 4 5 6

// [12, 23, 78, 76, 79]

// function printEvenNumbers(array) {
//   for (let i = 0; i < array.length - 1; i++) {
//     if (array[i] % 2 === 0) {
//       console.log(array[i]);
//     }
//   }
// }

// printEvenNumbers([12, 23, 78, 76, 79]);

/*
 
*/

// function deleteAllOcc(array, element) {
//   //   for (let i = 0; i <= array.length - 1; i++) {
//   //     if (array[i] == element) {
//   //       array.splice(i, 1);
//   //     }
//   //   }
//   return array.filter((el) => el != element);
// }

// const array = [1, 2, 3, 4, 5, 6, 7, 6, 8, 6, 9, 6];

// console.log(deleteAllOcc(array, 6));

// console.log(array);

// function calcPow(number, pow) {
//   let result = 4;

//   for (let i = 1; i <= pow - 1; i++) {
//     result *= number;
//   }

//   return result;
// }
// 2 ^ 3 = 2 * 2 * 2

// 4 ^ 5
/*

1. 4 * 4 = 16
2. 16 * 4 = 64
3. 64 * 4 = 256
4. 256 * 4 = 1024

*/

// console.log(calcPow(4, 5));

/* 1 
   1 2 
   1 2 3 
   1 2 3 4 
   1 2 3 4 5 
   1 2 3 4 5 6 
   1 2 3 4 5 6 7 
   1 2 3 4 5 6 7 8 */

// function pattern(number) {
//   for (let i = 1; i <= number; i++) {
//     let string = ``;
//     for (let j = 1; j <= i; j++) {
//       string += `${j} `;
//     }
//     console.log(string);
//   }
// }

// 1-9

// 7878789

// pattern(8);

// function coundDigits(number) {
//   return String(number).length;
// }

// console.log(coundDigits(1));

// 1234567 => 1+2+3+4+5+6+7

// function sumDigits(number) {
//   const string = String(number);

//   let result = 0;

//   for (let i = 0; i <= string.length - 1; i++) {
//     result += Number(string[i]);
//   }

//   return result;
// }

// console.log(sumDigits(1234567)); // 28

/*

2 4 6 8 10 12 14

a1 - birinchi qiymat = 2
an - oxirgi qiymat = 14

d - farq = 2

S = ((a1 + an) / 2) * d

*/
