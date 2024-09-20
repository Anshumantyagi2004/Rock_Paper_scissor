let userScore = 0;
let compScore = 0;
let drawScore = 0;

let choices = document.querySelectorAll(".choice")
let msg = document.querySelector("#msg")

let userScorePara = document.querySelector("#user-Score");
let compScorePara = document.querySelector("#comp-Score");
let drawScorePara = document.querySelector("#draw-Score");

let genCompChoice = () => {
    let options = ["rock","paper" ,"scissor"]
    let randomIdx = Math.floor(Math.random() * 3)
    return options[randomIdx]
};

let drawGame = () => {
    drawScore++
    drawScorePara.innerText = drawScore
    msg.innerText = "Draw Play Again!"
    msg.style.backgroundColor = "orange";
}

let showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++
        userScorePara.innerText = userScore
        msg.innerText = `You Win. You choose ${userChoice} & Comp choose ${compChoice} choose Again!`
        msg.style.backgroundColor = "green"
    } else {
        compScore++
        compScorePara.innerText = compScore
        msg.innerText = `You Lost. You choose ${userChoice} & Comp choose ${compChoice} choose Again!`
        msg.style.backgroundColor = "red"
    }
}

let playGame = (userChoice) => {
    let compChoice = genCompChoice()
    if (userChoice === compChoice) {
        drawGame()
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissor" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let userChoice = choice.getAttribute("id")
        playGame(userChoice)
    });
});