// Word guess game object
var game = {
    // Game constants
    totalGuess: 9,
    letters: [
        'a','b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
        'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
    ],
    words: [
        /*"eagle",
        "sperel",
        "superman",
        "comic",
        "pajamas",
        "hat",
        "lamp",
        "laptop",
        "desktop",
        "gundam",*/
        "bald eagle",
        //"worm",
        "keyboard"
    ],

    // Random solution generator
    solution: function() {
        return this.words[Math.floor(Math.random() * this.words.length)];
    },

    // Gameplay elements
    wins: 0,
    played: 1,
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
        document.getElementById("word").innerHTML = this.current.join(" ");;
        document.getElementById("guess").innerHTML = this.guesses;
        document.getElementById("attempt").innerHTML = this.attempts;
    },

    // Allows for gameplay
    play: function(guess) {
        // Checks if the guess is a letter.
        if(this.letters.indexOf(guess) >= 0) {

        }
    }
}

// Starts the game
game.setup();
document.addEventListener("keydown", function(event) {
    game.play(event.key.toLowerCase());
});