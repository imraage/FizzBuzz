$(document).ready(function() {
	fizBuzz();
})

var fizBuzz = function (num) {
	var num;
	num = parseInt(prompt("Please enter a number")); 
	while(isNaN(num)) {
		alert("Please enter a number");
		num = parseInt(prompt("Please enter a number"));
	}

		for (var i = 1; i <=num; i++) {

		if (i % 3 == 0) {
			$('ul').append('<li>Fizz</li>');
		} 

		else if (i % 5 == 0) {
			$('ul').append('<li>Buzz</li>');
		} 

		else if (i % 15 == 0) {
			$('ul').append('<li>FizzBuzz</li>');
		} 

		else {
			$('ul').append(i);
		}
		
		$('ul').append("<br/>");
	}

	} 


