let x = Number(prompt("Enter your monthly income"));
let y1 = Number(prompt("Enter the amount spent on Rent"));
let y2 = Number(prompt("Enter the amount spent on Groceries"));
let y3 = Number(prompt("Enter the amount spent on Transport"));
let y4 = Number(prompt("Enter the amount spent on other things"));

let expense=y1+y2+y3+y4;
if(expense>x){
alert("Overspending");
}else if(expense<=x){
alert("Within budget");
}
let p=(expense/x)*100;
let r=x-expense;
alert("your total expenses is "+ expense);
alert("your remaining balance is "+ r);
alert("the percentage of amount spent is "+ p);