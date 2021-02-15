// node index.js should trigger inquirer questions: "Please bui;d your team" team managers name, tm id, tm email, tm office number, which team member would you like to add? (choices), engineer or intern or i don't want to add anymore, 
// engineer: name, id, email, github username
// const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const fs = require("fs");
const team = [];

// intern: name, id, email, school
const begin = () => {[
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
		]
		.then(function({name, id, email, officeNumber}) {
			let teamManager;
			teamManager = new Manager(name, id, email, officeNumber);
			team.push(teamManager);
			choice();
		});
}

const choice = () => {
	inquirer
		.prompt([
			{
				type: "list",
				message: "Which team member would you like to add?",
				name: "role",
				choices: ["Engineer", "Intern", "No more team members"],
			}
		]).then(data => {
		if(data.role === "Engineer") {
			engineerInfo();
		} else if(data.role === "Intern") {
			internInfo();
		} else if(data.role === "No more team members") {
			noMore();
		}
	})
};


const engineerInfo = () => {
	inquirer
		.prompt([
			{
				type: "input",
				message: "Please enter the name of the engineer: ",
				name: "name",
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
		]).then(function({name, id, email, github}) {
			let teamEngineer;
			teamEngineer = new Engineer(name, id, email, github);
			team.push(teamEngineer);
			choice();
		});
}

const internInfo = () => {
	inquirer
		.prompt([
			{
				type: "input",
				message: "Please enter the name of the intern: ",
				name: "name",
			},
			{
				type: "input",
				message: "Please enter the intern's ID: ",
				name: "id",
			},
			{
				type: "input",
				message: "Please enter the intern's email: ",
				name: "email",
			},
			{
				type: "input",
				message: "Please enter the intern's school: ",
				name: "school",
			},
		]).then(function({name, id, email, school}) {
			let teamIntern;
			teamIntern = new Intern(name, id, email, school);
			team.push(teamIntern);
			choice();
		});
}

const noMore = () => {
	let employeeCards = "";
	for (var i=0; i < team.length; i++) {
		employeeCards += generateCards(i);
	}
	const finalTeam = // need to add render function
	
	fs.writeFileSync('./dist/team.html', finalTeam)
}




inquirer.prompt(begin());
console.log(cards);



// need to write a for loop to dynamically add boostrap cards. Also will need if statements in order to diaplay appropriate icon for role


