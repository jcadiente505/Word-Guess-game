
// variables
var moviebank = ["tony stark", "han solo", "aragorn"];
var songsbank = ["tiny dancer", "only the good die young", "isnt she lovely"];
var historybank = ["william i", "joan of Arc", "alexander the Great"];
var sciencebank = ["gravity", "sun", "meteor"];
var wins = 0;
var losses = 0;
var livesLeft = 10;
var wrongLetter = [];
var userGuess = [];
var underScoreGlobal = [];
var answer;
var j = document.getElementById("mainheader");
// 

// functions
// hides every html catagory
function currentHeader() {
    document.getElementById("moviegame").style.display = "none";
    document.getElementById("songsgame").style.display = "none";
    document.getElementById("historygame").style.display = "none";
    document.getElementById("sciencegame").style.display = "none";
    document.getElementById("mainheader").style.display = "none";
}

// changes the html content when catagory button is clicked
function moviebtn() {
    var underScore = [];
    currentHeader();
    var x = document.getElementById("moviegame");
        if (x.style.display === "none") {
            x.style.display = "block";
        }
        else x.style.display = "none";
// grabes random word from word bank and changes it too underscores
        answer = moviebank[Math.floor(Math.random() * moviebank.length)];
        for (var i = 0; i < answer.length; i++) {
            underScore.push("_")
            console.log(underScore)
        }
        document.getElementById("movieword").textContent = underScore.join(" ");
        underScoreGlobal = underScore;
        underScore = [];
//listens for correct letter
        document.onkeyup = function(event) {
            var letter = event.key.toLowerCase ();{
                if (answer.indexOf(letter) > -1) {
                    for (i = 0; i < answer.length; i++) {
                        if(answer[i] === letter) {
                            underScore[i] = letter;
                            wins++;
                            winLose();
                        }
                    }
                }
                else {
                    wrongLetter.push(letter);
                    livesLeft--;
                    winLose()
                }
            };
        };
//records win/loses and recalls the function which resets the game
        function winLose() {
            if (wins === answer.length) {
                alert("YOU WIN!")
                moviebtn()
            }
            else if (livesLeft === 0) {
                alert("YOU LOSE!")
                moviebtn()
            }
        }
    }

function songsbtn() {
    currentHeader();    
    var x = document.getElementById("songsgame");
        if (x.style.display === "none") {
            x.style.display = "block";
        }
        else x.style.display = "none";

        answer = songsbank[Math.floor(Math.random() * songsbank.length)];
        for (var i = 0; i < answer.length; i++) {
            underScore.push("_")
        }
        document.getElementById("songsword").textContent = underScore;
}

function historybtn() {
    var underScore3 = [];
    currentHeader();
    var x = document.getElementById("historygame");
        if (x.style.display === "none") {
            x.style.display = "block";
        }
        else x.style.display = "none"

        answer = historybank[Math.floor(Math.random() * historybank.length)];
        for (var i = 0; i < answer.length; i++) {
            underScore3.push("_")
        }
        document.getElementById("historyword").textContent = underScore3;
}

function sciencebtn() {
    var underScore4 = [];
    currentHeader();
    var x = document.getElementById("sciencegame");
        if (x.style.display === "none") {
            x.style.display = "block";
        }
        else x.style.display = "none"

        answer = sciencebank[Math.floor(Math.random() * sciencebank.length)];
        for (var i = 0; i < answer.length; i++) {
            underScore4.push("_")
        }
        document.getElementById("scienceword").textContent = underScore4;
}
// 
