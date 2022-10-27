// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(arr.splice(2, 3));
// // console.log(arr.slice(2, 5));
// console.log(arr);

// console.log(arr.join(", "))

// const str = "how are you";
// console.log(str.split(" "));



// const generateRandomNumber = length => {
//     let randomNumber = Math.floor(Math.random() * length);    
//     return randomNumber;
// }

// let array = [];
// for(let i=1; i<=10; i++) {
//     array.push(generateRandomNumber(i));
// }
// console.log(array);


//Print the datatype of each element
// const array = ['Anyting', "Ajeet", 'Ritesh', 1234, "Other string", 4325];

// for loop
// for(let i=0; i<array.length; i++) {
//     console.log(typeof array[i]);
// }

// for each loop
// for(let element of array) {
//     console.log(typeof element);
// }

// array.forEach((element, idx, original_array) => {console.log(typeof element)});
// array.forEach(e => console.log(typeof e));


// Manipulate and store square of each element of the array.
// const numbers = [2, 3, 4, 5, 1, 7];
// const square_array = [];
// numbers.forEach((e, idx) => {
//     const square = e * e;
//     square_array[idx] = square;
// });

// console.log(square_array);

// // const square_array_map = numbers.map((element, index) => {
// //     const square = element * element;
// //     return square;
// // })
// // const square_array_map = numbers.map(e => e * e);
// const square_array_map = numbers.map(e => Math.pow(e, 2));


// console.log(square_array_map);

// From the marks, check if any student is failing or not. Condition is less than 40.
// const marks = [45, 50, 60, 40, 70, 20];
// const didfail = marks.some(e => {
//     if(e < 40) {
//         return true;
//     } else {
//         return false;
//     }
// });

// const didFail = marks.some(e => e < 40);
// console.log(didFail);

// const str = "how are you";
// const astr = str.split("").sort().join("").trim();
// console.log(astr);

// filter
// const marks = [45, 50, 60, 40, 70, 20, 10, 5, 2];

// const failed_list = marks.filter(e => e < 40);
// console.log(filter_list);

// const pass_list = marks.filter(e => e > 40 ? true : false);
// console.log(pass_list);

// const marks = [{
//     name: "Ajeet",
//     marks: 55,
// }, {
//     name: "Ritesh",
//     marks: 88,
// }, {
//     name: "Shubham",
//     marks: 78,
// }, {
//     name: "Manish",
//     marks: 75,
// }, {
//     name: "Sunny",
//     marks: 65
// }, {
//     name: "Rauvin",
//     marks: 89,
// }, {
//     name: "Vishal",
//     marks: 14,
// }];

// const pass_list = marks.filter(e => {
//     if(e.marks >= 40) {
//         return true;
//     } else {
//         return false;
//     }
// })

// const pass_list = marks.filter(e => e.marks>=40 ? true : false)

// console.log(pass_list);

// const first_fail_student = marks.find(e => e.marks<=20 ? true : false);
// console.log(first_fail_student);

// const menu = [{
//     name: "Burger",
//     price: 160
// }, {
//     name: "Pasta",
//     price: 100
// }, {
//     name: "Noodles",
//     price: 190
// }, {
//     name: "Pizza",
//     price: 250
// }];

//GET the price of noodles.
// const noodle = menu.find(e => {
//     if(e.name == "Noodles") {
//         return true;
//     } else {
//         return false;
//     }
// });

// console.log(noodle);
// console.log(noodle.price);

// const budget_items = menu.filter(e => {
//     if(e.price <= 140) {
//         return true;
//     } else {
//         return false;
//     }
// });

// console.log(budget_items);

// const find_index = menu.findIndex((e) => {
//     if(e.price < 140) {
//         return true;
//     } else {
//         return false;
//     }
// });
// console.log(find_index);

// const find_index = menu.findLastIndex(e => e.price<140 ? true : false);
// console.log(find_index);

//Reverse
// const arr= [1, 2, 3, 4, 5];
// console.log(arr.reverse());
// console.log(arr);
// const num = "ABCD";

// flat
const multi_dimension = ["a", "b", "c", [1, 2, 3, ["x", "y", "z"]]];
console.log(multi_dimension);
// const flat = multi_dimension.flat(); //Depth of 1
const flat = multi_dimension.flat(2); // Depth of 2
console.log(flat);

// ["a", "b", "c", [1, 2 , 3, ["x", "y", "z"]]};
// ["a", "b", "c", 1, 2, 3, ["x", "y", "z"]]; // Depth of 1
// ["a", "b", "c", 1, 2, 3, "x", "y", "z"]; // Depth of 2