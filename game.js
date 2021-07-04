plays = ['rock', 'paper', 'scissors']
const rock = document.getElementById('rock')
const paper = document.getElementById('paper')
const scissors = document.getElementById('scissors')
const playInfo = document.getElementById('info')
const score = document.getElementById('score')
const final = document.getElementById('final')
let userScore = 0
let computerScore = 0

function computerPlay() {
    index = Math.floor(Math.random() * 3)
    return plays[index]
}

function playRound(playerSelection) {
    computerSelection = computerPlay()
    if (playerSelection === computerSelection) {
        playInfo.innerText = `It is a draw, both players played ${playerSelection}.`
    } else if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            playInfo.innerText = `Computer wins! Rock beats ${playerSelection}.`
            computerScore += 1
        } else {
            playInfo.innerText = `You win! Scissors beats ${computerSelection}.`
            userScore += 1
        }
    } else if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            playInfo.innerText = `Computer wins! Paper beats ${playerSelection}.`
            computerScore += 1
        } else {
            playInfo.innerText = `You win! Rock beats ${computerSelection}.`
            userScore += 1
        }
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'scissors') {
            playInfo.innerText = `Computer wins! Scissors beats ${playerSelection}.`
            computerScore += 1
        } else {
            playInfo.innerText = `You win! Paper beats ${computerSelection}.`
            userScore += 1
        }
    }
}

function updateScore() {
    score.innerText = `${userScore} - ${computerScore}`
}

function validateWinner() {
    if (userScore > 4 || computerScore > 4) {
        score.style.display = 'none'
        playInfo.style.display = 'none'
        rock.style.display = 'none'
        paper.style.display = 'none'
        scissors.style.display = 'none'
        let winner = ''
        if (userScore > 4) {
            winner = 'You'
        } else {
            winner = 'Computer'
        }
        final.innerText = `GAME OVER. ${winner} won. The final score was ${userScore} - ${computerScore}.`
    }

}

// Event listeners
rock.addEventListener('click', function () {
    const play = plays[0]
    playRound(play)
    updateScore()
    validateWinner()
})
paper.addEventListener('click', function () {
    const play = plays[1]
    playRound(play)
    updateScore()
    validateWinner()
})
scissors.addEventListener('click', function () {
    const play = plays[2]
    playRound(play)
    updateScore()
    validateWinner()
})