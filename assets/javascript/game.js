// Variables
var chars = "abcdefghijklmnopqrstuvwxyz";
var guess = chars.charAt(Math.floor(Math.random() * chars.length));
console.log(guess); //just to test a game (open dev.tool to look at the computer guess)
var win = 0;
var loss = 0;
var remainingGuess = 10;
var userText = document.getElementById("myGuess");

// document.getElementById("compGuess").innerHTML = guess;
document.getElementById("remainingGuesses").innerHTML = remainingGuess;

// Reset function - this will reset remaining guesses and comp guess
function reset() {
  guess = chars.charAt(Math.floor(Math.random() * chars.length));
  //   document.getElementById("compGuess").innerHTML = guess;
  document.getElementById("guessHistory").innerHTML = " ";
  remainingGuess = 10;
  document.getElementById("remainingGuesses").innerHTML = remainingGuess;
  userText.innerHTML = " ";
  return guess;
}
// DOM values for compGuess and remainingGuesses

// Key up function
document.onkeyup = function(event) {
  userText.textContent = event.key;
  document.getElementById(
    "guessHistory"
  ).innerHTML += `${userText.innerHTML} , `; //adding user key input to guess history
  var lowerCase = userText.innerHTML.toLowerCase();
  // comparing user selected char to comp char
  if (lowerCase === guess) {
    win++;
    // remainingGuess--;
    document.getElementById("totalWins").innerHTML = win;

    document.getElementById("guessHistory").innerHTML = " ";
    alert(`CORRECT!, Letter was ${guess}`); //alerts correct char
    reset();
    console.log(guess);
    // document.getElementById("compGuess").innerHTML = reset();
  } else {
    remainingGuess--;
    document.getElementById("remainingGuesses").innerHTML = remainingGuess;
  }
  // function to increment loss if no remaining guesses left
  if (remainingGuess === 0) {
    loss++;

    document.getElementById("totalLosses").innerHTML = loss;
    alert(`WRONG!, letter was ${guess}`);
    reset();
    console.log(guess);
  }
};

function masterReset() {
  guess = chars.charAt(Math.floor(Math.random() * chars.length));
  console.log(guess);
  // document.getElementById("compGuess").innerHTML = guess;
  remainingGuess = 10;
  document.getElementById("remainingGuesses").innerHTML = remainingGuess;
  document.getElementById("totalWins").innerHTML = " ";
  document.getElementById("totalLosses").innerHTML = " ";
  userText.innerHTML = " ";
  document.getElementById("guessHistory").innerHTML = " ";
}

//Some Animation

//Set interval to change background color
setInterval(function() {
  var randomColor = Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = `#${randomColor}`;
}, 2000);
