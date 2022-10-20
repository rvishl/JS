// // 0 parameters
// const helloworld = _ => {
//     console.log("hello!!!");
// }

// helloworld();

// // 1 parameter
// const printSquare = num => {
//     const approach1 = num * num; // Multiple by itself to make square
//     const approach2 = num ** 2; // Raise to the power of 2 using ** operator
//     const approach3 = Math.pow(num, 2); // Using a Math function.
//     console.log(approach1, approach2, approach3);
// }

// printSquare(5);

// // More than 1 parameters
// const addition = (num1, num2) => {
//     console.log(num1 + num2);
// }

// addition(10, 5);

// // 1 instruction and we will return that.
// const addition_one_liner = (num1, num2) => console.log(num1 + num2);
// addition_one_liner(30, 5);

// const generateRandomNumber = _ => Math.random();
// console.log(generateRandomNumber());

// //First Class function, a function that has been defined to a variable.
// const helloWorld = _ => console.log("Hello World");

// //It takes 2 arguments, a function and a time (milliseconds)
// //Calls the function after the given time has passed

// setTimeout(_ => console.log("Hello World from timeout"), 4000);

// // element.addEventListener('click', () => {});

// console.log(_ => console.log("Hello World from console"));

// // Anonymous - ❌
// // Function Expression - ✔
// // Named function - ✔
// // HOF | FOF - FOF
// // FCF - ✔
// // Callback function - ✔
// const hello = function hello1() {
//     console.log("Hello from named");
// }

// // hello();
// setTimeout(hello, 5000);

// const add = (...ab) => {
//     let sum = 0;
//     for(let s of ab){ sum += s;}
//     console.log(sum);
// }
// add(3, 5, 3, 2, 2, 7, 4);

// const some_fn = _ => {
//     const child_fn = () => {
//         console.log("Hello Child World");
//     }

//     // child_fn();

//     return child_fn;
// }

// // const result = some_fn();
// // console.log(result);
// // result();

// some_fn()();

// const addition = (a) => {
    
//     const second = (b) => {
//         // console.log(a, b);
//         console.log(a + b);
//     }

//     return second;

// }

// const result = addition(10);
// console.log(result);
// result(20);

// addition(5)(10);

