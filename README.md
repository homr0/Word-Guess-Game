# Word-Guess-Game

A word guessing game

---

## Instructions

1. Type a letter on the keyboard.
2. The letter will show up on **Letters Already Guessed**.
3. If the letter is incorrect, the **Number of Guesses Remaining** decreases by 1.
4. If you run out of guesses, then you ***lose*** and the game restarts.
5. If the letter is correct, it will show up in the **Current Word**.
6. Once all of the letters in the **Current Word** have been guessed, then you ***win*** and the game restarts.

## Developer Diary

For this word guessing game, a random word is picked where all of the letters need to be guessed to win. If the word is not guessed within the number of guess limits, then the player loses.

To implement this in my program, I kept the words that could be guessed in an array and then used a random number generator to pick the word to be guessed. Each letter (and only letters) would be logged from the keyboard and would be counted as a guess if it had not been used as a guess already.

Afterward, the letters would be checked against the answer and if the string of letters didn't match the word, the player would be free to guess again if they still had any guesses left to use. If the player didn't have any guesses left, the player would lose and the program would reset the game. Otherwise, the player would have a win added to the screen as well as trigger the victory music to play in the background.