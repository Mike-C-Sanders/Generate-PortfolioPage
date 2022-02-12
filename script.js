const inquirer = require('inquirer');

const fs = require('fs');

inquirer.prompt([
    {
        type: 'input',
        name: 'userName',
        message: "What's your name?",
    },
    {
        type: 'input',
        name: 'userLocation',
        message: "Where are you from?"
    },
    {
        type: 'input',
        name: 'aboutMe',
        message: 'what do you like to do for fun?'
    },
    {
        type: 'input',
        name: 'linkedIn',
        message: 'What is your linkedIn page URL?'
    },
    {
        type: 'input',
        name: 'gitHub',
        message: 'What is your gitHub page URL?'
    },
    {
        type: 'input',
        name: 'foodFav',
        message: 'What is your favorite food?'
    },
]).then((answer) => {
    const createHTML = generateHTML(answer);
    fs.writeFileSync('index.html', createHTML);
})

const generateHTML = ({userName, userLocation, aboutMe, linkedIn, gitHub, foodFav}) =>{
    return `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
            <title>Portfolio Page</title>
        </head>
        <body>
            <div class="jumbotron jumbotron-fluid ">
                <div class="container d-flex justify-content-center">
                    <h1>${userName} Portfolio</h1>
                </div>
            </div>
            <div class="container">
                <h2 class = 'd-flex justify-content-center'>About Me: ${aboutMe}</h2>
                <h2 class="d-flex justify-content-center">Favorite Food: ${foodFav}</h2>
                <h2 class="d-flex justify-content-center">Contact:</h2>

                <ul class="list-group">
                    <li class="list-group-item">I'm from: ${userLocation}</li>
                    <li class="list-group-item">LinkedIn: ${linkedIn}</li>
                    <li class="list-group-item">GitHub: ${gitHub}</li>
                </ul>
            </div>

            
        </body>
    </html>
    `
}

// const initialize = () =>{
//     promptUser()
//     .then((response) => fs.writeFileSync('index.html', generateHTML(response)));
// }

// initialize(); 