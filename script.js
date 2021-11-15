'use-strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);

document.querySelector('.number').textContent = '?';

let score = 20;
let highScore = 0;

const displayMessage = (message) => {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    // If input does not contain number value
    if (!guess) {
        displayMessage('No Number!');
    }
    // Player wins
    else if (guess === secretNumber) {
        displayMessage('Correct Number!');
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.highscore').textContent = score;

        if (score > highScore) {
            highScore = score;
            document.querySelector('..highscore').textContent = highScore;
        }
    }
    // Guess is wrong
    else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? 'Too high!' : 'Too low');
        if (score > highscore) {
            highscore = score;
            document.querySelector('..highscore').textContent = highscore;
        }
            document.querySelector('.score').textContent = score - 1;
            score -= 1;
        }
        else {
            displayMessage('You lost the game!');
            document.querySelector('.score').textContent = 0;
        }
    }
});


document.querySelector('.again').addEventListener('click', function () {
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = 20;
    score = 20;
    // document.querySelector('.highscore').textContent = '0';
    document.querySelector('.guess').value = '';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('body').style.backgroundColor = '#222';

    secretNumber = Math.trunc(Math.random() * 20) + 1;
    console.log(secretNumber);

    document.querySelector('.number').textContent = '?';
});



    //Guess is too high
    // else if (guess > secretNumber) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = 'Too high!';
    //         document.querySelector('.score').textContent = score - 1;
    //         score -= 1;
    //     }
    //     else {
    //         document.querySelector('.message').textContent = 'You lost the game!';
    //         document.querySelector('.score').textContent = 0;
    //     }
    // }
    //Guess is too low
    //     else if (guess < secretNumber) {
    //         if (score > 1) {
    //             document.querySelector('.message').textContent = 'Too low!';
    //             document.querySelector('.score').textContent = score - 1;
    //             score -= 1;
    //         }
    //         else {
    //             document.querySelector('.message').textContent = 'You lost the game!';
    //             document.querySelector('.score').textContent = 0;
    //         }
    //     }
