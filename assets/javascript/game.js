// Word guess game object
var game = {
    // Game constants
    totalGuess: 9,
    letters: [
        'a','b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
        'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
    ],
    words: [
        "eagle",
        "sparrow",
        "sperel",
        "superman",
        "comic",
        "pajamas",
        "hat",
        "lamp",
        "laptop",
        "desktop",
        "gundam"
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
    word: "",

    // Sets up the game
    setup: function() {
        // Resets the solution, guesses, and attempts
        this.word = this.solution().toLowerCase();
        this.guesses = this.totalGuess;
        this.attempts = [];
    },

    // Allows for gameplay
    play: function() {

    }
}

// Starts the game
game.setup();

document.addEventListener("keydown", function(event) {

});