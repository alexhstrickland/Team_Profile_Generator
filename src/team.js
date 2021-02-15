function generateCards() {
    for (var i = 0; i < team.length; i++) {
        if 
    }




    return cards
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
