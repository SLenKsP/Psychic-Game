// Variables
var chars = "abcdefghijklmnopqrstuvwxyz";
var guess = chars.charAt(Math.floor(Math.random() * chars.length));
// var totalGuess = 10;
var win = 0;
var loss = 0;
var remainingGuess = 10;
var userText = document.getElementById("myGuess");

document.getElementById("compGuess").innerHTML = guess;
document.getElementById("remainingGuesses").innerHTML = remainingGuess;

// Reset function - this will reset remaining guesses and comp guess
function reset() {
  var guess = chars.charAt(Math.floor(Math.random() * chars.length));
  //   document.getElementById("compGuess").innerHTML = guess;
  remainingGuess = 10;
  document.getElementById("remainingGuesses").innerHTML = remainingGuess;
  return guess;
}
// DOM values for compGuess and remainingGuesses

// Key up function
document.onkeyup = function(event) {
  userText.textContent = event.key;
  document.getElementById(
    "guessHistory"
  ).innerHTML += `${userText.innerHTML} , `; //adding user key input to guess history

  // comparing user selected char to comp char
  if (userText.innerHTML === guess) {
    win++;
    // remainingGuess--;
    document.getElementById("totalWins").innerHTML = win;
    document.getElementById("guessHistory").innerHTML = " ";
    alert(`Letter was ${guess}`); //alerts correct char
    // reset();
    document.getElementById("compGuess").innerHTML = reset();
  } else {
    remainingGuess--;
    document.getElementById("remainingGuesses").innerHTML = remainingGuess;
  }
  // function to increment loss if no remaining guesses left
  if (remainingGuess === 0) {
    loss++;
    document.getElementById("totalLosses").innerHTML = loss;
    alert(`Correct letter was ${guess}`);
    document.getElementById("guessHistory").innerHTML = " ";
    remainingGuess = 10;
    document.getElementById("remainingGuesses").innerHTML = remainingGuess;
  }
};
