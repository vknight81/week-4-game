var randomNum = [26, 32, 17, 35, 21, 28, 30, 19, 23, 37]
var chosenNumber = x
var blueCrystalValue = [1, 2, 3, 4, 5]
var chosenBlue = 0
var greenCrystalValue = [1, 2, 3, 4, 5]
var chosenGreen = 0
var redCrystalValue = [1, 2, 3, 4, 5]
var chosenRed = 0
var yellowCrystalValue = [1, 2, 3, 4, 5]
var chosenYellow = 0
var totalScore = 0
var numWins = 0
var numLosses = 0




function startGame (){
	totalScore = 0
	// when startgame button is clicked, select randomNum from array AND select one number from each array for each crystal value
	chosenNumber = randomNum[Math.floor(Math.random() * randomNum.length)];
	chosenBlue = blueCrystalValue[Math.floor(Math.random() * blueCrystalValue.length)];
	chosenGreen = greenCrystalValue[Math.floor(Math.random() * greenCrystalValue.length)];
	chosenRed = redCrystalValue[Math.floor(Math.random() * redCrystalValue.length)];
	chosenYellow = yellowCrystalValue[Math.floor(Math.random() * yellowCrystalValue.length)];
};
		

function roundComplete (startGame){

		//select random number from blueCrystal, greenCrystal, redCrystal, and yellowCrystal value arrays and make it correspond to id in html (needs to be hidden)
	
	$("#random-number").html = chosenNumber;
	$("#blue-numvalue").html = chosenBlue;
	$("#green-numvalue").html = chosenGreen;
	$("#red-numvalue").html = chosenRed;
	$("#yellow-numvalue").html = chosenYellow;
	$("#win-counter").html = numWins;
	$("#loss-counter").html = numLosses;
}





function scoreCounter (roundComplete){

		if //(onclick event executed by clicking blue image button-must be hidden){
			totalScore += blueCrystalValue;
		}
		else if //(onclick event executed by clicking green image button-must be hidden){
		    totalScore += greenCrystalValue;
		}
		else if //(onclick event executed by clicking red image button-must be hidden){
			totalScore += redCrystalValue;
		}
		else if //(onclick event executed by clicking yellow image button-must be hidden){
			totalScore += yellowCrystalValue;
		}
} 




function endGame (){

	if (totalScore > randomNum) {
		alert ("You lose :(.  Press Start Game to Play Again");
		numLosses++;
	}
	else if (totalScore === randomNum) {
	 	 alert ("You win! Press Start Game to Play Again");
	 	numWins++;
	}
}


startGame(){
$(".btn").click(startGame)
	startGame();
	roundComplete();
	endGame();
}
