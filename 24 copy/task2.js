let m=prompt("enter the number to find even or odd:");
let x=Number(m);
if(x%2==1){
    console.log("it is a odd number");
}else if(x%2==0){
    console.log("it is an even number");
}

let a=prompt("enter the week in number:");
let l=Number(a);
if(l>0 && l<6){
    console.log("It is a week day");
}else if(l>5 && l<8){
    console.log("It is a weekend");
}else{
    console.log("Invalid day");
}