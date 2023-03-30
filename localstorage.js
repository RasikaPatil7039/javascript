localStorage.setItem("1","rasika");
localStorage.setItem("2","krutika");
localStorage.setItem("3","rutuja");

console.log(localStorage.getItem("2"));

console.log(localStorage.length);

localStorage.clear();

console.log(localStorage.getItem("1"));


const names=["sita","gita","nita","tina"];
localStorage.setItem("names",JSON.stringify(names));
const studname=JSON.parse(localStorage.getItem("names"));
console.log(studname);


const player=[
    {
        name:"sachin",
        score:23

    },
    {
        name:"rohit",
        score:43

    },
    {
        name:"virat",
        score:33

    },
    {
        name:"dhoni",
        score:50

    },
    {
        name:"sachin",
        score:50

    }
];

localStorage.setItem("players",JSON.stringify(player));
const playername=JSON.parse(localStorage.getItem("player"));
console.log(playername);


sessionStorage.setItem("players",JSON.stringify(player));



