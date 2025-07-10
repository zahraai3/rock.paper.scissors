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

function getHumanChoice(){

    let humanChois=prompt("Enter your choice:(rock,paper,scissors)");
    return humanChois;
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

function playGame(){
    for(let i=0;i<5;i++)
    {
        const humanChoice=getHumanChoice();
        const compChoice=getComputerChoice();

        playRound(humanChoice,compChoice);
    }
    console.log(`Final Score - You: ${humanScore}, Computer: ${compScore}`);

}
playGame();
