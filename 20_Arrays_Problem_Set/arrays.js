function printReverse(array) {
	for (var i = array.length - 1; i >= 0; i--) {
		console.log(array[i]);
	}
}


function isUniform(array) {
	for (var i = 1; i < array.length; i++) {
		if (array[i] !== array[0]) {
			return false;
		}
	}

	return true;
}

function sumArray (num) {
	var sum = 0;
	for (i = 0; i < num.length; i++) {
		sum += num[i];
	}

	return sum;
}

function max(num) {
	var maxNum = num[0];
	for (i = 1; i < num.length; i++) {
		if (num[i] > num[0]) {
			maxNum = num[i];
		}
	}

	return maxNum;
}