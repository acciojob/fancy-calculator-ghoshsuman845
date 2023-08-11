let num1;

			// Get the input for the first variable using the prompt() function
			num1 = prompt("Enter the first number:");

			// Convert the input to a number
			num1 = parseFloat(num1);

			// Multiply the first number by 2
			let result = num1 * 2;

			// Declare the second variable
			let num2;

			// Get the input for the second variable using the prompt() function
			num2 = prompt("Enter the second number:");

			// Convert the input to a number
			num2 = parseFloat(num2);

			// Add the second number to the result
			result += num2;

			alert("The final result is: " + result);