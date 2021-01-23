const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const fs = require('fs');
const path = require('path');

const teamMembers = [];
const id = [];

function startApp() {

    function addManager() {
        inquirer    
            .prompt([{
                type: 'text',
                name: 'name',
                message: "Enter the manager's name: "
            },
            {
                type: 'text',
                name: 'id',
                message: "Enter the manager's employee id: "
            },
            {
                type: 'text',
                name: 'email',
                message: "Enter the manager's email: "
            },
            {
                type: 'text',
                name: 'office',
                message: "Enter manager's office number:"
            }])
        .then(answers => {
            const manager = new Manager(answers.name, answers.id, answers.email, answers.office)
                teamMembers.push(manager);
                id.push(answers.id);
                console.log(teamMembers);
                console.log(id);
                createNewMember();
        }) 
    }

    function createNewMember() {
        inquirer
            .prompt([{
                type: 'list',
                name: 'menu',
                message: "What would you like to do?",
                choices: ['Engineer', 'Intern', 'Finish building my team']
            }])
            .then(answers => {
                if (answers.menu === 'Engineer') {
                    addEngineer()
                } else if (answers.menu === 'Intern') {
                    addIntern()
                } else {
                    //build team function
                }
        
            })
        
    }
        
    function addEngineer() {
        inquirer
            .prompt([{
                type: 'text',
                name: 'name',
                message: "Enter the engineer's name: "
            },
            {
                type: 'text',
                name: 'id',
                message: "Enter the engineer's employee id: "
            },
            {
                type: 'text',
                name: 'email',
                message: "Enter the engineer's email: "
            },
            {
                type: 'text',
                name: 'GitHub',
                message: "What is the engineer's GitHub username?"
            }])
        .then(answers => {
            const engineer = new Engineer(answers.name, answers.id, answers.email, answers.GitHub)
                teamMembers.push(engineer);
                id.push(answers.id);
                console.log(teamMembers);
                console.log(id);
                createNewMember();
        })
    }

    function addIntern() {
        inquirer
            .prompt([{
                type: 'text',
                name: 'name',
                message: "Enter the intern's name: "
            },
            {
                type: 'text',
                name: 'id',
                message: "Enter the intern's employee id: "
            },
            {
                type: 'text',
                name: 'email',
                message: "Enter the intern's email: "
            },
            {
                type: 'text',
                name: 'school',
                message: "What school is the intern attending?"
            }])
        .then(answers => {
            const intern = new Intern(answers.name, answers.id, answers.email, answers.school)
                teamMembers.push(intern);
                id.push(answers.id);
                console.log(teamMembers);
                console.log(id);
                createNewMember();
        })
    
    };

    function buildTeam() {
        require fr;
        require path;

    }

    addManager()
}

startApp()