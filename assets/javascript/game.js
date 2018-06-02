
// variables
var moviebank = ["tonystark", "hansolo", "aragorn"];
var wins = 0;
var losses = 0;
var livesLeft = 10;
var wrongLetter = [];
var userGuess = [];
var underScoreGlobal = [];
var answer = [];
var j = document.getElementById("mainheader");

//FUNCTIONS!

//listens for correct letter
function eventListener() {
    document.onkeyup = function(event) {
    userGuess = event.key.toLowerCase();
        if (answer.indexOf(userGuess) > -1) {
            for (var i = 0; i < answer.length; i++) {
                if(answer[i] === userGuess) {
                    underScoreGlobal[i] = userGuess;
                    document.getElementById("movieword").textContent = underScoreGlobal.join(" ");
                    wins++;
                    winLose();
                }
            }
        }
        else {
            wrongLetter.push(userGuess);
            livesLeft--;
            display ();
            winLose();
        }
    };
}

// grabes random word from word bank and changes it too underscores
function wordBank() {
    var underScore = [];
    answer = moviebank[Math.floor(Math.random() * moviebank.length)];
    for (var i = 0; i < answer.length; i++) {
    underScore.push("_");
    console.log(underScore);
    };
    document.getElementById("movieword").textContent = underScore.join(" ");
    underScoreGlobal = underScore;
    underScore = [];
    };
// resets the game variables too starting values
function reset() {
    wrongLetter = [];
    userGuess = [];
    underScoreGlobal = [];
    answer;
};
//prints the changing values too the screen
function display() {
document.getElementById("lives").textContent = ("Lives Left = " + livesLeft);
document.getElementById("guesses").textContent = ("WRONG = " + wrongLetter);
document.getElementById("wins").textContent = ("Wins = " + wins);
document.getElementById("losses").textContent = ("Losses = " + losses);
};


// hides every html catagory
function currentHeader() {
    document.getElementById("moviegame").style.display = "none";
    document.getElementById("mainheader").style.display = "none";
};

//records win/loses and recalls the function which resets the game
function winLose() {
    if (wins === answer.length) {
        alert("YOU WIN!");
        wins++;
        display ();
        moviebtn();
    }
    else if (livesLeft === 0) {
        alert("YOU LOSE!");
        losses++;
        display();
        moviebtn();
    }
}

// changes the html content when catagory button is clicked
function moviebtn() {
    currentHeader();
    var x = document.getElementById("moviegame");
        if (x.style.display === "none") {
            x.style.display = "block";
        }
        else x.style.display = "none";
        display();
        wordBank();
        eventListener();
        winLose();
        };