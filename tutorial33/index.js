
var righGuess = 0;
var wrongGuess = 0;


for(var i = 1; i <= 10; i++){
    var guessingNumber = parseInt(prompt("Guessing number between 1 and 10"));
    var randomNum = Math.floor(Math.random() * 10) + 1;
    if(guessingNumber == randomNum){
        console.log("You guessed right");
        righGuess++;
    }
    else{
        console.log("You guessed wrong");
        wrongGuess++;
    }
}

document.write("You guessed right " + righGuess);
document.write("You guessed wrong " + wrongGuess);