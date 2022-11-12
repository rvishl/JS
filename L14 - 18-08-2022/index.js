console.log("Hey");

// const element = document.querySelector("ul > li:first-child");
// console.log(element);

// //These 2 are same.
// document.querySelector("#abcd"); //Uses CSS query selector.
// document.getElementById("abcd"); //Uses core DOM approach.


// const elements = document.querySelectorAll("ul > li");
// console.log(elements);

// const elements = document.querySelectiorAll("ul:nth-child(2) > li");
// const elements = document.querySelectiorAll("ul ~ ul > li");
// const elements = document.querySelectiorAll("ul:last-of-type > li");
// console.log(elements);

// const para = document.createElement("p");
// document.body.appendChild(para);
// const btn = document.createElement("button");
// document.body.appendChild(btn);

// const parent_container = document.getElementById("container");
// parent.appendChild(btn);

// btn.innerText = "Click me";
// parseFloat.innerText = "My Paragraph";

// parseFloat.innerText = "<a href='https://www.google.com'>Take me to Google</a>";
// parseFloat.innerHTML = "<a href='https://www.google.com'>Take me to Google</a>";


const para_ele = document.getElementById("para_id");

para_ele.style.backgroundColor = "yellow";
para_ele.style.color = "blue";
para_ele.style.fontSize = "150%";

// background-color -> CSS, backgroundColor -> JS
document.body.style.backgroundColor = "black";