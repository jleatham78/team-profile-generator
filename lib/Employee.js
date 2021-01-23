const inquirer = require("inquirer");

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {

        inquirer
            .prompt(
            {
                type: 'text',
                name: 'name',
                message: "Enter the employee's name:"
            })
    }

    getId() {

        inquirer
            .prompt(
            {
                type: 'text',
                name: 'employee id',
                message: "Enter the employee's ID:"
            })
    }

    getEmail() {
    
        inquirer
            .prompt (
            {    
                type: 'text',
                name: 'email',
                message: "Enter the employee's email address:"   
            })
    }

    getRole() {
        return "Employee";
    }   
}

module.exports = Employee;