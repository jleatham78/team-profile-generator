const inquirer = require('inquirer');
const Employee = require('../lib/Employee.js');

class Engineer extends Employee {

    constructor(name, id, email, github) {

        super(name, id, email)
        //do I call in methods from super?

        this.github = github;
   
    }

    getGitHub() {

        inquirer
            .prompt({
                type: 'text',
                name: 'GitHub username',
                message: "What is the engineer's GitHub username?"
            })
    }
        
    getRole() {
        return "Engineer"
    }

    //go back to menu

}

module.exports = Engineer;