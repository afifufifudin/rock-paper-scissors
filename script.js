// console.log("Hello world");
let playerScore = 0
let computerScore = 0

// let getComputerChoice = () =>{
//     const choice = ['rock', 'paper', 'scissors'];
//     const random = Math.floor(Math.random() * choice.length);
//     return choice[random];
// }

// let getPlayerChoice = ()=>{
//     const choice = prompt("What do you wanna use?");
//     return choice.toLowerCase();
// }

let playRound = (player, computer) => {
    let result;
    player = getPlayerChoice();
    computer = getComputerChoice();
    if(player === computer){
        result = (`both choose ${computer}, No one wins`);
    } else if (
        // computer wins
        (player === 'rock' && computer === 'paper') ||
        (player === 'paper' && computer === 'scissors') ||
        (player === 'scissors' && computer === 'rock')
    ){
        result = (`${computer} beat ${player}, Computer wins`);
        computerScore ++;
    } else if(
        // player wins
        (computer === 'rock' && player === 'paper') ||
        (computer === 'paper' && player === 'scissors') ||
        (computer === 'scissors' && player === 'rock')
    ){
        result = (`${player} beat ${computer}, Player wins`);
        playerScore ++;
    }
    return console.log(result)
}

let game = () =>{
    let total_score = 0
    while(true){
        total_score = playerScore + computerScore;
        playRound();
        console.log(`PLAYER ${playerScore} | ${computerScore} COMPUTER`);
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
    // while((total_score !== 5) || (playerScore || computerScore <= 3)){
    //     console.log(`PLAYER ${playerScore} | ${computerScore} COMPUTER`);
    //     playRound();
    //     total_score = playerScore + computerScore;
    // }
}

game();

console.log(`PLAYER ${playerScore} | ${computerScore} COMPUTER`);