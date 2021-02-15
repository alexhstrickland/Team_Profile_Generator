function generateCards() {
        if (i.getRole() === 'Manager') {
            return `
            <div class="card" style="width: 18rem;">
	            <div class="card-header">
	                <h5>${role.name}</h5>
	                <h6><i class="fas fa-coffee"></i>Manager</h6>
	            </div>
	            <ul class="list-group list-group-flush">
	                <li class="list-group-item">${role.id}</li>
	                <li class="list-group-item">${role.email}</li>
	                <li class="list-group-item">${role.officeNumber}</li>
	            </ul>
            </div>
            `
        }
        if (i.getRole() === 'Engineer') {
            return `
            <div class="card" style="width: 18rem;">
	            <div class="card-header">
	                <h5>${role.name}</h5>
	                <h6><i class="fas fa-glasses"></i>Enginneer</h6>
	            </div>
	            <ul class="list-group list-group-flush">
	                <li class="list-group-item">${role.id}</li>
	                <li class="list-group-item">${role.email}</li>
	                <li class="list-group-item">${role.github}</li>
	            </ul>
            </div>
            `
        }
        if (i.getRole() === 'Intern') {
            return `<div class="card" style="width: 18rem;">
            <div class="card-header">
                <h5>${role.name}</h5>
                <h6><i class="fas fa-user-graduate"></i>Intern</h6>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">${role.id}</li>
                <li class="list-group-item">${role.email}</li>
                <li class="list-group-item">${role.school}</li>
            </ul>
        </div>
        `
        }

}

function render() {
    `
    <html>
    <head>
        <title>Page</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.2/css/all.css" integrity="sha384-vSIIfh2YWi9wW0r9iZe7RJPrKwp6bG+s9QZMoITbCckVJqGCCRhc+ccxNcdpHuYu" crossorigin="anonymous">
        <link rel="stylesheet" href="../src/style.css">
    </head>
    <body>
        <div class="jumbotron">
            <h1 class="text-center">My Team</h1>
        </div>
        <div class="container">
            <div class="wrapper">
                <div class="row">
                    ${generateCards()}
                </div>
            </div>
            
        </div>
    </body>
    `
}
