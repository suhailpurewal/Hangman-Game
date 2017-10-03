
var wordList = ["Atlantis", "Challenger", "Columbia", "Discovery", "Enterprise", "Endeavour"];
var wordChoice = wordList[Math.floor(Math.random() * wordList.length)];
var dashWord =  wordChoice.replace(/\w/g,"_ ");
var letters = wordChoice.split("");
	for(var i = 0; i < letters.length; i++);
var alphabet = ["A", "B", "C", "D", "E","F", "G", "H", "I", "J", "K","L", "M", "N", "O", "P", "Q","R", "S", "T", "U", "V", "W","X", "Y", "Z"];
var wrongLetters = [];
var correctLetters = [];
var correctinorder = ""
var currentLetter = ""
var guessedLetters = [];
var guessesRemaining = 9;
var loseCount = 0;
var winCount = 0;








// document.getElementById("word").innerHTML = this.correctGuessesInOrder.join(" ");
// document.getElementById("num-wins").innerHTML = ("Wins: " + this.winCount + "  " + "Losses: " + this.loseCount);
// document.getElementById("guessedLetters").innerHTML = this.incorrectGuesses;
// document.getElementById("guessesremaining").innerHTML = this.guessesRemaining;


document.onkeyup = function(key) {
	
	currentLetter = String.fromCharCode(key.keyCode).toUpperCase();
	guessedLetters.push(currentLetter);
};

document.getElementById("word").innerHTML = dashWord;

checkRepeat = function() {
		var repeatCounter = -1;
		for (var i=0; i < this.guessedLetters.length; i++){
			if (this.currentLetter == this.guessedLetters[i]){
				repeatCounter++;
			}
					}
		//If counter is zero, the global isRepeat variable becomes false (signifying no matches found)
		//Otherwise a match was found and isRepeat becomes true.
		if (repeatCounter == 0){
			this.isRepeat = false;
		}
		else{
			this.isRepeat = true;
		}
	};

checkMatch = function(){
		var matchCounter = 0;

		//Loop for the band names length amount of times.
		//If the guessed letter is equal to the the bands letter at a given index, the counter variable counts up one.
		for (var i=0; i < this.bandLetters.length; i++){
			if (this.currentLetter == this.bandLetters[i]){
				matchCounter++;
			}
		}
		//If counter is zero, the global isMatch variable becomes false (signifying no matches found)
		//Otherwise a match was found and isMatch becomes true.
		if (matchCounter == 0){
			this.isMatch = false;
		}
		else{
			this.isMatch = true;
		}
	},

console.log(wordChoice);
console.log(letters);
console.log(dashWord);
console.log(currentLetter);
console.log(wrongLetters);
console.log(guessedLetters);












