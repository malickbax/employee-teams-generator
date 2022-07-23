// Required files
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "dist");
const outputPath = path.join(OUTPUT_DIR, "employees.html");
const generateTeam = require("./src/template.js")
teamArray = [];

// Function to run index from Node 
function runIndex () {
// Function to create/add members to team
  function createTeam () {
// Prompts to ask user what type of employee they want to add to their team
    inquirer.prompt([{
      type: "list",
      message: "What type of employee do you want to add to your team?",
      name: "addEmployeePrompt",
      choices: ["Add Manager", "Add Engineer", "Add Intern", "Done adding employees"]
    }]).then(function (userInput) {
      switch(userInput.addEmployeePrompt) {
        case "Add Manager":
          addManager();
          break;
        case "Add Engineer":
          addEngineer();
          break;
        case "Add Intern":
          addIntern();
          break;
        default:
          htmlBuilder();
      }
    })
  }

// Function to add a Manager  
function addManager() {
  inquirer.prompt ([
    {
      type: "input",
      name: "managerName",
      message: "Enter Manager's name?"
    },
    {
      type: "input",
      name: "managerId",
      message: "What is the Manager's employee ID number?"
    },
    {
      type: "input",
      name: "managerEmail",
      message: "What is the Manager's email address?"
    },
    {
      type: "input",
      name: "managerOfficeNumber",
      message: "What is the Manager's office number?"
    }

  ]).then(answers => {
    const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
    teamArray.push(manager);
    createTeam();
  });

}

// Add Engineer function
function addEngineer() {
    inquirer.prompt([
      {
        type: "input",
        name: "engineerName",
        message: "Enter Engineer's name"
      },
      {
        type: "input",
        name: "engineerId",
        message: "What is the Engineer's employee ID number?" 
      },
      {
        type: "input",
        name: "engineerEmail",
        message: "What is the Engineer's email address?"
      },
      {
        type: "input",
        name: "engineerGithub",
        message: "What is the Engineer's GitHub username?"
      }

    ]).then(answers => {
      const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
      teamArray.push(engineer);
      createTeam();
    });

  }
// Add Intern function
  function addIntern() {
    inquirer.prompt([
      
      {
        type: "input",
        name: "internName",
        message: "Enter Intern's name"
      },
      {
        type: "input",
        name: "internId",
        message: "What is the intern's employee ID number?" 
      },
      {
        type: "input",
        name: "internEmail",
        message: "What is the intern's email address?"
      },
      {
        type: "input",
        name: "internSchool",
        message: "What University did the intern attend?"
      }

    ]).then(answers => {
      const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
      teamArray.push(intern);
      createTeam();
    });

  }

// Function that exports the user's input to the HTML file under output folder
function htmlBuilder () {
// Console log message will appear when user finishes answering the prompts and HTML file is generated
    console.log("Team created. Please refer to the generated HTML output.")

    fs.writeFileSync(outputPath, generateTeam(teamArray), "UTF-8")

}

// Calling createReam function 
createTeam();

}

// Calling runIndex function that the user used with Node  
runIndex();