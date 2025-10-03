let x = Number(prompt("Enter your pin:"));
// let y = prompt("Enter your pas1sword:");
let z = 1000;
let n=1;
if (x == 1234) {
    while (n==1) {
        Opt = Number(prompt("1 = Withdraw,2= Deposit,3= Check Balance,4= exit"));
        switch (Opt) {
            case 1:
                let g = Number(prompt("enter the amount"));
                z=z-g;
                break;
            case 2:
                let m = Number(prompt("enter the amount"));
                z=z+m;
                break;
            case 3:
                alert("your balance is"+z);
                break;
            case 4:
                n=0;
                break;
            default:
                alert("please select an option")
        }
    }
}
else {
    alert("Invalid login!");
}