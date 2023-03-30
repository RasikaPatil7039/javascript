const sumbutton = document.querySelector("#sum");
const colorbutton = document.querySelector("#color");

sumbutton.addEventListener('click', (e) => {
    let sum = 0;
    for (let i = 1; i < 10000000000; i++) {
        sum += i;
    }
    alert("sum=" + sum)
})


colorbutton.addEventListener('click', (e) => {
    if (document.body.style.backgroundColor != "green") {
        document.body.style.backgroundColor = "green";
    }
    else {
        document.body.style.backgroundColor = "cyan";
    }
})