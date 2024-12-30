// Number Guessing Game
let secretNumber = Math.floor(Math.random() * 100) + 1
let guess;
let attempts = 0;

while (guess !== secretNumber) {
    guess = parseInt(prompt('Guess a number between 1 and 100'));
    attempts++;

if (isNaN(guess)) {
    alert('Please enter a valid number!');
    continue;
}
if (guess < secretNumber) {
    alert('Too low! Try again.');
} else if (guess > secretNumber) {
    alert('Too high! Try again.');
} else {
    alert(`Congratulations dude!!!, ${secretNumber} is correct. You got it right after ${attempts} attempts`)
    break;
}
}
