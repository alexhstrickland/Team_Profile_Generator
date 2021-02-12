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
			name: "role"
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

	])

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
				}

			])
	}

	function noMore () {
		inquirer
			.prompt([
				{
					type: "",
					message: "",
					name: "",
				}
			])
	}

	
















const HTML =
`
<html>
<head>
	<title>Page</title>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
</head>
<body>
	<div class="jumbotron" style="background-color: red; color: white">
		<h1 class="text-center">My Team</h1>
	</div>
	<div class="container">
		
	</div>
</body>
</html>
`; 