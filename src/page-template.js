function renderManager (manager) {

    return `
    <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${manager.name}</h5>
      <h6 class="card-subtitle mb-2 text-muted">Manager</h6>
      <h7 class="card-text">ID: ${manager.id}</h7><br>
      <h7 class="card-text">Office: ${manager.officeNumber}</h7><br>
      <a href="#" class="card-link">${manager.email}</a>
    </div>
  </div>`

    
}

function renderIntern(intern) {
    
    return `  
    <div class="card" style="width: 18rem;">
        <div class="card-body">
        <h5 class="card-title">${intern.name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">Intern</h6>
        <h7 class="card-text">ID: ${intern.id}</h7><br>
        <h7 class="card-text">School: ${intern.school}</h7><br>
        <a href="#" class="card-link">${intern.email}</a>
       </div>
    </div>`
    
}

function renderEngineer(engineer) {

    return `
    <div class="card" style="width: 18rem;">
        <div class="card-body">
         <h5 class="card-title">${engineer.name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">Engineer</h6>
        <h7 class="card-text">ID: ${engineer.id}</h7><br>
        <a href="https://github.com/" + ${engineer.github} class="card-link" target= "blank"> GitHub: ${engineer.github}</a><br>
        <a href="#" class="card-link">${engineer.email}</a>
        </div>
    </div>`

}

function generatePage(teamMembers) {

    const intern = teamMembers.filter(employee => employee.getRole() === "Intern")
    const engineer = teamMembers.filter(employee => employee.getRole() === "Engineer")
    const manager = teamMembers.filter(employee => employee.getRole() === "Manager") 

    const internHtml = intern.map((intern) => renderIntern(intern)).join("");
    const engineerHtml = engineer.map((engineer) => renderEngineer(engineer)).join("");
    const managerHtml = manager.map((manager) => renderManager(manager)).join("");
    
    return `
    <!DOCTYPE html>
    <html lang="en">
  
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Portfolio Demo</title>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
      <link rel="stylesheet" href="style.css">
    </head>
  
    <body>
      <header>
        <nav class="navbar navbar-light" style="background-color: #e3f2fd;">
        <div class="container-fluid">
          <span class="navbar-brand mb-0 h1">My Team</span>
        </div>
      </nav>
      </header>

      <main>
      <div class="container">
        <div class="row row-cols-3">
            <div class="col">${managerHtml}</div>
            <div class="col">${engineerHtml}</div>
            <div class="col">${internHtml}</div>

           </div>
        </div>
  
      </main>
      
    </body>
    </html>
    `;
}

module.exports = generatePage;