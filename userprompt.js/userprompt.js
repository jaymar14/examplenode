var inquirer = require("inquirer");

inquirer
	.prompt([
	{
		type: "input",
		message: "what is your name?",
		name: "username"
	}
	{

	}

	])
	.then(function(inquirerResponse) {
		console.log("Welcome " + inquirerResponse.username);

	});