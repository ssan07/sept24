const b1=document.getElementById("b1");
const b2=document.getElementById("b2");
const b3=document.getElementById("b3");
const b4=document.getElementById("b4");
const b5=document.getElementById("b5");
const b6=document.getElementById("b6");
const b7=document.getElementById("b7");
const b8=document.getElementById("b8");
const b9=document.getElementById("b9");
const b0=document.getElementById("b0");
const bd=document.getElementById("bd");
const bm=document.getElementById("bm");
const ba=document.getElementById("ba");
const bs=document.getElementById("bs");
const bc=document.getElementById("bc");
const be=document.getElementById("be");
const bmod=document.getElementById("bmod");
const bdot=document.getElementById("bdot");
const bdel=document.getElementById("bdel");


var a;
var sa=0;
var b;
var sb=0;
var oper;
var so=0;
var ans;




b1.addEventListener("click", function() {
    let value = Number(b1.value);
    if(sa==0 && so==0){
        a=value;
        sa=1;
    }else if(sa==1 && so ==0){
        a *= 10;
        a += value;
    }else if(sa == 1 && so == 1 && sb==0){
        b=value;
        sb=1;
    }else if(sa==1 && so == 1 && sb ==1){
        b *= 10;
        b += value;
    }
});

b2.addEventListener("click", function() {
    let value = Number(b2.value);
    if(sa==0 && so==0){
        a=value;
        sa=1;
    }else if(sa==1 && so ==0){
        a *= 10;
        a += value;
    }else if(sa == 1 && so == 1 && sb==0){
        b=value;
        sb=1;
    }else if(sa==1 && so == 1 && sb ==1){
        b *= 10;
        b += value;
    }
});

b3.addEventListener("click", function() {
    let value = Number(b3.value);
    if(sa==0 && so==0){
        a=value;
        sa=1;
    }else if(sa==1 && so ==0){
        a *= 10;
        a += value;
    }else if(sa == 1 && so == 1 && sb==0){
        b=value;
        sb=1;
    }else if(sa==1 && so == 1 && sb ==1){
        b *= 10;
        b += value;
    }
});

b4.addEventListener("click", function() {
    let value = Number(b4.value);
    if(sa==0 && so==0){
        a=value;
        sa=1;
    }else if(sa==1 && so ==0){
        a *= 10;
        a += value;
    }else if(sa == 1 && so == 1 && sb==0){
        b=value;
        sb=1;
    }else if(sa==1 && so == 1 && sb ==1){
        b *= 10;
        b += value;
    }
});

b5.addEventListener("click", function() {
    let value = Number(b5.value);
    if(sa==0 && so==0){
        a=value;
        sa=1;
    }else if(sa==1 && so ==0){
        a *= 10;
        a += value;
    }else if(sa == 1 && so == 1 && sb==0){
        b=value;
        sb=1;
    }else if(sa==1 && so == 1 && sb ==1){
        b *= 10;
        b += value;
    }
});

b6.addEventListener("click", function() {
    let value = Number(b6.value);
    if(sa==0 && so==0){
        a=value;
        sa=1;
    }else if(sa==1 && so ==0){
        a *= 10;
        a += value;
    }else if(sa == 1 && so == 1 && sb==0){
        b=value;
        sb=1;
    }else if(sa==1 && so == 1 && sb ==1){
        b *= 10;
        b += value;
    }
});

b7.addEventListener("click", function() {
    let value = Number(b7.value);
    if(sa==0 && so==0){
        a=value;
        sa=1;
    }else if(sa==1 && so ==0){
        a *= 10;
        a += value;
    }else if(sa == 1 && so == 1 && sb==0){
        b=value;
        sb=1;
    }else if(sa==1 && so == 1 && sb ==1){
        b *= 10;
        b += value;
    }
});

b8.addEventListener("click", function() {
    let value = Number(b8.value);
    if(sa==0 && so==0){
        a=value;
        sa=1;
    }else if(sa==1 && so ==0){
        a *= 10;
        a += value;
    }else if(sa == 1 && so == 1 && sb==0){
        b=value;
        sb=1;
    }else if(sa==1 && so == 1 && sb ==1){
        b *= 10;
        b += value;
    }
});

