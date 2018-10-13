// Word guess game object
var game = {
    // Game constants
    totalGuess: 9,
    letters: [
        'a','b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
        'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
    ],
    words: [
        "joker",
        "arsene",
        "morgana",
        "zorro",
        "skull",
        "captain kidd",
        "panther",
        "carmen",
        "fox",
        "goemon",
        "queen",
        "johanna",
        "oracle",
        "necronomicon",
        "noir",
        "milady",
        "crow",
        "robin hood"
    ],

    // Random solution generator
    solution: function() {
        return this.words[Math.floor(Math.random() * this.words.length)];
    },

    // Gameplay elements
    wins: 0,
    attempts: [],
    guesses: 0,
    winner: "",
    current: [],

    // Sets up the game
    setup: function() {
        // Resets the solution, guesses, and attempts
        this.winner = this.solution().toLowerCase();
        this.guesses = this.totalGuess;
        this.attempts = [];
        
        // Creates the blanks for the word
        this.current = [];
        var i = 0;
        
        while(i < this.winner.length) {
            // If there's a space, then put a space instead of an underscore
            if(this.winner[i] == " ") {
                this.current.push("&nbsp;");
            } else {
                this.current.push("_");
            }
            i++;
        }

        // Puts the text on to the page
        document.getElementById("word").innerHTML = this.current.join(" ");
        document.getElementById("guess").innerHTML = this.guesses;
        document.getElementById("attempt").innerHTML = this.attempts;
    },

    // Allows for gameplay
    play: function(guess) {
        // Checks if the guess is a letter and if letter has been used.
        if((this.letters.indexOf(guess) >= 0) && (this.attempts.indexOf(guess) < 0)) {
            // Adds letter to list of attempts
            this.attempts.push(guess);
            document.getElementById("attempt").innerHTML = this.attempts.join(" ").toUpperCase();

            // Checks if guess is in the word
            if(this.winner.indexOf(guess) >= 0) {
                // Puts the currently guessed letter into the corresponding blank
                for(var i = this.winner.indexOf(guess); i < this.winner.length; i++) {
                    if(this.winner[i] == guess) {
                        this.current[i] = guess;
                    }
                }

                document.getElementById("word").innerHTML = this.current.join(" "); 

                // If there are no more blanks, then the player wins and game resets
                if(this.current.indexOf("_") < 0) {
                    this.wins++;
                    document.getElementById("win").innerHTML = this.wins;

                    this.setup();
                }
            }
            else {
                // Subtracts a guess and updates the screen;
                this.guesses--;
                document.getElementById("guess").innerHTML = this.guesses;

                // If the guesses is 0, then the game resets.
                if(this.guesses == 0) {
                    this.setup();
                }
            }
        }
    }
}

// Starts the game
game.setup();

document.addEventListener("keydown", function(event) {
    game.play(event.key.toLowerCase());
});