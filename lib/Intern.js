const inquirer = require('inquirer');
const Employee = require('../lib/Employee.js');

class Intern extends Employee {

    constructor(name, id, email, school) {

        super(name, id, email)
        //do I call in methods too?

        this.school = school;
   
    }

    getSchool() {
    
        inquirer
            .prompt({
                type: 'input',
                name: 'school',
                message: "What school is the intern attending?"
            })
    }

    getRole() {
        return "Intern"
    }

    //go back to menu
}

module.exports = Intern;