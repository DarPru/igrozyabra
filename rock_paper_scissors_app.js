var userScore = 0;
var compScore = 0;
var userScore_span = document.getElementById("user_score");
var compScore_span = document.getElementById("comp_score");
const result_message = document.querySelector(".message");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");




function computerChoise() {
const choises = ["rock", "paper", "scissors"];
const randomNumder = Math.floor(Math.random()*3);
return choises[randomNumder];
}
 function convert (idToConvert) {
 	if (idToConvert === "rock") {
 		return "Камень";
 	} else if (idToConvert === "paper") {
 		return "Бумага";
 	} else {
 		return "Ножницы";
 	}
 }

function win (userChoice, computerChoice) {
	userScore++;
	userScore_span.innerHTML = userScore;
	compScore_span.innerHTML = compScore;
	result_message.innerHTML = convert(userChoice) + " сильнее, чем " + convert(computerChoice) + "! Вы победили!";
	document.getElementById(userChoice).classList.add('win_style');
	setTimeout(function(){document.getElementById(userChoice).classList.remove('win_style');}, 1000);

}
function lose (userChoice, computerChoice) {
	compScore++;
	userScore_span.innerHTML = userScore;
	compScore_span.innerHTML = compScore;
	result_message.innerHTML = convert(userChoice) + " хуже, чем " + convert(computerChoice) + "! Вы проиграли!";
	document.getElementById(userChoice).classList.add('lose_style');
	setTimeout(function(){document.getElementById(userChoice).classList.remove('lose_style');}, 1000);
}
function draw (userChoice, computerChoice) {
	result_message.innerHTML = convert(userChoice) + " = " + convert(computerChoice) + "! Похоже ничья...";
	document.getElementById(userChoice).classList.add('draw_style');
	setTimeout(function(){document.getElementById(userChoice).classList.remove('draw_style');}, 1000);
}

function game (userChoise) {
	const compChoise = computerChoise();
	switch (userChoise + compChoise) {
		case "rockscissors":
		case "paperrock":
		case "scissorspaper":
		win(userChoise, compChoise);
		break;
		case "rockpaper":
		case "scissorsrock":
		case "paperscissors":
		lose(userChoise, compChoise);
		break;
		case "rockrock":
		case "scissorsscissors":
		case "paperpaper":
		draw(userChoise, compChoise);
		break;

	}
}
game("s");

function main() {
rock.addEventListener('click', function() {
	game("rock")
});
paper.addEventListener('click', function() {
	game("paper")
});
scissors.addEventListener('click', function() {
	game("scissors")
});
}

main();