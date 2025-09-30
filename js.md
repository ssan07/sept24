# operators

assignment  operators
logical operators
ternary operators
unary operators
bigint operators
arithmetic operators
comparison operators
bitwise operators
comma operators
relational operators

NaN-Not A Number

## assignment  operators
### + Addition operator:
// Number + Number => Addition 
let x = 1 + 2;
console.log( x );

// Number + String => Concatenation
let y =  5 + "hello"; 
console.log( y );


### - Subtraction operator
// Number - Number => Subtraction 
let x = 10 - 7;
console.log( x );

let y = "Hello" - 1; 
console.log( y );


### * Multiplication operator
// Number * Number => Multiplication
let x = 3 * 3;
let y = -4 * 4; 
console.log(x);
console.log(y);

let a = Infinity * 0;
let b = Infinity * Infinity;
console.log(a);
console.log(b);
let z = 'hi' * 2; 
console.log(z);


## / Division Operator
// Number / Number => Division
let x = 5 / 2;
let y = 1.0 / 2.0;
console.log(x);
console.log(y);

let a = 3.0 / 0;
let b = 4.0 / 0.0;
console.log(a);
console.log(b);
let z = 2.0 / -0.0;
console.log(z);


## % Modulus Operator
// Number % Number => Modulus of the number
let x = 9 % 5;
let y = -12 % 5;
let z = 1 % -2;
let a = 5.5 % 2;
let b = -4 % 2;
let c = NaN % 2;

console.log(x);
console.log(y);
console.log(z);
console.log(a);
console.log(b);
console.log(c);


## ** Exponentiation Operator
// Number ** Number => Exponential of the number

// let x = -4 ** 2 // This is an incorrect expression
let y = -(4 ** 2);
let z = 2 ** 5;
let a = 3 ** 3;
let b = 3 ** 2.5; 
let c = 10 ** -2;
let d = 2 ** 3 ** 2; 
let e = NaN ** 2;

console.log(y);
console.log(z);
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);


## ++ Increment Operator
// Postfix 
let a = 2;
b = a++; // b = 2, a = 3

// Prefix
let x = 5;
y = ++x; // x = 6, y = 6

console.log(a);
console.log(b);
console.log(x);
console.log(y);


## -- Decrement Operator
// Prefix
let a = 2;
b = --a; 

// Postfix 
let x = 3;
y = x--;
 
console.log(a);
console.log(b);
console.log(x);
console.log(y);


## - Unary Negation Operator
let a = 3;
b = -a; 

// Unary negation operator
// can convert non-numbers
// into a number
let x = "3";
y = -x; 
  
console.log(a);
console.log(b);
console.log(x);
console.log(y);


## + Unary Plus Operator
let a =  +4;
let b = +'2';   
let c = +true;  
let x = +false; 
let y = +null;
     
console.log(a);
console.log(b);
console.log(c);
console.log(x);
console.log(y);




## logical operators

## ternary operators

## unary operators

## bigint operators

## arithmetic operators

## comparison operators

## bitwise operators

## comma operators

## relational operators

dom-document object model
api-application programming interface

# promise

// const mypromise = new Promise((resolve,reject)=>{
//     let success=true;
//     if(success){
//         resolve("task completed successfully");
//     }else{
//         reject("something went wromg!");
//     }
// });

// mypromise
//     .then((message)=>{
//         console.log(message);
//     })
//     .catch((error)=>{
//         console.error(error);
//     })
//     .finally(()=>{
//         console.log("promise execution finished");
//     });
    
// const myPromise = new Promise((resolve,reject)=>{
//     let success=false;
//     if(success){
//         resolve("task completed successfully");
//     }else{
//         reject("something went wromg!");
//     }
// });

// myPromise
//     .then((message)=>{
//         console.log(message);
//     })
//     .catch((error)=>{
//         console.error(error);
//     })
//     .finally(()=>{
//         console.log("promise execution finished");
//     });



