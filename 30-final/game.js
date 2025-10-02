let l = {}
let next = 0;
function reg() {
    event.preventDefault();
    try {
        const namex = document.getElementById('name')
        const name = namex.value;
        // console.log(name);
        const emailx = document.getElementById('email')
        const email = emailx.value;
        // console.log(email);
        const agex = document.getElementById('age')
        const age = agex.value;
        // console.log(age);

        if (!name || !email || !age) {
            throw ("All fields are required!");
        }
        if (age < 12) {
            throw ("age must be greater than or equal to 12.");
        }

        l = { name, email, age };
        // quiz();
        setTimeout(() => document.getElementById("exp").innerText = "loading ...", 500);
        setTimeout(() => displ(all()), 5000);

        // var l={'namez':name,'emailz':email,'agez':age};
        // var store=JSON.stringify(l);
        // localStorage.setItem("reg_info", store);
    }
    catch (err) {
        document.getElementById("exp").innerText = "Error:" + err;
    }
}

function displ(id) {
    // next++;
    document.querySelectorAll("section").forEach(sec => sec.classList.remove("active"));
    document.getElementById(id).classList.add("active");
}

let qb = [
    { q: "Which planet is known as the Red Planet?", opt: ["Earth", "Mars", "Jupiter", "Saturn"], ans: "Mars" },
    { q: "Who is the father of Computers?", opt: ["Charles Babbage", "Newton", "Einstein", "Turing"], ans: "Charles Babbage" },
    { q: "What is 5 + 7?", opt: ["10", "11", "12", "13"], ans: "12" },
    { q: "Which gas do plants inhale?", opt: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"], ans: "Carbon Dioxide" },
    { q: "Which is the largest ocean?", opt: ["Atlantic", "Indian", "Pacific", "Arctic"], ans: "Pacific" }
];
let qbs = [];
let i = 0;
let a = null;
let b = null;
let c = null;
while (i != 3) {

    let nx = Math.floor(Math.random() * 5);
    if (nx !== a && nx != b && nx != c) {
        if (a == null) {
            a = nx;
            i++;
        } else if (b == null) {
            b = nx;
            i++;
        } else if (c == null) {
            c = nx;
            i++;
        }
    }
}
// function all(){
//     if(next===0){
//         return "quiz"+(a+1);
//     }else if(next===1){
//         return "quiz"+(b+1);
//     }else if(next===2){
//         return "quiz"+(c+1);
//     }else if(next===3){
//         console.log("score: "+score);
//         return "end";
//     }
// }

function all() {
    let id;
    if (next === 0) { id = "quiz" + (a + 1); }
    else if (next === 1) { id = "quiz" + (b + 1); }
    else if (next === 2) { id = "quiz" + (c + 1); }
    else if (next === 3) { console.log("score: " + score); return "end"; }

    next++;
    return id;
}




if (a == 0) {
    document.getElementById('no1').textContent = '1';
} else if (b == 0) {
    document.getElementById('no1').textContent = '2';
} else if (c == 0) {
    document.getElementById('no1').textContent = '3';
}

if (a == 1) {
    document.getElementById('no2').textContent = '1';
} else if (b == 1) {
    document.getElementById('no2').textContent = '2';
} else if (c == 1) {
    document.getElementById('no2').textContent = '3';
}

if (a == 2) {
    document.getElementById('no3').textContent = '1';
} else if (b == 2) {
    document.getElementById('no3').textContent = '2';
} else if (c == 2) {
    document.getElementById('no3').textContent = '3';
}

if (a == 3) {
    document.getElementById('no4').textContent = '1';
} else if (b == 3) {
    document.getElementById('no4').textContent = '2';
} else if (c == 3) {
    document.getElementById('no4').textContent = '3';
}

if (a == 4) {
    document.getElementById('no5').textContent = '1';
} else if (b == 4) {
    document.getElementById('no5').textContent = '2';
} else if (c == 4) {
    document.getElementById('no5').textContent = '3';
}

let score = 0;
b1.addEventListener("click", function () { event.preventDefault(); displ(all()); });
b2.addEventListener("click", function () { event.preventDefault(); displ(all()); });
b3.addEventListener("click", function () { event.preventDefault(); score++; displ(all()); });
b4.addEventListener("click", function () { event.preventDefault(); displ(all()); });
b5.addEventListener("click", function () { event.preventDefault(); displ(all()); });
b6.addEventListener("click", function () { event.preventDefault(); score++; displ(all()); });
b7.addEventListener("click", function () { event.preventDefault(); displ(all()); });
b8.addEventListener("click", function () { event.preventDefault(); displ(all()); });
b9.addEventListener("click", function () { event.preventDefault(); score++; displ(all()); });
b10.addEventListener("click", function () { event.preventDefault(); displ(all()); });
b11.addEventListener("click", function () { event.preventDefault(); displ(all()); });
b12.addEventListener("click", function () { event.preventDefault(); displ(all()); });
b13.addEventListener("click", function () { event.preventDefault(); displ(all()); });
b14.addEventListener("click", function () { event.preventDefault(); displ(all()); });
b15.addEventListener("click", function () { event.preventDefault(); score++; displ(all()); });
b16.addEventListener("click", function () { event.preventDefault(); displ(all()); });
b17.addEventListener("click", function () { event.preventDefault(); displ(all()); });
b18.addEventListener("click", function () { event.preventDefault(); displ(all()); });
b19.addEventListener("click", function () { event.preventDefault(); score++; displ(all()); });
b20.addEventListener("click", function () { event.preventDefault(); displ(all()); });

function loadbutton() {
    event.preventDefault();
    displ("loading");
    setTimeout(() => {

        let grade;
        if (((score * 100) / 3) > 90) {
            grade = "A+";
        } else if (((score * 100) / 3) > 80 && ((score * 100) / 3) <= 90) {
            grade = "A";
        } else if (((score * 100) / 3) > 70 && ((score * 100) / 3) <= 80) {
            grade = "B+";
        } else if (((score * 100) / 3) > 60 && ((score * 100) / 3) <= 70) {
            grade = "B";
        } else if (((score * 100) / 3) > 50 && ((score * 100) / 3) <= 60) {
            grade = "C+";
        } else if (((score * 100) / 3) > 40 && ((score * 100) / 3) <= 50) {
            grade = "C";
        } else if (((score * 100) / 3) > 30 && ((score * 100) / 3) <= 40) {
            grade = "D";
        } else if (((score * 100) / 3) > 20 && ((score * 100) / 3) <= 30) {
            grade = "E";
        } else if (((score * 100) / 3) >= 0 && ((score * 100) / 3) <= 20) {
            grade = "F";
        }

        let per = (score * 100) / 3;
        let time = new Date().toLocaleString();
        let user = {
            ...l,
            score,
            per,
            grade,
            time
        };


        document.getElementById("r1").innerText = score;
        document.getElementById("r2").innerText = per;
        document.getElementById("r3").innerText = grade;
        document.getElementById("r4").innerText = time;
        document.getElementById("r5").innerText = JSON.stringify(user, null, 2);
        displ("result");
    }, 5000);
}


