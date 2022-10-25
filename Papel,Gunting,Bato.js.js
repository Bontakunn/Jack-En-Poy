let userScore =0;
let computerScore =0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result");
const papel_div = document.getElementById("Papel");
const gunting_div = document.getElementById("Gunting");
const bato_div = document.getElementById("Bato");
const matchHistory_div = document.getElementById(".score-board");



function match_his (){
     let computerScore_span = document.getElementById("computerScore").innerHTML;
     let userChoice = document.getElementById ("userChoice").innerHTML;
document.querySelector ("#his").innerHTML += computerScore_span + "vs" + userChoice + "<br>";
}


function getComputerChoice() {
    const choices = ['Papel', 'Gunting', 'Bato'];
    const randomNumber = Math.floor(Math.random() * 3);
   return choices[randomNumber];   
 }

function win(userChoice, computerChoice) {
    const smallUserWord = "user".fontsize(3).sup();
    const smallCompWord = "comp".fontsize(3).sup();
    const userChoice_div = document.getElementById("userChoice");
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = userChoice + smallUserWord + " laban sa " + computerChoice + smallCompWord + ". Panalo ka! 🥳";
}

function lose(userChoice, computerChoice){
    const userChoice_div = document.getElementById("userChoice");
    const smallUserWord = "user".fontsize(3).sup();
    const smallCompWord = "comp".fontsize(3).sup(); 
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
   
    result_p.innerHTML = userChoice + smallUserWord + " laban sa " + computerChoice + smallCompWord + ". talo ka...😭";
    
}

function draw(userChoice, computerChoice) {
    const userChoice_div = document.getElementById("userChoice");
    const smallUserWord = "user".fontsize(3).sup();
    const smallCompWord = "comp".fontsize(3).sup();
    result_p.innerHTML = userChoice + smallUserWord + " laban sa " + computerChoice + smallCompWord + ". Tabla.🤪";
}

function game(userChoice){
    const computerChoice = getComputerChoice();
    switch(userChoice + computerChoice){
        case "BatoGunting":
        case "PapelBato":
        case "GuntingBato":
            win(userChoice, computerChoice);
            break;
         case "BatoPapel":
         case "PapelGunting":    
         case "GuntingBato":
            lose(userChoice, computerChoice);
         break;
         case "BatoBato":
         case "PapelPapel":
         case "GuntingGunting":
            draw(userChoice, computerChoice);
         break;

}
addMatchHistory(userChoice, computerChoice);
  declareWinner();
};

const addMatchHistory = (userChoice, computerChoice) => {
    const table = document.getElementById("table");
    const row = table.insertRow(1);
    const cellOne = row.insertCell();
    const cellTwo = row.insertCell();
    const cellThree = row.insertCell();
    const winnerMessage = document.getElementById("result").innerText;
    cellOne.innerHTML = ` ${userChoice}`;
    cellTwo.innerHTML = ` ${computerChoice}`;
    cellThree.innerHTML = "Winner";
    cellThree.innerHTML = `${winnerMessage}`;
  };

function mainGame() {
    papel_div.addEventListener('click', function() {
        game("Papel");
    })
    gunting_div.addEventListener('click', function() {
        game("Gunting");
    })
    bato_div.addEventListener('click', function() {
        game("Bato");
    })
}

mainGame();

function reset(){
    document.getElementById("user-score").innerHTML = 0;
    document.getElementById("computer-score").innerHTML = 0;
    document.getElementById("result").innerHTML = ("Tayo na at mag laro!");
}

reset();
