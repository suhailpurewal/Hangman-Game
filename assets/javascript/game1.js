  checkLetters: function(guessedLetter){
      var correctLetters = _.intersection(this.secretWord, guessedLetter);
      var wrongLetters = _.difference(guessedLetter,correctLetters);

      for (var i = 0; i < this.secretWord.length; i++){
         var temp = this.secretWordWithBlanks.split("");
          if (this.secretWord[i] === guessedLetter) {
              temp[i] = guessedLetter;
              this.secretWordWithBlanks = temp.join("");
          }
      }

      if (_.contains(this.secretWord, guessedLetter) == false) {
              player.wrongLetters.push(guessedLetter);
          }
  }
};