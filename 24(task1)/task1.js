let m=prompt("enter the marks:");
let x=Number(m);
let l;
if(x>89 && x<=100){
    l="A";
}else if(x>74 && x<89){
    l="B";
}else if(x>49 && x<75){
    l="C";
}else{
    l="d";
}
switch(l){
    case "A" :
        console.log("A");
        break;
    case "B" :
        console.log("B");
        break;
    case "C" :
        console.log("C");
        break;
    default :
        console.log("Fail");
}