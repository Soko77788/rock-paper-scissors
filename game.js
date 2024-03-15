// variables
// humanScore
// computerScore
// array of r, p, s

// humanChooses r,p, or s

// get random index
// use random index to determine computerChooses r, p, or s


// winning conditions for human?
// if hC ==== 'r' && cC === 's' ||
    // increase humanScore
    // Log "you won!"


// if computer won
    // increase computerScore
    // Log "you Lost!"

// if tie
    // Log "it was a tie!"

// do you want to play again?
    // if yes, return
        // repeat the game 
    // if no 
        // stop
const scores = {
    human: 0,
    computer: 0,
}

const results = {
    wins: 0,
    loses: 0,
    rounds: 0,
    maxRounds: 0,
}

function playGame(){
    const playerChoice = prompt("Type r for Rock, p for Paper, or s for Scissors")
    
    const choices = ['r', 'p', 's']

    const computerChoice = choices[Math.floor(Math.random() * choices.length)]

        function win(){
if ((playerChoice.toLowerCase() === "r" && computerChoice === "s") || 
(playerChoice.toLowerCase() === "s" && computerChoice === "p") ||
(playerChoice.toLowerCase() === "p" && computerChoice === "r") ){
    return true;
} else{
    return false;
}


if (win()){
    alert(`You chose ${playerChoice} and beat the computer who chose ${computerChoice}`)
}else if (win() === "lost") {
    alert(`You chose ${playerChoice} and lost to the computer who chose ${computerChoice}`)} {
    alert("Do better!")}
