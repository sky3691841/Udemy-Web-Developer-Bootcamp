function isEven(num) {
	if (num % 2 === 0) {
		return true;
	}

	return false;
}

function factorial(num) {
	var multi = 1
	for (var i = num; i > 0; i--) {
		multi = i * multi;
	}

	return multi;
}

function kebabToSnake(str) {
	var newStr = str.replace(/-/g, "_");
	return newStr;
}