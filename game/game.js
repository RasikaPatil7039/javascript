
// let startbtn = document.querySelector("#startbtn");
// startbtn.addEventListener("click", startgame)
// function startgame() {
//     window.location.href = "index.html";
// }

let Position;
let attemptLeft;
let getRandomNumber = function (limit) {
    return Math.floor(Math.random() * limit);
};
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
let buttonBgColor;
function initializeBoard() {
    Position = hideAndPlaceOnBoard(1, 40);
    console.log(Position);
    attemptLeft = 6;
    updateAttemptLeft();
    let gameboard = document.querySelector(".gameboard");
    for (let buttonValue = 1; buttonValue <= 40; buttonValue++) {
        if (buttonValue == 10) {
            gameboard.appendChild(document.createElement("br"));
        }
        let button = document.createElement("button");
        button.value = buttonValue;
        button.style.backgroundColor = buttonBgColor;
        button.className = "button";
        button.id = buttonValue;
        button.addEventListener("click", checkHandler);
        gameboard.appendChild(button);
    }
}
initializeBoard();
function hideAndPlaceOnBoard(min, max) {
    return randomNumber(min, max);
}
function checkHandler(event) {
    if (attemptLeft >= 1) {
        if (event.target.value == Position) {
            document.getElementById(Position).style.backgroundColor = 'green'
            alert("You Found You Win In Turn " + attemptLeft);
        }
        else if (event.target.value > Position) {
            document.getElementById(event.target.value).style.backgroundColor = "red";
            attemptLeft -= 1;
        }
        else if (event.target.value < Position) {
            document.getElementById(event.target.value).style.backgroundColor = "yellow";
            attemptLeft -= 1;
        }
        updateAttemptLeft();
    }
    else {
        location.replace("start.html");
    }
}
function updateAttemptLeft() {
    document.getElementById("attempt").innerHTML = attemptLeft;
}