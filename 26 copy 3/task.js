let x = Number(prompt("Enter the distance(km)"));
let y = prompt("Enter the type of transport(Train,Bus,Car,Bike)");
let z=y.toLowerCase();
let f;
let m;
if(z=="bus" || z=="train" || z=="car" || z=="bike"){
if(z=="bus"){
    f=3;
}else if(z=="train"){
    f=5;
}else if(z=="car"){
    f=7;
}
if(z=="bike"){
    f=4;
}

m=x*f;

alert("Total fare is "+m+"Rs");
}else{
    alert("Transport not available");
}