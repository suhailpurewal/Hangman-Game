
// List of all words
var wordList = ["atlantis", "challenger", "columbia", "discovery", "enterprise", "endeavour"];
// Picks random word using math
var wordChoice = wordList[Math.floor(Math.random() * wordList.length)];
// Replaces word with appropriate number of dashes
var dashWord =  wordChoice.replace(/\w/g,"_ ");
// Letter array for word choice
var arrayLetters = [];
// Splits word into an array of letters
// var letters = wordChoice.split("");
// 	for(var i = 0; i < letters.length; i++);
// Alphabet of valid inputs
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// Not sure if i need most of these, but have them here just in case i need them
// var wrongLetters = [];
// var correctLetters = [];
// var correctinorder = ""
// var currentLetter = ""
// var guessedLetters = [];
// remaining guesses in game/round
var guessesRemaining = 9;
var guessesMade = [];
// win/loss count
var loseCount = 0;
var winCount = 0;
var html = "<p><h1>";


// functions

function resetHtml() {
	// reset the html variable so we can rebuild it after next user guess
	html="<p><h1>";

}

function consoleLogs() {
	console.log("wordChoice: " + wordChoice + "\n");
	console.log("guessesRemaining: " + guessesRemaining + "\n");
	console.log("guessesMade: " + guessesMade + "\n");
	console.log("arrayLetters: " + arrayLetters + "\n");
	console.log("winCount: " + winCount + "\n" + "losses: " + loseCount + "\n");
	console.log("--------------------------------");
}


function splitWordIntoArray() {
	for (var i = 0, j = 0; i < wordChoice.length; i++) {
		arrayLetters[j] = wordChoice.charAt(i);
		j++
		if (wordChoice.charAt(i) != " ") {
			arrayLetters[j] = false;
		} else {
			arrayLetters[j] = true;
		}
		j++
	}
}

function updateGame() {

	for (i = 0, j = 0; i < (arrayLetters.length / 2); i++) {
			if (arrayLetters[j+1] == true) {
			html += arrayLetters[j];
		} else {
			html += "_";
		}
		html += "&nbsp;";
		j=j+2;
	}
	html += "</h1></p>"	

	document.querySelector("#game").innerHTML = html;


	htmlStats = "<p><h3>Wins: " + winCount + " Losses: " + loseCount + " Guesses Left : " + guessesRemaining + "</h3></p>";
	document.querySelector("#stats").innerHTML = htmlStats;


	htmlGuesses = "<p><h3>"
	for (var i = 0; i < guessesMade.length; i++) {
		htmlGuesses += guessesMade[i] + "&nbsp;";
	}
	htmlGuesses += "</h3></p>";
	document.querySelector("#guessedletters").innerHTML = htmlGuesses;
}

function resetGame() {

  guessesRemaining = 9;
  guessesMade = [];
  wordChoice = wordList[Math.floor(Math.random() * wordList.length)];

  arrayLetters = [];
  splitWordIntoArray();

  var htmlInstructions="<p><h3>Press any key to begin guessing</p></h3>";
  document.querySelector("#instructions").innerHTML = htmlInstructions;
  var htmlGameInitial = "<p><h1>";

  for (var i = 0; i < wordChoice.length; i++) {
    if (wordChoice.charAt(i) == " ") {
      htmlGameInitial += "&nbsp;&nbsp;";
    } else {
      htmlGameInitial += "_&nbsp;";
    }
  }


  htmlGameInitial += "</h1></p>"
  document.querySelector("#game").innerHTML = htmlGameInitial;
  var htmlStats = "<p><h3>" + "Wins: " + winCount + " Losses: " + loseCount + " Guesses Left : " + guessesRemaining + "</h3></p>";
  document.querySelector("#stats").innerHTML = htmlStats;
}


function validateUserGuess() {
  // if user's pick doesn't exist in the array of prior picks, and
  // it also doesn't exist in the array of the letters of the word
  // to be guessed, then reduce the guesses left by one and play
  // doh sound. make sure to verify user's pick is in the alphabet,
  // otherwise ignore it.
  if (arrayLetters.indexOf(userGuess) < 0 && guessesMade.indexOf(userGuess) < 0 && alphabet.indexOf(userGuess) >= 0) {
    guessesRemaining--;
    var audio = new Audio("assets/audio/doh1.mp3");
    audio.play();
  }
  // add all alphabetic guesses to guessesMade if not already in there
  if (guessesMade.indexOf(userGuess) < 0 && alphabet.indexOf(userGuess) >= 0) {
    guessesMade[guessesMade.length]=userGuess;
  }

  // if userGuess exists in the array then switch its associated
  // array pair from false to true
  for (var i = 0; i < arrayLetters.length; i++) {
    if (arrayLetters[i] === userGuess) {
      // if the letter wasn't previously guessed then play woohoo
      if (arrayLetters[i+1] == false) {
        var audio = new Audio("assets/audio/woohoo.mp3");
        audio.play();
      }
      arrayLetters[i+1] = true;
    }
  } 
}

