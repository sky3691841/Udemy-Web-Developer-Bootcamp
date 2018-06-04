var p1Btn = document.querySelector("#p1");
var p2Btn = document.querySelector("#p2");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var resetBtn = document.querySelector("#reset");
var numInput = document.querySelector("input");
var winningScoreDisplay = document.querySelector("p span");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;

p1Btn.addEventListener("click", function() {
	if (!gameOver) {
		p1Score++;
		p1Display.textContent = p1Score;
		if (p1Score === winningScore) {
			p1Display.classList.add("winner");
			gameOver = true;
		}
	}
})

p2Btn.addEventListener("click", function() {
	if (!gameOver) {
		p2Score++;
		p2Display.textContent = p2Score;
		if (p2Score === winningScore) {
			p2Display.classList.add("winner");
			gameOver = true;
		}
	}
})

resetBtn.addEventListener("click", reset)

function reset() {
	p1Score = 0;
	p2Score = 0;
	p1Display.textContent = 0;
	p2Display.textContent = 0;
	p1Display.classList.remove("winner");
	p2Display.classList.remove("winner");
	gameOver = false;
}

numInput.addEventListener("change", function() {
	winningScoreDisplay.textContent = numInput.value; //this is a string, not a number
	winningScore = Number(numInput.value);
	reset();
})