// "use strict";

// // Array - To'plam - Massiv

// // const toy = 'samalyot';

// // const toys = ['samalyot', 'mashina'] // length - 2, index

// // console.log(toys)

// // const array2 = new Array('toy1', 'toy2')

// // console.log(array2)

// // const string = '1,2,3,4,5,6'

// // reverse number
// // function reverseNumber(number) {
// //     const numberToString = String(number);
// //     const numberArray = numberToString.split("");
// //     const reversedNumberArray = numberArray.reverse();
// //     const reversedString = reversedNumberArray.join("");

// //     return reversedString - 0
// // }

// // // arrow function;

// // const reverseInteger = number => Number(String(number).split("").reverse().join(""))

// // console.log(reverseInteger(123456789))

// const cars = ["Tesla", "BMW", "Chevrolet", "Nissan"];
// const cars2 = ["Nimadir"]
// console.log(cars)

// // cars.push('Yangi Element', "2") // array'ni oxiriga qo'shish
// // cars.unshift("Boshiga qo'shiladi", "2") // boshiga element qo'shish

// // const deletedElement = cars.pop() // oxiridan o'chirish
// // cars.shift() // boshidan o'chirib tashlaydi

// cars.concat(cars2) // concat() - concatenation
// cars.indexOf('BMW') // indexOf
// cars.find(car => car === "BMW") // find() - undefined | element
// cars.findIndex(car => car === "BMW") // find() - undefined | element
// cars.includes("BMW") // includes() - true | false
// cars.splice(1, 1, "nimadir") // splice(startIndex, deleteCount, ...items)
// cars.slice(1, 2) // slice(start, end)

// // property
// // method


// Objects
const circle = {
    // property & methods
    radius: 5,
    square: function() {
        return Math.PI * (this.radius ** 2)
    }
}

const person = {
    name: "Asadbek",
    job: "Developer",
    address: {
        country: "Uzbekistan",
        city: "Tashkent",
        street: "Street",
        home: "45 uy",
    },
    favouriteColours: ['red', 'green'],

    greeting: function() {
        console.log("Hello")
    },

    introduce: function() {
        console.log(`Hello, My name is ${this.name}. I work as ${this.job}. I live in ${this.address.country}`)
    }
}


// const isArray = element => Array.isArray(element)
// const sort = array => array.sort()

const badWord = "Javascript";

const recognizeBadWord = string => string.includes(badWord)

const findMin = (array) => {
    return Math.min(...array)
}