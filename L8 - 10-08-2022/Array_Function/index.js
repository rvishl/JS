// Concat
// const arr1 = [1, 2, 3, 4];
// const arr2 = ['a', 'b', 'c', 'd'];
// const arr3 = ['x', 'y', 'z'];

// // const resultant = arr1.concat(arr2);
// // const resultant = arr2.concat(arr1);
// const resultant = arr3.concat(arr1, arr2, 34);
// console.log(resultant);


//Sort

// const menu = [{
//     name: "Burger",
//     price: 150
// }, {
//     name: "Pizza",
//     price: 210
// }, {
//     name: "Noodles",
//     price: 175
// }, {
//     name: "Pasta",
//     price: 250
// }];

// menu.sort((a, b) => {
//     return a.price - b.price;
// });
// console.log(menu);

// menu.sort((a, b) => {
//     if(a.price < b.price) {
//         return -1;
//     } else if(a.price == b.price) {
//         return 0;
//     }
//     return 1;
// });

// 1 -> Swap
// -1 -> No swap (but check again)
// 0 -> No swap and never check again

// fill
// const arr = [1, 2, 3, 4, 5, 6, 7, 8];

// const another_arr = arr.fill("ABCD");

// console.log(another_arr);
// console.log(arr);

// const arr = (new Array(50)).fill("DATA");
// console.log(arr);

// const products = [
//     { product: 'banana', price: 3 },
//     { product: 'mango', price: 6 },
//     { product: 'potato', price: ' ' },
//     { product: 'avocado', price: 8 },
//     { product: 'coffee', price: 10 },
//     { product: 'tea', price: '' }
// ];

// Calculate the total.
// let sum = 0;
// products
// .filter(e => typeof e.price == "number")
// .forEach(e => sum = sum + e.price);

// console.log(sum);

// const filtered_arr = products.filter(e => e.price == "number");

// filtered_arr.reduce((cumulative, element, index, original_arr) => {}, 0);

// const sum = filtered_arr.reduce((cumulatice, element) => {
//     return cumularive + element.price;
// }, 0);

// const sum = filtered_arr.reduce((c, e) => c + e.price, 0);

// console.log(sum);

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, -10];

// EVERY  element of my array is positive?
// const arr_all_positive = numbers.every((e) => {
//     if(e > 0) {
//         return true;
//     }
//     return false;
// });
// console.log(arr_all_positive);

// const string = "iireesjdsfjewiiewdfewedfikeikjksef";

// // Frequency count; {a => 0, b => c};
// const fq = string.split("").reduce((c, e) => {
//     if(c[e] !== undefined) {
//         c[e] = c[e] + 1;
//     } else {
//         c[e] = 1;
//     }
//     return c;
// }, {});

// console.log(fq);

const str = "The quick brown fox jumped over the lazy dog";
let word_arr = str.split(" ");
// console.log(word_arr);

word_arr = word_arr.map(e => e[0].toUpperCase() + e.substring(1));
// console.log(word_arr);
const result = word_arr.join(" ");
console.log(result);