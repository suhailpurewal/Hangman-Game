var wordList = ["Atlantis", "Challenger", "Columbia", "Discovery", "Enterprise", "Endeavour"]
var wordChoice = wordList[Math.floor(Math.random() * wordList.length)];
var wordHolder = ""
var letters = wordChoice.split("");
	for(var i = 0; i < letters.length; i++)
var guessedLetter = []
var correctLetters = []
var score = 0;
var checkLetters = []


var userText = document.getElementById("user-text");

document.onkeyup = function(event) {
	console.log(event);
	userText.textContent = event.key;
	}
checkLetters : function(guessedLetter) {
	var correctLetters = _.intersection(this.letters, guessedLetter);
    var wrongLetters = _.difference(guessedLetter,correctLetters);


    for (var i = 0; i < this.letters.length; i++){
        var temp = this.secretWordWithBlanks.split("");
        if (this.letters[i] === guessedLetter) {
   			temp[i] = guessedLetter;
            this.secretWordWithBlanks = temp.join("");
          }
      }

      if (_.contains(this.letters, guessedLetter) == false) {
              player.wrongLetters.push(guessedLetter);
          }
  }
};







	console.log(wordList)
	console.log(wordChoice)
	console.log(wordHolder)
	console.log(score)
	console.log(letters)
















		
