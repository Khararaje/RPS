var userScore = 0;
var compScore = 0;
const userScore_Span = document.getElementById('user-score');
const aiScore_Span = document.getElementById('ai-score');
const scoreBoard_div = document.querySelector('.Score-board');
const result_div = document.querySelector('.result > p');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');

function getComputerChoice(){
  const choice = ['r', 'p', 's'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choice[randomNumber];
}

function convertLetter(letter){
  if(letter === "r") return "Rock";
  if(letter === "p") return "Paper";
  if(letter === "s") return "Scissors";
}

function win(userChoice, computerChoice){
    userScore++;
    userScore_Span.innerHTML = userScore;
    aiScore_Span.innerHTML = compScore;
    result_div.innerHTML = "Congratulations " + convertLetter(userChoice) + " beats " + convertLetter(computerChoice) + " You win!";
}

function lose(userChoice, computerChoice){
  compScore++;
  userScore_Span.innerHTML = userScore;
  aiScore_Span.innerHTML = compScore;
  result_div.innerHTML = "Congratulations! " + convertLetter(userChoice) + " loses to " + convertLetter(computerChoice) + " You lose!";
}

function draw(userChoice, computerChoice){
  console.log("Draw!");
  result_div.innerHTML = "Uhm! " + convertLetter(userChoice) + " equals " + convertLetter(computerChoice);
}


function game(userChoice){
  const computerChoice = getComputerChoice();
  switch(userChoice + computerChoice){
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      console.log("User Wins!");
      break;
    case "rp":
    case "ps":
    case "sr":
      lose();
      console.log("Computer Wins!");
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, computerChoice);
      break;
    }

}

function main(){
rock_div.addEventListener('click', function(){
  game("r");
})

paper_div.addEventListener('click', function(){
  game("p");
})

scissors_div.addEventListener('click', function(){
  game("s");
})
}

main();
