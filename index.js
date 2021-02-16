
// const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const fs = require("fs");
const render = require("./src/team")
const team = [];

const begin = [
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
];
		
questions().then(function({name, id, email, officeNumber}) {
	let teamManager;
	teamManager = new Manager(name, id, email, officeNumber);
	team.push(teamManager);
	choice();
});

function questions() {
	return inquirer.prompt(begin);
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
const generateCards = (emp) => {
	if (emp.getRole() === 'Manager') {
		return `
				<div class="card" style="width: 18rem;">
					<div class="card-header">
						<h5>${emp.name}</h5>
						<h6><i class="fas fa-coffee"></i>Manager</h6>
					</div>
					<ul class="list-group list-group-flush">
						<li class="list-group-item">${emp.id}</li>
						<li class="list-group-item"><a href = 'mailto: ${emp.email}'>${emp.email}</a></li>
						<li class="list-group-item">${emp.officeNumber}</li>
					</ul>
				</div>
		`
	}
	if (emp.getRole() === 'Engineer') {
		return `
				<div class="card" style="width: 18rem;">
					<div class="card-header">
						<h5>${emp.name}</h5>
						<h6><i class="fas fa-glasses"></i>Enginneer</h6>
					</div>
					<ul class="list-group list-group-flush">
						<li class="list-group-item">${emp.id}</li>
						<li class="list-group-item"><a href = 'mailto: ${emp.email}'>${emp.email}</a></li>
						<li class="list-group-item"><a href='https://github.com/'${emp.github}>${emp.github}</a></li>
					</ul>
				</div>
		`
	}
	if (emp.getRole() === 'Intern') {
		return `
					<div class="card" style="width: 18rem;">
						<div class="card-header">
							<h5>${emp.name}</h5>
							<h6><i class="fas fa-user-graduate"></i>Intern</h6>
						</div>
						<ul class="list-group list-group-flush">
							<li class="list-group-item">${emp.id}</li>
							<li class="list-group-item"><a href = 'mailto: ${emp.email}'>${emp.email}</a></li>
							<li class="list-group-item">${emp.school}</li>
						</ul>
					</div>
		`
	}

}

const noMore = () => {
	const teamArray = team;
	let employeeCards = "";
	
	for (i in teamArray) {
		const emp = teamArray[i];
		employeeCards += generateCards(emp);
	}
	const finalTeam = render(employeeCards);

	console.log(finalTeam);
	
	fs.writeFileSync('./dist/team.html', finalTeam)

}

// need to write a for loop to dynamically add boostrap cards. Also will need if statements in order to diaplay appropriate icon for role


