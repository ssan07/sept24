# expansion
NaN-Not A Number
dom-document object model
api-application programming interface
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


### / Division Operator
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


### % Modulus Operator
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


### ** Exponentiation Operator
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


### ++ Increment Operator
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


### -- Decrement Operator
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


### - Unary Negation Operator
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


### + Unary Plus Operator
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




### logical operators

### ternary operators

### unary operators

### bigint operators

### arithmetic operators

### comparison operators

### bitwise operators

### comma operators

### relational operators




# promise
const mypromise = new Promise((resolve,reject)=>{
    let success=true;
    if(success){
        resolve("task completed successfully");
    }else{
        reject("something went wromg!");
    }
});

mypromise
    .then((message)=>{
        console.log(message);
    })
    .catch((error)=>{
        console.error(error);
    })
    .finally(()=>{
        console.log("promise execution finished");
    });
    
const myPromise = new Promise((resolve,reject)=>{
    let success=false;
    if(success){
        resolve("task completed successfully");
    }else{
        reject("something went wromg!");
    }
});

myPromise
    .then((message)=>{
        console.log(message);
    })
    .catch((error)=>{
        console.error(error);
    })
    .finally(()=>{
        console.log("promise execution finished");
    });

# loops
## for loop      - when we know when the loop ends
## while loop    - when we need to execute the loop until the condition is satisfied
## do-while loop - in this the code executes first then checks the condition

## for loop:
    for(let i=1;i<=10;i++){
        console.log(i);
    }

### steps in for loop:
    -> initialization 
    -> condition 
    -> increment

### problem:
    i=0-20
    condition div by 3 (using if condition)
    ans:
    for(let i=0;i<=20;i++){
        if(i%3==0){
            console.log(i);
        }
    }

## while 
### eg
    let i=1;
    while (i<=10){
        console.log(i);
        i++;
    }

## do-while
### eg
    let pwd="user@123";
    let input;
    do{
        input=prompt("Enter password");
        if(input!== pwd){
            alert("Enter the right password");
        }
    }while(input !== pwd);
    alert("yeah!!! you are logged in!");

# arrays
## eg
var fruits=["apple","orange","banana","grapes","mango"];

console.log(fruits[1]);
for(var i=0;i<fruits.length;i++){
    console.log(fruits[i]);
}
console.log(fruits.tostring());
console.log(fruits.join (" * "));
fruits.pop();
console.log(fruits);
fruits.push("orange");
console.log(fruits);
fruits.shift();
console.log(fruits);
fruits.unshift("orange");
console.log(fruits);
fruits.splice(2,0,"orange","pear");
console.log(fruits);
//it adds 2 elements removes 0 elements and the 2 elements anre written in it
console.log(fruits.slice(1,3));
//slice from where to where ie in arr=[a,b,c,d,e] it gives [b,c]
fruits=fruits.concat(["chiku","watermelon"]);
console.log(fruits);
console.log(fruits.sort());
console.log(fruits.reverse());