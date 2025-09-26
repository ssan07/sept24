// console.log(5+"5");
// console.log("5"+5);
// console.log(5+true);
// console.log("5"*2);
// console.log("5"-2);
// console.log("5"+2);
// var x= Number("5");
// console.log(x+2);
// console.log("5"/"2");


// console.log(Boolean("hi"));
// console.log(Boolean(0));
// console.log(Boolean([]));


// console.log(Boolean(0=="0"));
// console.log(Boolean(0==false));
// console.log(Boolean(""+0==0));

// console.log(null==undefined);
// console.log(null+1);
// console.log(NaN==NaN);
// console.log(isNaN(NaN));


// console.log(5=="5");
// console.log(Number("123"));

// // /* string to Number*/
// var s="123";
// var n=Number(s);
// console.log(n);

// // /* string to Number*/
// var s=500;
// var n=String(s);
// console.log(n);

// // /*boolean to string*/
// var s=true;
// var n=String(s);
// console.log(n);

// let n = 5;
// let s = "5";
// let res = n + s;  // JavaScript converts num to string
// console.log(res); 
// console.log(typeof(res))

// let n = 5;
// let s = "5";
// let res = n + s;  // JavaScript converts num to string
// console.log(res); 
// console.log(typeof(res))

// let s = "10";
// let n = 10;
// console.log(s == n);  // true, JavaScript converts str to number

// console.log("5"+5+"5"+5);
// console.log(5===7);

// let string="thala"
// let result= (string === "thalapathi" ) ? "vijay": 
//  (string === "thala" ) ? "ajith": 
//   (string === "thalaivr" ) ? "rajini": 
//    (string === "aandavar" ) ? "kamal":
//    "nothing_poi_velaiya_paaru"; 
//    console.log(result);

// function checkAge(age) {
//   return (age >= 18) ? 'Adult' : 'Minor';
// }

// console.log(checkAge(20));  
// console.log(checkAge(15));



// function sayHello(name) {
//   console.log(`Hello, ${name}!`);
// }

// function sayGoodbye(name) {
//   console.log(`Goodbye, ${name}!`);
// }

// let isLeaving = true;
// let name = 'Geeks';

// isLeaving ? sayGoodbye(name) : sayHello(name);



// let hour = 15;
// let message;

// if (hour < 12) {
//   message = 'Good morning';
// } else {
//   message = 'Good afternoon';
// }

// console.log(message);

// let s1 = "12";

// // Using unary plus to convert string to number
// let x = +s1;
// console.log(x);

// // Here we are using typeof operator
// console.log(typeof (x))

// // "Geeks" cannot be converted to a number
// let s2 = +"Geeks";
// console.log(s2);

// let s1 = "12";

// // Unary negation, negates the
// // value of number
// let x = -s1;

// console.log(x);

// // Unary negation, tries to convert
// // 'Geeks' to a number
// let s2 = -"Geeks";

// console.log(s2);

// // Case 1: Postfix
// let x = 12;
// let y = x++;
// console.log(x);
// console.log(y);

// // Case 2: Preifix
// x = 10;
// y = ++x;
// console.log(x);
// console.log(y);


// let x = 8;
// let y = x--;
// console.log(x);
// console.log(y);

// x = 15;
// y = --x;
// console.log(x);
// console.log(y);


// let x = false;
// let y = !x;
// console.log(y);

// x = true;
// y = !x;
// console.log(y);


// let x = 10;

// // Bitwise NOT, inverts all bits of 'num'
// let y = ~x;

// console.log(y);


// let x = 18;
// let s = "GeeksforGeeks";
// let isTrue = true;
// let obj = { name: "Aman", age: 21 };
// let undefinedVar;

// console.log(typeof x);
// console.log(typeof s);
// console.log(typeof isTrue);
// console.log(typeof obj);
// console.log(typeof undefinedVar);


// let person = {
//     name: "Ankit",
//     age: 21,
//     city: "Noida"
// };

// console.log(person);

// delete person.age;

// console.log(person);


// function myFunction() {
//     return void 0;
// }
// console.log(myFunction());


// let languages = ["HTML", "CSS", "JavaScript"];

// // true (index 1 exists in the array)
// console.log(1 in languages);

// // false (index 3 doesn't exist in the array)
// console.log(3 in languages);

// const Data = {
//     name: "Rahul",
//     age: 21,
//     city: "Noida"
// };

// // true ("name" property exists in the object)
// console.log("name" in Data);

// // false ("gender" property doesn't exist in the object)
// console.log("address" in Data);
// let name = prompt("Enter your name:");
// console.log(name);
// if (name>40)
// {
//     console.log("Its too hot");
// }
// else if (name>30)
// {
//     console.log("Its so so warm");
// }
// else if (name>20)
// {
//     console.log("Its cold");
// }
// else if (name>10)
// {
//     console.log("Its too cold");
// }
// else{
//     console.log("Its freezing");
// }

// const day = "Monday";
// switch (day) {
//     case "Monday":
//         console.log("Start of the week.");
//         break;
//     case "Friday":
//         console.log("End of the workweek.");
//         break;
//     default:
//         console.log("It's a regular day.");
// }
// let x=prompt("Enter a number:");
// let y=prompt("Enter a number:");
// let a=Number(x);
// let b=Number(y);
// let o=prompt("Enter a oprator:");
// let z=prompt("Enter a Day:");
// switch(o)
// {
    // case "+":
        // console.log(a+b);
    // break;
    // case "-":
        // console.log(a-b);
    // break;
    // case "*":
        // console.log(a*b);
    // break;
    // case "/":
        // console.log(a/b);
    // break;
    // default:
        // console.log("Error");
// }
// switch(z)
// {
    // case "1":
        // console.log("Monday");
    // break;
    // case "2":
        // console.log("Tuesday");
    // break;
    // case "3":
        // console.log("Wednesday");
    // break;
    // case "4":
        // console.log("Thursday");
    // break;
    // case "5":
        // console.log("Friday");
    // break;
    // case "6":
        // console.log("Saturday");
    // break;
    // case "7":
        // console.log("Sunday");
    // break;
    // default:
        // console.log("Day not found error");
// }

// setTimeout(function(){
//     console.log("3 seconds later");
// },3000);
// setTimeout(function(){
//     console.log("10 seconds later");
// },10000);
// setTimeout(function(){
//     console.log("30 seconds later");
// },30000);
// setTimeout(function(){
//     console.log("1 minute later");
// },60000);


// switch (new Date().getDay()) {      // input is current day
// case 6:                         // if (day == 6)
// 	text = "Saturday";          
// 	break;
// case 0:                         // if (day == 0)
// 	text = "Sunday";
// 	break;
// default:                        // else...
// 	text = "Whatever";
// } 

// let a=confirm("do you want to log in?");
// if(a===true){
//     alert("You are logged in");
// }else{
//     alert("login failed");
// }

var str="Hello World!";
var atr="yello World!";
var len =str.length;
console.log(len);
console.log(str.lastIndexOf("el"));
console.log(str.indexOf("el"));
console.log(str.slice(2,5));
console.log(str.replace("wor","abc"));
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.concat("hi!",atr));
console.log(str.charAt(6));
console.log(str.split(","));