function hasUserWon() {
  // check to see if user has won which will mean all the
  // letters have been revealed (no false flags remain in the array)
  if (arrayLetters.indexOf(false) < 0 ) {
    console.log("USER WINS");
    // user has won, increment wins
    wins++;
    // play homer's victory song
    var audio = new Audio("assets/audio/champion.mp3");
    audio.play();
    // update homer's image to victory image
    var homerImage="<img src=\"assets/images/homerwins.jpg\" class=\"img-responsive\" alt=\"Simpsons Characters\">";
    document.querySelector("#homerImage").innerHTML = homerImage;
    // finally reset the game for new round
    resetGame();
  } 
}

function hasUserLost() {
  // check to see if user has lost which will mean guessesLeft = 0
  if (guessesRemaining == 0) {
    console.log("USER LOSES");
    // user has lost, increment losses
    losses++;
    // play homer's losing scream
    var audio = new Audio("assets/audio/crap.mp3");
    audio.play();
    // update homer's image to loss image
    var homerImage="<img src=\"assets/images/homerloss.gif\" class=\"img-responsive\" alt=\"Simpsons Characters\">";
    document.querySelector("#homerImage").innerHTML = homerImage;
    // finally reset the game for a new round
    resetGame();
  }

}




// lets begin by breaking apart our selected word into an array of letter/flag
splitWordIntoArray();

// lets begin by resetting the game
resetGame();

// debugging
consoleLogs();

// start listening for keypress
document.onkeyup = function(event) {

	// When user presses a key, it records it and saves to userGuess
	userGuess = String.fromCharCode(event.keyCode).toLowerCase();

	// check if user's guess is valid and update appropriate array
	validateUserGuess();

	// inject progress so far back into html
	updateGame();

	// debugging
	consoleLogs();

	// reset the html variable
	resetHtml();

	// check whether user has won and reset if true
	hasUserWon();

	// check whether user has lost and reset if true
	hasUserLost();

	// debugging
	consoleLogs();
}





















// // document.getElementById("word").innerHTML = this.correctGuessesInOrder.join(" ");
// // document.getElementById("num-wins").innerHTML = ("Wins: " + this.winCount + "  " + "Losses: " + this.loseCount);
// // document.getElementById("guessedLetters").innerHTML = this.incorrectGuesses;
// // document.getElementById("guessesremaining").innerHTML = this.guessesRemaining;


// document.onkeyup = function(key) {
	
// 	currentLetter = String.fromCharCode(key.keyCode).toLowerCase();
// 	guessedLetters.push(currentLetter);
// };

// document.getElementById("word").innerHTML = dashWord;

// checkRepeat = function() {
// 		var repeatCounter = -1;
// 		for (var i=0; i < this.guessedLetters.length; i++){
// 			if (this.currentLetter == this.guessedLetters[i]){
// 				repeatCounter++;
// 			}
// 					}
// 		//If counter is zero, the global isRepeat variable becomes false (signifying no matches found)
// 		//Otherwise a match was found and isRepeat becomes true.
// 		if (repeatCounter == 0){
// 			this.isRepeat = false;
// 		}
// 		else{
// 			this.isRepeat = true;
// 		}
// 	};

// checkMatch = function(){
// 		var matchCounter = 0;

// 		//Loop for the band names length amount of times.
// 		//If the guessed letter is equal to the the bands letter at a given index, the counter variable counts up one.
// 		for (var i=0; i < this.bandLetters.length; i++){
// 			if (this.currentLetter == this.bandLetters[i]){
// 				matchCounter++;
// 			}
// 		}
// 		//If counter is zero, the global isMatch variable becomes false (signifying no matches found)
// 		//Otherwise a match was found and isMatch becomes true.
// 		if (matchCounter == 0){
// 			this.isMatch = false;
// 		}
// 		else{
// 			this.isMatch = true;
// 		}
// 	},
