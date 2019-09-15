# Psychic-Game

This is a Letter Guessing Game

- How to Play?

  - Upon page load, the webpage has alreay selected a letter.

* Using your Keyboard, press a letter
  - If you guess correct, you will see prompt saying your guess is correct and
    win will increment by 1
  - If you guess wrong, your remaining guesses will be down by 1
  - Total guesses allowed per game is 10 -If you can't guess in 10 attemts, you
    will lose and prompt will be displayed

How to Test?

- Right click on the webpage, select inspect and go to console window.
- Computer guesses will be displayed here.

* win scenario

- Using keyboard, type a same letter you see on the console.

  - Win will be increased by 1
  - Remaining guesses will be reset to 10
  - Prompt will be displayed
  - New guess will be available on console window

* Loss scenario

- Using keyboard, type a wrong letter (should be different than displayed on
  console window)
  - Remaining guess will be decreased by 1
  - The letter you typed will be displayed in "Guesses so far"
- Repeat above step and notice
  - Remaining guess will be decreased by 1 each time you guess wrong letter
  - The letters you type will be listed in "Guesses so far" section
- Once you have no guesses left:

  - Loss will be increased by 1 and
  - Remaining guesses will be set to 10
  - Guesses so far will be cleared
  - Prompt will be displayed with stating correct letter
  - New guess will be displayed on console

* Reset Scenario

- Prior to test this, play a game for few times to generate some history for
  win/loss
- When you click Reset button:
  - Win will be cleared
  - Loss will be cleared
  - Remaining Guesses will be set to 10
  - Guesses So far will be cleared
  - A new guess will be displayed on console
