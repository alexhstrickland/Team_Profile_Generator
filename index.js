// node index.js should trigger inquirer questions: "Please bui;d your team" team managers name, tm id, tm email, tm office number, which team member would you like to add? (choices), engineer or intern or i don't want to add anymore, 
// engineer: name, id, email, github username

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const team = [];

// intern: name, id, email, school
function begin() {
	inquirer
		.prompt([
			{
				type: "input",
				message: "Please enter the team manager's name: ",
				name: "name",	
			},
			{
				type: "input",
				message: "Please enter the team manager's ID: ",
				name: "id",
			},
			{
				type: "input",
				message: "Please enter the team manager's email: ",
				name: "email",
			},
			{
				type: "input",
				message: "Please enter the team manager's office number: ",
				name: "officeNumber",
			},
		])
	.then(function({name, id, email, officeNumber}) {
		let teamManager;
		teamManager = new Manager(name, id, email, officeNumber);
		team.push(teamManager);
		choice();
	});
}

function choice() {
	inquirer
		.prompt([
			{
				type: "list",
				message: "Which team member would you like to add?",
				name: "role",
				choices: ["Engineer", "Intern", "No more team members"],
			}
		])
	.then(data => {
		if(data.role === "Engineer") {
			engineerInfo();
		} else if(data.role === "Intern") {
			internInfo();
		} else if(data.role === "No more team members") {
			noMore();
		}
	})
};


function engineerInfo() {
	inquirer
		.prompt([
			{
				type: "input",
				message: "Please enter the name of the engineer: ",
				name: "engineerName",
			},
			{
				type: "input",
				message: "Please enter the engineer's ID: ",
				name: "id",
			},
			{
				type: "input",
				message: "Please enter the engineer's email: ",
				name: "email",
			},
			{
				type: "input",
				message: "Please enter the engineer's GitHub username: ",
				name: "github",
			},
		])
		.then(function({name, id, email, gitHub}) {
			let teamManager;
			teamManager = new Manager(name, id, email, officeNumber);
			team.push(teamManager);
			choice();
		});
}

function internInfo() {
	inquirer
		.prompt([
			{
				type: "input",
				message: "Please enter the name of the intern: ",
				name: "internName",
			},
			{
				type: "input",
				message: "Please enter the intern's ID: ",
				name: "internID",
			},
			{
				type: "input",
				message: "Please enter the intern's email: ",
				name: "internEmail",
			},
			{
				type: "input",
				message: "Please enter the intern's school: ",
				name: "internSchool",
			},
			{
				type: "list",
				message: "Which team member would you like to add?",
				name: "role",
				choices: ["Engineer", "Intern", "No more team members"],
			}

		])
}

function noMore () {
// this function will end prompt and send data to create cards
}


// getInfo




// need to write a for loop to dynamically add boostrap cards. Also will need if statements in order to diaplay appropriate icon for role


