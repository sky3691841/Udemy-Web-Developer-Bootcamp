var btn = document.querySelector("button");
var back = document.querySelector("body");

var backIsWhite = true;

function backChange() {
	back.classList.toggle("blue");
	// if (backIsWhite) {
	// 	back.style.background = "blue";
	// }
	// else {
	// 	back.style.background = "white"
	// }

	// backIsWhite = !backIsWhite;
}

btn.addEventListener("click", backChange);