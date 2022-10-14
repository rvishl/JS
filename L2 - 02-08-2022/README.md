# Aug-02, 2022

**Use const as much as possible**

## Block of Code
- Instruction between a set of curly brackets.
- It can be a conditional block, fucntional block, iterative block, just plain {}.
## Conditionals
- Checking for condition and execute something if the condition is satisfied or something else if the condition is not satisfied.

### if else
- Usage:
if (<condition>) {
    //What to do when the condition is true
} else {
    //What to do when the if condition is false
}

### ladder
- When we want to check for multiple things one by one and each of them hava different instructions to execute, we prefer using an if, else if, else if, else logic.

### ternary
- Checking a condition quickly to gather a result.
- Usage:
<condition> ? <true_situation> : <false_situation>
- Kind of, ? means the if keyword and : means  the else keyword.
- Nesting of ternary is allowed.

**Nesting -> Having one type of thing inside the same type of thing.**

### switch
- When we want to compare the value with something. Then we use switch.
- It is used for exact comparision.
- When we want to check for equal of two variables. Instead of an if else ladder, we can prefer this.
- Usage:
switch(<variable_to_check>) {
    case <values>:
        //Logic
        break;
    case <values>:
        //Logic
        break;
    default: //This is equivalent to the else block of your ladder.
        //Logic
        break;
}

## Iterative
- This is loops, used to run the same logic again and again until the specified condition is broken.

### for
- This is the bare minimum for iterating.
- It needs 3 things: initialization, condition, increment/decrement.
- Usage:
for(<initialization>; <conditional>; <increment/decrement>) {
    //Logic to loop on.
}

### while
- When we don't know exactly how many iterations we need, we will use a whilte loop.
- While loop focuses on condition.
- Usage:
while(<condition>) {
    //Logic
}

### do while
- This is an exit controlled loop.
- This will execute atleast once.
do {
    //Logic to execute;
} while(<condition>);

### for of
- This is for an array.
- Used to loop on it and give every element.
- Usage:
for(const <element> of <array_variable>) {
    //Logic to execute.
}

### for in
- This is for Index.
- In case of arrays we generally don't need it, but in case of object, we need it.
- Usage:
for(const <key> of <object_variable>) {
    //Logic to execute
}

### break
- break will break outside of the loop.

### continue
- Continue will skip the current iteration and perform the next iteration.

**Note: The forEach in Java is VERY DIFFERENT than forEach in JavaScript.**

## Assingnment:
1. Write a logic to check whether a number is a prime number or not.
2. FizzBuzz
- div by 3 & 5 -> FizzBuzz
- div by 3 -> Fizz
- div by 5 -> Buzz
- Otherwise -> Number
- Write a loop to print this series from 1 to 200.