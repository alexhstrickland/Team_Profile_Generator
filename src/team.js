const employeeCards = require("../index");

// function to render HTML and add in generated cards
function render(employeeCards) {
    return `
    <html>
    <head>
        <title>Page</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.2/css/all.css" integrity="sha384-vSIIfh2YWi9wW0r9iZe7RJPrKwp6bG+s9QZMoITbCckVJqGCCRhc+ccxNcdpHuYu" crossorigin="anonymous">
        <link rel="stylesheet" href="../src/style.css">
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet">

    </head>
    <body>
    <div class="jumbotron">
        <h1 class="text-center">My Team</h1>
    </div>
    <div class="container">
        <div class="wrapper">
            <div class="row justify-content-center">
                ${employeeCards}
            
            </div>
    </body>
    <html>
    `
}

module.exports = render;
