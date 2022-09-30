// TwoSum

// function twoSum(nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = nums.length - 1; j > i; j--) {
//       const sum = nums[i] + nums[j];
//       if (sum !== target) {
//         continue;
//       }
//       return [i, j];
//     }
//   }
// }

// function twoSum(nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     const el = target - nums[i];
//     const index = nums.findIndex((element) => element === el);
//     if (index > -1) {
//       return [i, index];
//     }
//   }
// }

// console.log(twoSum([2, 7, 11, 15], 9));

// var isPalindrome = function (x) {
//   if (x < 0) {
//     return false;
//   }

//   return x == x.toString().split("").reverse().join("");
// };

// const isPalindrome = (x) =>
//   x < 0 ? false : x == x.toString().split("").reverse().join("");

// console.log(isPalindrome(-121));

// const romanToInt = (s) => {
//   const dict = {
//     I: 1,
//     V: 5,
//     X: 10,
//     L: 50,
//     C: 100,
//     D: 500,
//     M: 1000,
//     IV: 4,
//     IX: 9,
//     XL: 40,
//     XC: 90,
//     CD: 400,
//     CM: 900,
//   };

//   DM = 500;
//   let number = 0;

//   for (let i = 0; i < s.length; i++) {
//     if (dict[`${s[i - 1]}${s[i]}`]) {
//       continue;
//     }

//     if (dict[`${s[i]}${s[i + 1]}`]) {
//       number += dict[`${s[i]}${s[i + 1]}`];
//     } else {
//       number += dict[`${s[i]}`];
//     }
//   }

//   return number;
// };

// romanToInt("CMXCIV");

var removeElement = function (nums, val) {
  const arr = nums.filter((num) => num !== val);
  const deletedCount = nums.length - arr.length;

  return deletedCount;
};

console.log(removeElement([3, 2, 2, 3], 3));
