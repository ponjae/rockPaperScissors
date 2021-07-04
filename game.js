plays = ['rock', 'paper', 'scissors']

function computerPlay() {
    index = Math.floor(Math.random() * 3)
    return plays[index]
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log(`It is a draw, both players played ${playerSelection}.`)
        return 'Draw'
    } else if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            console.log(`Computer wins! ${computerSelection} beats ${playerSelection}.`)
            return 'Computer'
        } else {
            console.log(`You win! ${playerSelection} beats ${computerSelection}.`)
            return 'User'
        }
    } else if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            console.log(`Computer wins! ${computerSelection} beats ${playerSelection}.`)
            return 'Computer'
        } else {
            console.log(`You win! ${playerSelection} beats ${computerSelection}.`)
            return 'User'
        }
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'scissors') {
            console.log(`Computer wins! ${computerSelection} beats ${playerSelection}.`)
            return 'Computer'
        } else {
            console.log(`You win! ${playerSelection} beats ${computerSelection}.`)
            return 'User'
        }
    }
}

function game() {
    let userScore = 0
    let computerScore = 0
    for (i = 0; i < 5; i++) {
        const userSelection = prompt('Choose your play!').toLowerCase()
        const computerSelection = computerPlay()
        result = playRound(userSelection, computerSelection)
        if (result === 'User') {
            userScore += 1
        } else if (result === 'Computer') {
            computerScore += 1
        }
    }
    console.log('**************** THE RESULT IS IN ****************')
    if (userScore > computerScore) {
        console.log(`You beat the computer. The final score was ${userScore}-${computerScore}`)
    } else if (computerScore > userScore) {
        console.log(`The computer beat you. The final score was ${userScore}-${computerScore}`)
    } else {
        console.log(`It´s a draw! The final score was ${userScore}-${computerScore}`)
    }
}

game()