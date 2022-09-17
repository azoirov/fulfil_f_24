"use strict";

// DataTypes - Ma'lumot turlari

/*

- Primitive
    - Number 6 6.5 -> Raqam
    - String '' "" `` -> Matn
    - Boolean true (rost) false (yolg'on) -> Mantiqiy ma'lumot turi
    - Undefined -> hali aniqlanmagan 
    - Null -> bo'sh qiymat

    + Symbol
    + BigInt 

- Object (Reference)
    + Object
    + Array
    + Function
*/

// Variables O'zgaruvchila

// var
// var ism = "Asadbek";

// // let va const
// let name = "Asadbek";
// const familya = "Zoirov"; // constant - o'zgarmas

// name = "Asad";

// firstName = "KIMDIR";
// console.log(firstName);

// const $name = ""
// const first name = ""
// const 4name = ""
// const name4 = ""

// string
// const firstName = "Asadbek";
// console.log(firstName);

// // number
// const raqam = 4;
// const raqam2 = 6.522545454;

// console.log(raqam, raqam2);

// // boolean
// const isOlderThan18 = true;
// const flag = false;
// console.log(isOlderThan18, flag);

// // undefined;
// let undefinedVariable;
// const nimadir = undefined;

// // null
// const nullVariable = null;

// cases

// snake_case - first_name
// camelCase - firstName oldPhoneNumber
// PascalCase - FirstName

// String;

// const string = "G\"oz";
// const string2 = 'G\'oz';
// console.log(string)
// console.log(string2)

// template literals
// backtick ``

// const firstName = "Asadbek"
// const templateString = `Hello, ${firstName}`
// console.log(templateString);

// Operators
/*
    - Arifmetic operators
        + - * / % ** ++ --
    - Comparison operators
        === == != !== >= <= > <
    - Assignment operators
        = += -= 
*/

// alert("Salom") 
// const ism = prompt("Ismingiz nima?");
// const yosh = prompt("Yoshingiz nechada?");

// alert(`Salom, ${ism}! Saytimizga xush kelibsiz! Sizning yoshingiz ${yosh} da`)

/*

Agar (shart) ....
Yoki ****

*/

// const age = prompt("Yoshingiz nechada?")

// if(age < 18) {
//     alert("Sizga saytga kirish mumkin emas")
// } else {
//     alert("Kiravering")
// }

// const mark = prompt("Matematikadan necha ball oldingiz") // 0-100

// /*
// 0-55 => 2
// 56-70 => 3
// 71-85 => 4
// 86-100 => 5
// */

// if(mark >= 0 && mark <=55) {
//      alert("Siz fanni topshira olmadingiz :(")
// } else if(mark >= 56 && mark <= 70) {
//     alert("Siz 3 baho oldingiz! Hech bo'lmasa yiqilmadingiz :))")
// } else if(mark >= 71 && mark <= 85) {
//     alert("Siz 4 baho oldingiz! Yaxshi :))")
// } else if(mark >= 86 && mark < 100) {
//     alert("Siz 5 baho oldingiz! Zo'r :))")
// } else if(mark == 100) {
//     alert("Mumkinmas :))))")
// } 

// const ticketPriceUsd = 40
// const mealPriceEuro = 10

// const usdToUzs = 10000
// const euroToUzs = 12000


/*

dollor = 10000
yevro = 12000

Saytga kirgandan keyin qancha puli borligini soraydi (so'mda); 1000000so'm
- 40$ bilet
- 10yevro ovqatlanish uchun

oq yo'l
hali pul yig'ish kerak ekan :(

*/