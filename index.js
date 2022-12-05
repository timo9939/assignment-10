const jest=require('jest')
const fs=require('fs')
const inquirer=require('inquirer')

//Link to library
const manager=require('./lib/manager')
const engineer=require('./lib/engineer')
const intern=require('./lib/intern')

const generateHTML=require('./src/generateTeamProfile')
const employee = require('./lib/employee')
// const { profile } = require('console')


const teamMemberArr=[]

const addManager=()=>{
return inquirer.prompt([
    {
        type:'input',
        name:'name',
        message:"Input the manager's name"
    },

    {
        type:'input',
        name:'id',
        message:'Input manager ID number'
    },

    {
        type:'input',
        name:'email',
        message:'Input manager email address'
    },

    {
        type:'office number',
        name:'officeNum',
        message:'Input manager office number'
    },

])
.then(inputManager=>{
  const {name,id,email,officeNum} = inputManager
  const manager2=new manager(name,id,email,officeNum)

  teamMemberArr.push(manager2);
  console.log('manager is '+manager2)})
}

const addTeamMember=()=>{
    return inquirer.prompt([
        {
            type:'input',
            name:'employeeName',
            message:'Inpur team member name'
        },

        {
            type:'list',
            name:'role',
            message:'Choose the role of the team member',
            choices:['Engineer','intern']
    
        },

        {
            type:'input',
            name:'id',
            message:"Input team member ID number"
        },

        {
            type:'input',
            name:'email',
            message:'Input team member email'
        },

        {
            type:'input',
            name:'gitHub',
            message:'Input team member Github name'
    
        },

        {
            type:'input',
            name:'school',
            message:'Input team member school name'
        },

        {
            type:'confirm',
            name:'finish',
            message:'All Done. Press Y to add more member and n to create profile',
            
        }
    ])
    .then(employeeData=>{
        let {employeeName,id,email,role,gitHub,school,finish}=employeeData
        let employee

        if(role==='Engineer'){
            employee=new engineer(employeeName,id,email,gitHub)
            console.log(engineer)
        }

        else {
            employee=new intern(employeeName,id,email,school)
            console.log(intern)
        }

        teamMemberArr.push(employee)

        if(finish){
            return addTeamMember(teamMemberArr)}
        else{
            return teamMemberArr
        }
    })
};

const writeFile=data=>{
fs.writeFile('dist/teamProfile.html',data,(err)=>{
        if(err){
        console.log("profile.html fail to generate "+ err)
        return;}
        else{
            console.log('profile.html generate successful')
        }
    })
}

addManager()
    .then(addTeamMember)
    .then(teamMemberArr =>{
        console.log('generateHTML(teamMemberArr) is returned')
        return generateHTML(teamMemberArr)
    })

    .then(HTMLPage=>{
        return writeFile(HTMLPage)
    })

    .catch(err=>{
        console.log(err)
    })


