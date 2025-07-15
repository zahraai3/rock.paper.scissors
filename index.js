 function getComputerChoice(){
    let compChoice=Math.floor(Math.random()*3);
    if (compChoice===0){
        return "rock";
    }
    else if (compChoice===1){
        return "paper"
    } 
    else{
        return "scissors"
    }
}


 
let compScore=0;
let humanScore=0;

function playRound(humanChoice, compChoice) {
  humanChoice = humanChoice.toLowerCase();

  if (humanChoice === compChoice) {
    console.log("a draw! both chose" + humanChoice);
  } 
  else if (
    (humanChoice === "rock" && compChoice === "scissors") ||
    (humanChoice === "scissors" && compChoice === "paper") ||
    (humanChoice === "paper" && compChoice === "rock")
  )
   {
    humanScore++;
    console.log(`You won! ${humanChoice} beats ${compChoice}`);
  }
   else {
    compScore++;
    console.log(`Computer won! ${compChoice} beats ${humanChoice}`);
  }
}

const scoreDiv = document.getElementById('score');
const resultsDiv = document.getElementById('results');


document.getElementById('rock').addEventListener('click',()=>{
  playRound('rock',getComputerChoice());
  updateScore();
});

document.getElementById('paper').addEventListener('click',()=>{
  playRound('paper',getComputerChoice());
  updateScore();
});

document.getElementById('scissors').addEventListener('click', () => {
  playRound('scissors', getComputerChoice());
  updateScore();
});



function updateScore(){
  scoreDiv.textContent =`Human: ${humanScore}|Computer: ${compScore}`;
  if (humanScore===5 || compScore===5){
        resultsDiv.textContent += humanScore === 5 ? " You won the game!" : " Computer won the game!";
       disableButtons();

  }
}

function disableButtons() {
  document.getElementById('rock').disabled = true;
  document.getElementById('paper').disabled = true;
  document.getElementById('scissors').disabled = true;
}


