// // 1. Ways to print in JavaScript
// //console.log("Hello World");
// //alert("me");
// //document.write("this is document write")

// // 2. JavaScript console API
// // console.log("Hello world", 4 + 6, "Another log");
// // console.warn("this is warning");
// // console.error("This is an error");

// // 3. javaScript variables
// //what are variables???? - containers to store data values
// var number1 = 34;
// var number2 = 56;
// console.log(number1 + number2);

// // 4. Data types in Javascript

// //Numbers
// var num1 = 645;
// var num2 = 734;

// //String
// var str1 = "This is a string";
// var str2 = "This is also a string";

// //objects
// var marks = {
//   ravi: 65,
//   shubham: 63,
//   punit: 78,
// };

// //booleans

// var a = true;
// var b = false;
// console.log(a);

// // var und = undefined;5
// // console.log(undefined);

// var und;
// console.log(und);

// var n = null;
// console.log(n);

// //
// // At a very high level, there are two types of data types in havascropt
// // 1. primitive data types: undefined, null, String, Number, boolean, Symbol
// // 2. Reference data types: Arrays and objects

// var arr = [1, 2, "string", 4, 5];
// console.log(arr);

// Operators in javascript;

// Aruthmetic Operators

// var a = 87;
// var b = 74;
// console.log("The value of a+b is ", a + b);
// console.log("The value of a-b is ", a - b);
// console.log("The value of a/b is ", a / b);
// console.log("The value of a*b is ", a * b);

//Assignment operators

// var c = b;
// c += 2; // c = c+2

// console.log(c);

//comparison operators

// var x = 45;
// var y = 54;

// console.log(x == y);
// console.log(x >= y);
// console.log(x <= y);
// console.log(x > y);
// console.log(x < y);

// logical OR

// console.log(true || true);
// console.log(true || false);
// console.log(false || true);
// console.log(false || false);

// logical and

// console.log(true && true);
// console.log(true  && false);
// console.log(false && true);
// console.log(false && false);

// Logical Not

// console.log(!false);
// console.log(!true);

// Function in javacript

// function avg(a, b) {
//   c = (a + b) / 2;
//   return c;
// }

// DRY = Do not repeat yourself

// c1 = avg(4, 6);
// c2 = avg(14, 16);
// console.log(c1, c2);

//conditions in javascript

// var age = 28;
// if (age < 22) {
//   console.log("you are are eligible to drive");
// } else if (age < 26) {
//   console.log("you are not eligible to drive");
// } else if (age < 21) {
//   console.log("you are eligibile to marry");
// } else {
//   console.log("You are a kid");
// }
// console.log("end of ladder");

// var arr = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(arr);
// for (var i = 0; i < arr.length; i++) {
//   if (i == 2) {
//     //break;
//     continue;
//   }
//   console.log(arr[i]);
// }

// arr.forEach(function (element) {
//   console.log(element);
// });

// const ac=0;
// ac++;
// ac=ac+1;

// let j = 1;
// do {
//   console.log(arr[j]);
//   j++;
// } while (j < arr.length);

//let myArr = ["Fan", "Table", 76, null, true];
//Array Methods
// console.log(myArr);
// myArr.pop();
// console.log(myArr);
// myArr.push("Balram");
// console.log(myArr);
// myArr.shift();
// console.log(myArr);
// myArr.unshift("Ballu");
// console.log(myArr);

// const newLen = myArr.unshift("Ballluuu");
// console.log(newLen);
// console.log(myArr);

// myArr.toString();
// console.log(myArr);

//string methods in Javascript
// let myLovelyString = "Balram is a good good boy";
// // console.log(myLovelyString.length);
// // console.log(myLovelyString.indexOf("good"));
// // console.log(myLovelyString.lastIndexOf("good"));

// // console.log(myLovelyString.slice(1, 3));
// console.log(myLovelyString.replace("good", "bad"));

// let myDate = new Date();
// console.log(myDate.getTime());
// console.log(myDate.getFullYear());
// console.log(myDate.getDay());
// console.log(myDate.getMinutes());

//var arr = [1, 2, "Balram", 4, 5];

//console.log(arr);

//Dom Manipulation

// let elem = document.getElementById("click");
// console.log(elem);

// let elemClass = document.getElementsByClassName("container");
// console.log(elemClass);

// //elemClass[0].style.background = "yellow";
// elemClass[0].classList.add("bg-primary");
// elemClass[0].classList.add("text-success");

// console.log(elem.innerText);
// console.log(elem.innerHTML);

// console.log(elemClass[0].innerText);
// console.log(elemClass[0].innerHTML);

tn = document.getElementsByTagName("div");
// console.log(tn)
// createdElement = document.createElement("p");
// createdElement.innerText = "This is a created para";
// tn[0].appendChild(createdElement);
// createdElement2 = document.createElement("b");
// createdElement2.innerText = "This is a created bold";
// tn[0].replaceChild(createdElement2, createdElement);
// removeChild(element); ---> removes an element

// Selecting using Query
// sel = document.querySelector(".container");
// console.log(sel);
// sel = document.querySelectorAll(".container");
// console.log(sel);

// function clicked(){
//     console.log('The button was clicked')
// }
// window.onload = function(){
//     console.log('The document was loaded')

// }
// Events in JavaScript
// firstContainer.addEventListener('click', function(){
//     document.querySelectorAll('.container')[1].innerHTML = "<b> We have clicked</b>"
//     console.log("Clicked on Container")
// })

// firstContainer.addEventListener("mouseover", function () {
//   console.log("Mouse on Container");
// });

// firstContainer.addEventListener("mouseout", function () {
//   console.log("Mouse out of Container");
// });

// Arrow Functions
// function summ(a, b){
//     return a+b;
// }
// summ = (a,b)=>{
//     return a+b;
// }

// logKaro = ()=>{
//     document.querySelectorAll('.container')[1].innerHTML = "<b> Set interval fired</b>"
//     console.log("I am your log")
// }
// SetTimeout and setinterval
// clr = setTimeout(logKaro, 5000);
// clr = setInterval(logKaro, 2000);
// use clearInterval(clr)/clearTimeout(clr) to cancel setInterval/setTimeout

// JavaScript localStorage
// localStorage.setItem('name', 'harry')
// localStorage
// localStorage.getItem('name')
// localStorage.removeItem('name')
// localStorage.clear();

// Json
// obj = {name: "harry", length: 1, a: {this: 'tha"t'}}
// jso = JSON.stringify(obj);
// console.log(typeof jso)
// console.log(jso)
// parsed = JSON.parse(`{"name":"harry","length":1,"a":{"this":"that"}}`)
// console.log(parsed);

// Template literals - Backticks
a = 34;
console.log(`this is my ${a}`);
