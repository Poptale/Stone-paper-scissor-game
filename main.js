//cursor code starts here
const dot = document.querySelector("[data-cursor-dot]");
const outline = document.querySelector("[data-cursor-outline]");
window.addEventListener("mousemove", (e)=>{
    const posX = e.clientX;
    const posY = e.clientY;
    dot.style.left = `${posX}px`;
    dot.style.top = `${posY}px`;
    outline.animate({top: `${posY}px`, left:`${posX}px`},{duration:100, fill:"forwards"});
});
//real code starts here
let stoneSound = new Audio ("stonesound.mp4");
let paperSound = new Audio ("papersouund.mp4");
let scissorSound = new Audio ("scissorsound.mp4");

let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choices");
const result = document.querySelector("#result");
const userScoreParagraph = document.querySelector("#user-score");
const computerScoreParagraph = document.querySelector("#computer-score");

const showWinner = (userWin) => {
    if (userWin) {
        userScore++;
        userScoreParagraph.innerText = userScore;
        result.innerText = "You win!";
    } else {
        compScore++;
        computerScoreParagraph.innerText = compScore;
        result.innerText = "You lose!";
    }
}

let genChoices = () => {
    let options = ["rock", "paper", "scissor"];
    let randomIndex = Math.floor(Math.random()*3);
    return options[randomIndex];
}

let playGame = (userChoice) => {
    const compChoice = genChoices();

    if( userChoice === compChoice ) {
        result.innerText = "Its a draw!";
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissor" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin);
    }
}
 
choices.forEach( (choice) => {
    choice.addEventListener("click", () => {
    let userChoice = choice.getAttribute("id");
    playGame(userChoice);
});
});