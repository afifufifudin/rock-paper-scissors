// console.log("Hello world");
let playerScore = 0
let computerScore = 0
let roundWinner = ''
let player;
let computer;

// const rock = document.querySelector("#rock")
// const paper = document.querySelector("#paper")
// const scissors = document.querySelector("#scissors")
const buttons = document.querySelectorAll(".button")
const player_choice = document.querySelector("#player-choice") 
const computer_choice = document.querySelector("#computer-choice")
const player_score = document.querySelector("#player-score")
const computer_score = document.querySelector("#computer-score")
const result_commentary = document.querySelector(".result")
const modal = document.querySelector(".modal")
const overlay = document.querySelector(".overlay") 
const play_again = document.querySelector(".play-again")

let playRound = (player, computer) => {
    let result;
    // player = getPlayerChoice();
    // computer = getComputerChoice();
    if(player === computer){
        result = (`both choose ${computer}, No one wins this round`);
        result_commentary.setAttribute("style", "color: None;")
        player_choice.setAttribute("style", "background-color: #eef1f5")
        computer_choice.setAttribute("style", "background-color: #eef1f5")
    } else if (
        // computer wins
        (player === 'rock' && computer === 'paper') ||
        (player === 'paper' && computer === 'scissors') ||
        (player === 'scissors' && computer === 'rock')
    ){
        result = (`${computer} beat ${player}, Computer wins this round`);
        computerScore ++;
        result_commentary.setAttribute("style", "color: red;")
        player_choice.setAttribute("style", "background-color: #ff998a")
        computer_choice.setAttribute("style", "background-color: #b0ffb1")

    } else if(
        // player wins
        (computer === 'rock' && player === 'paper') ||
        (computer === 'paper' && player === 'scissors') ||
        (computer === 'scissors' && player === 'rock')
    ){
        result = (`${player} beat ${computer}, You wins this round`);
        playerScore ++;
        result_commentary.setAttribute("style", "color: green;")
        player_choice.setAttribute("style", "background-color: #b0ffb1")
        computer_choice.setAttribute("style", "background-color: #ff998a")
        
    }
    return result
}

let game = () =>{
    let total_score = 0
    while(true){
        total_score = playerScore + computerScore;
        playRound();
        if(total_score === 5){
            console.log('Game over')
            console.log(`PLAYER ${playerScore} | ${computerScore} COMPUTER`);
            break;
        } else if(playerScore >= 3){
            console.log('Game over')
            console.log(`PLAYER ${playerScore} | ${computerScore} COMPUTER`);
            break;
        } else if(computerScore >= 3){
            console.log('Game over')
            console.log(`PLAYER ${playerScore} | ${computerScore} COMPUTER`);
            break;
        }
    }
}


let getComputerChoice = () =>{
    const choice = ['rock', 'paper', 'scissors'];
    const random = Math.floor(Math.random() * choice.length);
    return choice[random];
}

let update_score = () =>{
    player_score.textContent = `${playerScore}`
    computer_score.textContent = `${computerScore}`
}

let commentary = (result) => {
    result_commentary.textContent = `${result}`
}

let selection = (button) =>{
    player_choice.textContent = button.innerText;
}

let getComputerEmoji = (choice) =>{
    switch(choice){
        case 'rock':
            return '✊'
        case 'paper':
            return '✋'
        case 'scissors':
            return '✌️'
    }
}

let openModal = () =>{
    modal.classList.add('active')
    overlay.classList.add('active')
    play_again.classList.add('active')
}

let checkScore = (player, computer) =>{
    if(playerScore == 5 || computerScore == 5){
        if(playerScore == 5){
            modal.textContent = "You Win"
        }else{
            modal.textContent = "You Lose"
        }
        openModal();
    }
}

buttons.forEach((button)=>{button.addEventListener('click', ()=>{
    player = button.id
    computer = getComputerChoice()
    commentary(playRound(player, computer))
    update_score()
    selection(button)
    computer_choice.textContent = getComputerEmoji(computer)
    checkScore(playerScore, computerScore)
})})