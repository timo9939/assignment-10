const jest=require('jest')
const fs=require('fs')
const inquirer=require('inquirer')



inquirer.prompt([
    {
        type:'input',
        name:'manager-name',
        message:"Input the manager's name"
    },

    {
        type:'list',
        name:'role-option',
        message:'Choose the role of the team member',
        choices:['Engineer','Intern']

    },

    {
        type:'input',
        name:'ID',
        message:'Input your ID number'
    },

    {
        type:'input',
        name:'email',
        message:'Input yor email address'
    },

    {
        type:'office number',
        name:'office-num',
        message:'Input your office number'
    },
 
    {
        type:'input',
        name:'gitHub',
        message:'Input your Github number'

    }
])