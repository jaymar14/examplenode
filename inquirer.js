// Load the NPM Package inquirer
var inquirer = require("inquirer");

// Create a "Prompt" with a series of questions.
inquirer
  .prompt([
    // Here we create a basic text prompt.
    {
      type: "input",
      message: "What is your nickname?",
      name: "username"
    },
    {
      type: "confirm",
      message: "Is that right:",
      name: "confirm",
      default: true
    },
    // Here we create a basic password-protected text prompt.
    {
      type: "password",
      message: "Set hidden password",
      name: "password"
    },
    {
      type: "confirm",
      message: "Is that right:",
      name: "confirm",
      default: true
    },
    // Here we give the user a list to choose from.
    {
      type: "list",
      message: "Which Player do you choose?",
      choices: ["neymar", "messi", "CR7"],
      name: "player"
    },
    // Here we ask the user to confirm.
    {
      type: "confirm",
      message: "Is that right:",
      name: "confirm",
      default: true
    }
  ])
  .then(function(inquirerResponse) {
    // If the inquirerResponse confirms, we displays the inquirerResponse's username and pokemon from the answers.
    if (inquirerResponse.confirm) {
      console.log("\nWelcome " + inquirerResponse.username);
      console.log("Player " + inquirerResponse.player + " is ready for battle!\n");
    }
    else {
      console.log("\nThat's okay " + inquirerResponse.username + ", come again when you are more sure.\n");
    }
  });