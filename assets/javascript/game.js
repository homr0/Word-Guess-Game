// Creates the audio element for playing the victory music
var audioWin = document.createElement("audio");
audioWin.setAttribute("src", "assets/triumph.mp3");

// Word guess game object
var game = {
    // Game constants
    totalGuess: 9,
    mystery: [
        {
            word: "Joker",
            image: "joker.png"
        },

        {
            word: "Arsene",
            image: "Arsene.png"
        },

        {
            word: "Morgana",
            image: "morgana.png"
        },

        {
            word: "Zorro",
            image: "zorro.png"
        },

        {
            word: "Skull",
            image: "skull.png"
        },

        {
            word: "Captain Kidd",
            image: "captain_kidd.png"
        },

        {
            word: "Panther",
            image: "Panther.png"
        },

        {
            word: "Carmen",
            image: "carmen.png"
        },

        {
            word: "Fox",
            image: "fox.png"
        },

        {
            word: "Goemon",
            image: "P5-Goemon.png"
        },

        {
            word: "Queen",
            image: "queen.png"
        },

        {
            word: "Johanna",
            image: "P5_Johanna.png"
        },

        {
            word: "Oracle",
            image: "oracle.png"
        },

        {
            word: "Necronomicon",
            image: "P5_Necronomicon.png"
        },

        {
            word: "Noir",
            image: "noir.png"
        },

        {
            word: "Milady",
            image: "P5milady.png"
        },

        {
            word: "Crow",
            image: "PQ2_Crow.png"
        },

        {
            word: "Robin Hood",
            image: "Robin_Hood.png"
        }
    ],

    // Gameplay elements
    wins: 0,
    attempts: [],
    guesses: 0,
    winner: -1,
    current: [],

    // Sets up the game
    setup: function() {
        // Resets the guesses, attempts, and solution
        this.guesses = this.totalGuess;
        this.attempts = [];

        // Makes sure that the next solution isn't the same as the previous one
        let mystery = this.mystery;
        let runnerUp = this.winner;
        
        while(this.winner == runnerUp) {
            runnerUp = Math.floor(Math.random() * mystery.length);
        }

        this.winner = runnerUp;
        
        // Creates the blanks for the word
        this.current = [];
        let i = 0;
        let word = mystery[this.winner].word;
        
        while(i < word.length) {
            // If there's a space, then put a space instead of an underscore
            if(word[i] == " ") {
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
        // Checks if the letter has been used.
        if(this.attempts.indexOf(guess) < 0) {
            // Adds letter to list of attempts
            this.attempts.push(guess);
            document.getElementById("attempt").innerHTML = this.attempts.join(" ").toUpperCase();

            // Checks if guess is in the word
            let word = this.mystery[this.winner].word.toLowerCase();

            if(word.indexOf(guess) >= 0) {
                // Puts the currently guessed letter into the corresponding blank
                for(let i = word.indexOf(guess); i < word.length; i++) {
                    if(word[i] == guess) {
                        this.current[i] = guess;
                    }
                }

                document.getElementById("word").innerHTML = this.current.join(" ");

                // If there are no more blanks, then the player wins and game resets
                if(this.current.indexOf("_") < 0) {
                    this.wins++;
                    document.getElementById("win").innerHTML = this.wins;

                    // Changes the picture to reflect the win.
                    var image = document.getElementById("solution");
                    image.src = "assets/images/" + this.mystery[this.winner].image;
                    image.alt = this.mystery[this.winner].word;

                    // Plays the winning music.
                    audioWin.load();
                    audioWin.play();

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
    // Turns off the music if it's still playing.
    audioWin.pause();

    // Checks if input is a letter.
    if(event.key.match(/^[a-zA-Z]+$/)) {
        game.play(event.key.toLowerCase());
    }
});