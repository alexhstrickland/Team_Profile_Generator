
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const fs = require("fs");
const render = require("./src/team")
const team = [];

// first prompt for users input
const begin = [
			{
				type: "input",
				message: "Please enter the team manager's name: ",
				name: "name",
				validate: userName => {
					if (userName) {
						return true;
					} else {
						console.log("Must enter a name!")
						return false;
					}
				}
			},
			{
				type: "input",
				message: "Please enter the team manager's ID: ",
				name: "id",
				validate: userId => {
					if (userId) {
						return true;
					} else {
						console.log("Must enter an id!");
						return false;
					}
				}
			},
			{
				type: "input",
				message: "Please enter the team manager's email: ",
				name: "email",
				validate: userEmail => {
					if (userEmail) {
						return true;
					} else {
						console.log("Must enter an email address!");
						return false;
					}
				}
			},
			{
				type: "input",
				message: "Please enter the team manager's office number: ",
				name: "officeNumber",
				validate: userNumber => {
					if (userNumber) {
						return true;
					} else {
						console.log("Must enter an office number!");
						return false;
					}
				}
			},
];

// function to push team manager in the team array
questions().then(function({name, id, email, officeNumber}) {
	let teamManager;
	teamManager = new Manager(name, id, email, officeNumber);
	team.push(teamManager);
	choice();
});

// initial function to call first prompt
function questions() {
	return inquirer.prompt(begin);
}

// prompt that decides which role to navigate
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

//  prompt for engineer information
const engineerInfo = () => {
	inquirer
		.prompt([
			{
				type: "input",
				message: "Please enter the name of the engineer: ",
				name: "name",
				validate: userName => {
					if (userName) {
						return true;
					} else {
						console.log("Must enter a name!")
						return false;
					}
				}
			},
			{
				type: "input",
				message: "Please enter the engineer's ID: ",
				name: "id",
				validate: userId => {
					if (userId) {
						return true;
					} else {
						console.log("Must enter an id!");
						return false;
					}
				}
			},
			{
				type: "input",
				message: "Please enter the engineer's email: ",
				name: "email",
				validate: userEmail => {
					if (userEmail) {
						return true;
					} else {
						console.log("Must enter an email address!");
						return false;
					}
				}
			},
			{
				type: "input",
				message: "Please enter the engineer's GitHub username: ",
				name: "github",
				validate: userGithub => {
					if (userGithub) {
						return true;
					} else {
						console.log("Must enter GitHub username!");
						return false;
					}
				}
			},
		]).then(function({name, id, email, github}) {
			let teamEngineer;
			teamEngineer = new Engineer(name, id, email, github);
			team.push(teamEngineer);
			choice();
		});
}

// prompt for intern information
const internInfo = () => {
	inquirer
		.prompt([
			{
				type: "input",
				message: "Please enter the name of the intern: ",
				name: "name",
				validate: userName => {
					if (userName) {
						return true;
					} else {
						console.log("Must enter a name!")
						return false;
					}
				}
			},
			{
				type: "input",
				message: "Please enter the intern's ID: ",
				name: "id",
				validate: userId => {
					if (userId) {
						return true;
					} else {
						console.log("Must enter an id!");
						return false;
					}
				}
			},
			{
				type: "input",
				message: "Please enter the intern's email: ",
				name: "email",
				validate: userEmail => {
					if (userEmail) {
						return true;
					} else {
						console.log("Must enter an email address!");
						return false;
					}
				}
			},
			{
				type: "input",
				message: "Please enter the intern's school: ",
				name: "school",
				validate: userSchool => {
					if (userSchool) {
						return true;
					} else {
						console.log("Must enter a school name!");
						return false;
					}
				}
			},
		]).then(function({name, id, email, school}) {
			let teamIntern;
			teamIntern = new Intern(name, id, email, school);
			team.push(teamIntern);
			choice();
		});
}

// function to generate bootstrap cards for each role
const generateCards = (emp) => {
	if (emp.getRole() === 'Manager') {
		return `
				<div class="card" style="width: 19rem;">
					<div class="card-header">
						<h3>${emp.name}</h3>
						<h5><i class="fas fa-coffee"></i> Manager</h5>
					</div>
					<div class="card-body">
						<ul class="list-group list-group-flush">
							<li class="list-group-item">ID: ${emp.id}</li>
							<li class="list-group-item">Email: </br><a href = 'mailto: ${emp.email}'>${emp.email}</a></li>
							<li class="list-group-item">Phone: ${emp.officeNumber}</li>
						</ul>
					</div>
				</div>
		`
	}
	if (emp.getRole() === 'Engineer') {
		return `
				<div class="card" style="width: 19rem;">
					<div class="card-header">
						<h3>${emp.name}</h3>
						<h5><i class="fas fa-glasses"></i> Engineer</h5>
					</div>
					<div class="card-body">
						<ul class="list-group list-group-flush">
							<li class="list-group-item">ID: ${emp.id}</li>
							<li class="list-group-item">Email: </br><a href = 'mailto: ${emp.email}'>${emp.email}</a></li>
							<li class="list-group-item">GitHub: <a href='https://github.com/'${emp.github}>${emp.github}</a></li>
						</ul>
					</div>	
				</div>
		`
	}
	if (emp.getRole() === 'Intern') {
		return `
					<div class="card" style="width: 19rem;">
						<div class="card-header">
							<h3>${emp.name}</h3>
							<h5><i class="fas fa-user-graduate"></i> Intern</h5>
						</div>
						<div class="card-body">
							<ul class="list-group list-group-flush">
								<li class="list-group-item">ID: ${emp.id}</li>
								<li class="list-group-item">Email: </br><a href = 'mailto: ${emp.email}'>${emp.email}</a></li>
								<li class="list-group-item">School: ${emp.school}</li>
							</ul>
						</div>	
					</div>
		`
	}

}

// function to end prompt when user selects to not add anymore employees
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


