// "use strict";

// // Number to String

// const year = 2022;
// // console.log(year)
// // console.log(String(year)) // String(year)

// // console.log(year.toString())

// // console.log(`${year}`)

// // String to Number

// const age = '20';
// // console.log(age)
// // console.log(Number(age))
// // console.log(age - 0)

// 0 == '' // true
// null == undefined // true
// NaN == NaN // false NaN nima bilan solishtirilgandan qati nazar false qaytaradi

// Infinity

// 22 == 22 // true
// 22 == '22' // true

// // ===

// Falsy === Falsy // true
// Truthy === Truthy // true
// // false

// console.log(yigindiniHisobla(1, 2))

// function yigindiniHisobla(son1, son2) {
//     return son1 + son2
// }

// hoisting

// Function expression

// arrow function
// const sayHello = name => console.log(`Hello, ${name}`)
// sayHello("Asadbek")

// const square = number => number ** 2
// console.log(square(6))

// const nimadir = () => console.log('dasdas')

/*

    'toq' 'juft'

*/

// function declaration
// function isOddOrEven(number) {
//     if(number % 2 === 0) {
//         return 'juft'
//     } else {
//         return 'toq'
//     }
// }

// function expression
// const isOddOrEven = function () {
//   if (number % 2 === 0) {
//     return "juft";
//   } else {
//     return "toq";
//   }
// };

// arrow
// const isOddOrEven = (number) => {
//   if (number % 2 === 0) {
//     return "juft";
//   } else {
//     return "toq";
//   }
// };

// Ternarry = (shart) ? console.log(true) : console.log(false)

// 1 > 0 ? console.log(true) : console.log(false);

// const a = 1 > 0 ? "katta" : "kichik";

// const isOddOrEven = number => number % 2 === 0 ? "juft" : "toq";

// const ikkiSondanKattasi = (son1, son2) => son1 > son2 ? son1 : son2

// function nimadir(son1, son2) {
//     return son1 > son2 ? son1 : son2
// }

const budgetUzs = Number(prompt("Qancha pulingiz bor?"));

const UsdToUzs = 10000;
const EurToUzs = 12000;

const mealUsd = 10;
const ticketEur = 40;

const mealUzs = mealUsd * UsdToUzs;
const ticketUzs = ticketEur * EurToUzs;

if(budgetUzs >= (mealUzs + ticketUzs)) {
    alert("Oq yo'l")
} else {
    alert("Hali kutarkansiz :(")
}