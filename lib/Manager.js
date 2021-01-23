const inquirer = require('inquirer');
const Employee = require('../lib/Employee.js');

class Manager extends Employee {

    constructor(name, id, email, officeNumber) {

        super(name, id, email)
        //do I need to call in methods from super?

        this.officeNumber = officeNumber;
   
    }
    
    getofficeNumber() {

        inquirer
            .prompt ({
                type: 'text',
                name: 'office number',
                message: "Enter the manager's office number:"
            })

    }

    getRole() {
        return "Manager"
    }

    //add menu with option to add engineer or intern or finish building team--in index file?
    // inquirer
    //     .prompt({
    //         type: 'list',
    //         name: 'menu'
    //         message: "What would you like to do?"
    //         choices: ['Add an engineer', 'Add an intern', 'Finish building my team']
    //     })

}

module.exports = Manager;