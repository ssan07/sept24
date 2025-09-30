
let t=localStorage.getItem("storage");
var info=JSON.parse(t);
const div = document.getElementById('na');
div.textContent =info.namez;
const div1 = document.getElementById('ye');
div1.textContent =info.age;
const div2 = document.getElementById('ci');
div2.textContent =info.cityz;
var yr=info.age;
var yer=new Date().getFullYear();
var age=yer-yr;
const div3 = document.getElementById('ag');
div3.textContent =age;
let Eligibl;
if(age>=18){
    Eligibl="yes";
}else{
    Eligibl="No";
}
const div4 = document.getElementById('el');
div4.textContent =Eligibl;

let time=new Date().getHours();
// console.log(time);
let msg;
if(time < 12){
    msg="good morning";
}else if(time < 16 && time>=12){
    msg="good afternoon";
}else if(time >= 16 && time <19){
    msg="good evening";
}else if(time <= 24 && time>=19){
    msg="good night";
}
const div5 = document.getElementById('msg');
div5.textContent =msg;

function x(){
const namex= document.getElementById('name')
const name=namex.value;
console.log(name);
const dobx= document.getElementById('dob')
const dob=dobx.value;
console.log(dob);
const cityx= document.getElementById('city')
const city=cityx.value;
console.log(city);
var l={'namez':name,'age':dob,'cityz':city};
var store=JSON.stringify(l);
localStorage.setItem("storage", store);
}
/*
let t = localStorage.getItem("storage");
if (t) {
  var info = JSON.parse(t);
  document.getElementById("na").textContent = info.namez;
  document.getElementById("ye").textContent = info.age;
  document.getElementById("ci").textContent = info.cityz;

  const currentYear = new Date().getFullYear();
  const age = currentYear - info.age;
  document.getElementById("ag").textContent = age;
  document.getElementById("el").textContent = (age >= 18) ? "Eligible" : "Not Eligible";
}


function x() {
  const name = document.getElementById('name').value;
  const dob = document.getElementById('dob').value;
  const city = document.getElementById('city').value;

  const l = { namez: name, age: dob, cityz: city };
  localStorage.setItem("storage", JSON.stringify(l));

  // update immediately
  document.getElementById("na").textContent = name;
  document.getElementById("ye").textContent = dob;
  document.getElementById("ci").textContent = city;

  const currentYear = new Date().getFullYear();
  const age = currentYear - dob;
  document.getElementById("ag").textContent = age;
  document.getElementById("el").textContent = (age >= 18) ? "Eligible" : "Not Eligible";
}*/