b9.addEventListener("click", function() {
    let value = Number(b9.value);
    if(sa==0 && so==0){
        a=value;
        sa=1;
    }else if(sa==1 && so ==0){
        a *= 10;
        a += value;
    }else if(sa == 1 && so == 1 && sb==0){
        b=value;
        sb=1;
    }else if(sa==1 && so == 1 && sb ==1){
        b *= 10;
        b += value;
    }
});

b0.addEventListener("click", function() {
    let value = Number(b0.value);
    if(sa==0 && so==0){
        a=value;
        sa=1;
    }else if(sa==1 && so ==0){
        a *= 10;
        a += value;
    }else if(sa == 1 && so == 1 && sb==0){
        b=value;
        sb=1;
    }else if(sa==1 && so == 1 && sb ==1){
        b *= 10;
        b += value;
    }
});

ba.addEventListener("click", function() {
    let value = ba.value;
    if(sa==0 && so==0){
        a=0;
        oper=value;
        so=1;
        sa=1;
    }else if(sa==1 && so ==0){
        oper=value;
        so=1;
    }else if(sa == 1 && so == 1 && sb==0){
        oper=value;
        so=1;
    }
});

bs.addEventListener("click", function() {
    let value = bs.value;
    if(sa==0 && so==0){
        a=0;
        oper=value;
        so=1;
        sa=1;
    }else if(sa==1 && so ==0){
        oper=value;
        so=1;
    }else if(sa == 1 && so == 1 && sb==0){
        oper=value;
        so=1;
    }
});

bd.addEventListener("click", function() {
    let value = bd.value;
    if(sa==0 && so==0){
        a=0;
        oper=value;
        so=1;
        sa=1;
    }else if(sa==1 && so ==0){
        oper=value;
        so=1;
    }else if(sa == 1 && so == 1 && sb==0){
        oper=value;
        so=1;
    }
});

bm.addEventListener("click", function() {
    let value = bm.value;
    if(sa==0 && so==0){
        a=0;
        oper=value;
        so=1;
        sa=1;
    }else if(sa==1 && so ==0){
        oper=value;
        so=1;
    }else if(sa == 1 && so == 1 && sb==0){
        oper=value;
        so=1;
    }
});
bmod.addEventListener("click", function() {
    let value = bmod.value;
    if(sa==0 && so==0){
        a=0;
        oper=value;
        so=1;
        sa=1;
    }else if(sa==1 && so ==0){
        oper=value;
        so=1;
    }else if(sa == 1 && so == 1 && sb==0){
        oper=value;
        so=1;
    }
});


bc.addEventListener("click", function() {
    if(sa==1 && so ==0){
        a=0;
        sa=0;
    }else if(sa == 1 && so == 1 && sb==0){
        a=0;
        oper='0';
        sa=0;
        so=0;
    }else if(sa==1 && so == 1 && sb ==1){
        a = 0;
        b = 0;
        oper = '0';
        sa=0;
        sb=0;
        s0=0;
    }
});

bdel.addEventListener("click", function() {
    if(sa==1 && so ==0){
        a /= 10;
    }else if(sa==1 && so == 1 && sb ==1){
        b /= 10;
    }
});



be.addEventListener("click", function() {
    var x=Number(a);
    var y=Number(b);
    switch(true){
    case (oper === "*"):
        ans=x*y;
        break;
    case (oper == "/"):
        ans=x/y;
        break;
    case (oper == "+"):
        ans=x+y;
        break;
    case (oper == "-"):
        ans=x-y;
        break;
}
console.log(ans);
a=0;
b=0;
c=0;
sa=0;
sb=0;
so=0;
});



// switch(true){
//     case (oper === "*"):
//         ans=x*y;
//         break;
//     case (oper == "/"):
//         ans=x/y;
//         break;
//     case (oper == "+"):
//         ans=x+y;
//         break;
//     case (oper == "-"):
//         ans=x-y;
//         break;
// }
// console.log(ans);