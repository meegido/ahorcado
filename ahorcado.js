"use strict";
var wordGiven = "palabra";

function showNumberOfLetters(word){
	var noOfLetters = word.length;
	console.log(noOfLetters);
}

function chooseLetter() {
	var userChooseLetter = prompt( "Escribe una letra: " );
	return userChooseLetter;
}

function checkLetterInWord(wordGiven, letter){
	if(wordGiven.indexOf(letter) !== -1) {
		return true;
	}
	return false;
}



function showLetter(userChooseLetter){
	var guessedLetters = "";
	for(var index = 0 ; index < wordGiven.length ; index ++){
		console.log(wordGiven[index]);
		if(userChooseLetter === wordGiven[index]){
			guessedLetters += userChooseLetter;
		}
		else {
			guessedLetters += " _"
		}


		/*si la letra esta en esta posicion 
			añado la letra en esta posicion a inEmptyWord
		si  no
			añado un _ a inEmptyWord*/
	}
	return	guessedLetters;

}


showNumberOfLetters(wordGiven);
var chosenLetter = chooseLetter();
console.log(checkLetterInWord(wordGiven, chosenLetter));

console.log(showLetter());




