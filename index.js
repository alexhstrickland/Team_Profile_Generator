// node index.js should trigger inquirer questions: "Please bui;d your team" team managers name, tm id, tm email, tm office number, which team member would you like to add? (choices), engineer or intern or i don't want to add anymore, 
// engineer: name, id, email, github username
// intern: name, id, email, school

	inquirer.prompt([
		{
			type: "input",
			message: "Please enter the team manager's name: ",
			name: "manName",	
		},
		{
			type: "input",
			message: "Please enter the team manager's ID: ",
			name: "manID",
		},
		{
			type: "input",
			message: "Please enter the team manager's office number: ",
			name: "manNumber",
		},
		{
			type: "list",
			message: "Which team member would you like to add?",
			name: "role",
			choices: ["Engineer, Intern, No more team members"]
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

	});

	function engineerInfo() {
		inquirer
			.prompt([
				{
					type: "",
					message: "",
					name: "",
				},
				{
					type: "",
					message: "",
					name: "",
				},
				{
					type: "",
					message: "",
					name: "",
				},
				{
					type: "",
					message: "",
					name: "",
				},
				{
					type: "",
					message: "",
					name: "",
					choices: "",
				}
			])
	}

	function internInfo() {
		inquirer
			.prompt([
				{
					type: "",
					message: "",
					name: "",
				},
				{
					type: "",
					message: "",
					name: "",
				},
				{
					type: "",
					message: "",
					name: "",
				},
				{
					type: "",
					message: "",
					name: "",
				},
				{
					type: "",
					message: "",
					name: "",
					choices: "",
				}

			])
	}

	function noMore () {
	// this function will end prompt and send data to create cards
	}

	



// need to write a for loop to dynamically add boostrap cards. Also will need if statements in order to diaplay appropriate icon for role