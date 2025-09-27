let x1 = Number(prompt("which of the following is the letter h \n 1.a , 2.s , 3.h , 4.c"));
let x2 = Number(prompt("which of the following is the letter h \n 1.a , 2.s , 3.h , 4.c"));
let x3 = Number(prompt("which of the following is the letter h \n 1.a , 2.s , 3.h , 4.c"));
let x4 = Number(prompt("which of the following is the letter h \n 1.a , 2.s , 3.h , 4.c"));

let y1 = 1;
let y2 = 1;
let y3 = 1;
let y4 = 1;

let score = 0;
for (var i = 0; i < 4; i++) {
    if(i==0)x=x1,y=y1;
    if(i==1)x=x2,y=y2;
    if(i==2)x=x3,y=y3;
    if(i==3)x=x4,y=y4;
    switch (true) {
        case (x == y):
            score++;
            break;        
    }

}
alert("Your score is "+score+"/4");