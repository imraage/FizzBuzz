$(document).ready(function() {	

var num = prompt("Enter a number here please");

	for (var i = 1; i <=num; i++) {

		if (i % 3 == 0) {
			$('body').append('Fizz');
		} 

		else if (i % 5 == 0) {
			$('body').append('Buzz');
		} 

		else if (i % 15 == 0) {
			$('body').append('FizzBuzz');
		} 

		else {
			$('body').append(i);
		}
		
		$('body').append("<br />");
	}
});