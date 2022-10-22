let userScore =0;
let computerScore =0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result");
const papel_div = document.getElementById("Papel");
const gunting_div = document.getElementById("Gunting");
const bato_div = document.getElementById("Bato");


// const movesLeft = document.querySelector('.movesleft');
// 				moves++;
// 				movesLeft.innerText = `Moves Left: ${10-moves}`;


function getComputerChoice() {
    const choices = ['Papel', 'Gunting', 'Bato'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
    
}
 getComputerChoice();

function win(userChoice, computerChoice) {
    const userChoice_div = document.getElementById("userChoice");
    const smallUserWord = "user".fontsize(3).sup();
    const smallCompWord = "comp".fontsize(3).sup();
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = userChoice + smallUserWord + " laban sa " + computerChoice + smallCompWord + ". Panalo ka! 🥳";
    userChoice_div.classList.add('green-glow');
    setTimeout(() => { userChoice_div.classList.remove('.green-glow')}, 300);
}

function lose(userChoice, computerChoice){
    const userChoice_div = document.getElementById("userChoice");
    const smallUserWord = "user".fontsize(3).sup();
    const smallCompWord = "comp".fontsize(3).sup(); 
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
   
    result_p.innerHTML = userChoice + smallUserWord + " laban sa " + computerChoice + smallCompWord + ". talo ka...😭";
    userChoice_div.classList.add('red-glow');
    setTimeout(() => { userChoice_div.classList.remove('.red-glow')}, 300);
}

function draw(userChoice, computerChoice) {
    const userChoice_div = document.getElementById("userChoice");
    const smallUserWord = "user".fontsize(3).sup();
    const smallCompWord = "comp".fontsize(3).sup();
    result_p.innerHTML = userChoice + smallUserWord + " laban sa " + computerChoice + smallCompWord + ". Tabla.🤪";
    userChoice_div.classList.add('gray-glow');
    setTimeout(() => { userChoice_div.classList.remove('.gray-glow')}, 300);
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
}

// const reset = () => {
//     userScore = 0;
//     computerScore = 0;
//     document.querySelector("userScore").innerHTML = userScore;
//     document.querySelector("computerScore").innerHTML = computerScore;
//  }

function main() {
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

main();

function reset(){
    document.getElementById("user-score").innerHTML = 0;
    document.getElementById("computer-score").innerHTML = 0;
    document.getElementById("result").innerHTML = ("Tayo na at mag laro!");
}
