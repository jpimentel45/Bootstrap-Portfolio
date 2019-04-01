document.addEventListener("keypress", (event) => {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    var computerGuess = keyChoice[Math.floor(Math.random() * keyChoice.length)];
    function correctGuess() {
        wins++;
        document.querySelector(".wins").innerHTML = "Wins: " + wins;
        newGame();
        document.querySelector(".userGuess").innerHTML = " ";
    }
    function incorrectGUess() {
        losses++;
        document.querySelector(".loses").innerHTML = "Loses: " + loses;
        newGame();
        document.querySelector(".userGuess").innerHTML = " ";
    }
    function newGame() {
        guesses = 12;
        document.querySelector(".guessesLeft").innerHTML = "Guesses left: " + guesses;
    }
    if (userGuess === computerGuess) {
        correctGuess();
    } else {
        guesses--;
        document.querySelector(".guessesLeft").innerHTML = "Guesses left: " + guesses;
        document.querySelector(".userGuess").append(" " + userGuess + ", ");
    }
    if (guesses === 0) {
        incorrectGUess();
    }
});