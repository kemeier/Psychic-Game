var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins=0;
var losses=0;
var guessesLeft=10;

var directionsText=document.getElementById("directions-text");
var winsText=document.getElementById("wins-text");
var lossesText=document.getElementById("losses-text");
var guessesLeft=document.getElementById("guessesleft-text");
var guessesSoFar=document.getElementById("guessessofar-text");

document.onkeyup=function(event) {  
var userGuess=event.key;    

var computerGuess=computerChoices[Math.floor(Math.random() * computerChoices.length)];

if (userGuess===computerGuess) {
    wins++;
} else {
    losses++;
}

guessesSoFar.textContent="Your guesses so far: "+userGuess;
guessesLeft.textContent="Guesses left: "+guessesLeft;
wins.textContent="Wins: "+wins;
losses.textContent="Losses: "+losses;
};



