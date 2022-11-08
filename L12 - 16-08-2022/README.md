# Aug-16, 2022

## Scope
- It tells us whether a variable can be accessed (reference) in a block of code or not.
- Scope defined where the variable can be referenced.
- If you have the reference, you are in the scope, if you don't have the reference, you are NOT in the scope.

### Global Scope
- This can be accessed from anywhere.
- Even from a different file.

### Window scope
- This is very very similar to global scope.
- Just that we use window keyword.
- It is okay to use interchangebly with the Global scope.
- This is the highest scope as so is the Global scope.

### Functional Scope
- This is for access inside a function.

### Module Scope
- If we define in a module, we can only access it there.
- If we define a variable on a single file, we can only use it on that file.

### Block Scope
- Access of the variable is limited to the block of code where it is created.
- It can be ANY BLOCK.
- This is also referred to as local scope.

### Shadowing
- The parent block cannot access the child block.
- So, if there is a varible in the child block with the same name, it will NOT care about it.
- If we are using var. The inner variable will shadow and update the value. VAR DOES NOT CARE ABOUT BLOCK SCOPE.

### Scope Chaining
- This means the child block can access the variable of parent block.
- It will keep on going parent, parent of parent, parent of parent of parent until it reaches the global scope.
- If at the global scope also it is not able to find variable. Then we have a reference error and the script will crash.

### let vs const
- Let is used when we are going to UPDATE the value in the code.
- Const is used when we will never UPDATE after assigning once.
(Except for Non Primitive Data Type, Objects & Arrays)
- About 95% of the times, you will prefer const.

### let vs var vs const
- Let vs const difference we already know.
- let and const are block scoped. That means they are more secure.
- var is global/function.
- If we are using a function, var CANNOT be accessed outside of that function.

**If we don't use ANY scope specifier, by default it becomes global/window scoped. That means, even inside a function we create that variable (without let/var/const). That can be accessed outside the function. That is truly global.**

## JS is JIT
- Just in Time
- In JS, the compilation happens immediately before execution.
- This is highly optimized, it does not check as strictly as Java for example. But it still does some things, such as Hoisting.
- Every browser will have it's own JIT compiler. So, the behaviour might be different from browser to browser.

## Hoisting
- This is a process which is done in the background during JIT phase.
- This refers to the process of shifting the declaration of variable to top of the scope. (block, function, class, global).
- This is also applied to functions and classes.
- Variable, function, classes.
- Hoisting is BAD, VERY BAD.
- The value automatically defined is undefined.
- The datatype of undefined is also undefined.

## TDZ (Temporal Dead Zone)
- Introduce in ES6 (2015).
- To block the effect of hoisting on let and const.
- Dead Zone means you cannot access the variable.
- Temporal -> Temporary (From the start of scope block upto the point where we have defined the variable).
- TDZ is an additional layer implemented to stop the output of let and const as per the hoisting.
- This is part of JS.
- This happens under the hood.

## Task:
- Predict the output with logic/explanation.
1. 
```
function sayHi() {
    console.log(name);
    console.log(age);
    var name = 'Aayush';
    let age = 31;
}

sayHi();
```

2. 
```
    for(let i=1; i<5; i++) {
        if (i===3) continue;
        console.log(i);
    }
```

3. 
```
let number = 0;
console.log(number++);
console.log(++number);
console.log(number);
```

4. 
```
function sayHi() {
    return (() => 0)());
}

console.log(typeof sayHi());
```

5. 
```
function getAge(...args) {
    console.log(typeof args);
}

getAge(31);
```

6. 
```
const a = {};
const b = { key: 'b' };
const c = { key: 'c' };

a[b] = 123;
a[c] = 456;

console.log(a[b]);
```