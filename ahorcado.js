"use strict";
var wordGiven = "palabra";
var userChooseLetter = "";
var wordToComplete = "";

function showNumberOfLetters(word){
	var noOfLetters = word.length;
	console.log(noOfLetters);
}

function chooseLetter() {
	var userChooseLetter = prompt( "Escribe una letra: " );
	return userChooseLetter;
}

function isInWordOrNot(wordGiven, userChooseLetter){
	if(wordGiven.indexOf(userChooseLetter) !== -1) {
		return true;
	}
	return false;
}		



function showLetter(userChooseLetter){
	var guessedLetters = "";
	for(var index = 0 ; index < wordGiven.length ; index ++){
		var letterGiven = wordGiven[index];
		if(userChooseLetter === letterGiven){

			guessedLetters = guessedLetters + letterGiven;

		}
		else {

			guessedLetters = guessedLetters + "_"
		}


		/*si la letra esta en esta posicion 
			añado la letra en esta posicion a inEmptyWord
		si  no
			añado un _ a inEmptyWord*/
	}
	return	guessedLetters;
}


showNumberOfLetters(wordGiven);
console.log(userChooseLetter);
var chosenLetter = chooseLetter();
console.log(isInWordOrNot(wordGiven, chosenLetter));
console.log(showLetter(chosenLetter));




