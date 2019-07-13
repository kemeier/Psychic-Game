window.onload = function()  {



var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins=0;
var losses=0;
var guessesAddingNumber=10;
var arrayOfGuesses=[];

var directionsText=document.getElementById("directions-text");
var winsText=document.getElementById("wins-text");
var lossesText=document.getElementById("losses-text");
var guessesLeft=document.getElementById("guessesleft-text");
var guessesSoFar=document.getElementById("guessessofar-text");


document.onkeyup=function(event) {  
var userGuess=event.key; 
console.log(userGuess);   

var computerGuess=computerChoices[Math.floor(Math.random() * computerChoices.length)];

if (userGuess===computerGuess) {
    wins++;
    guessesAddingNumber--;
    arrayOfGuesses.push(userGuess)
} else {
    losses++;
    guessesAddingNumber--;
    arrayOfGuesses.push(userGuess)
}
if (guessesAddingNumber===0)    {
    guessesAddingNumber=10;
    wins=0;
    losses=0;
    arrayOfGuesses=[];
}

guessesSoFar.textContent= arrayOfGuesses;
guessesLeft.textContent= guessesAddingNumber;
winsText.textContent=wins;
lossesText.textContent=losses;
};
}


