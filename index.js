const jest=require('jest')
const fs=require('fs')
const inquirer=require('inquirer')

//Link to library
const manager=require('./lib/manager')
const engineer=require('./lib/engineer')
const intern=require('./lib/intern')

const generateHTML=require('./src/generate-team-profile')


const teamMemberArr=[]

const addManager=()=>{
return inquirer.prompt([
    {
        type:'input',
        name:'managerName',
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
        name:'officeNum',
        message:'Input your office number'
    },
 
    {
        type:'input',
        name:'gitHub',
        message:'Input your Github name'

    },

    {
        type:'list',
        name:'finish',
        message:'All Done. Do you want to exit or add another team members',
        choices:['Exit and generate a profile','Add another team members']
    }
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
            message:'Inpur employee name'
        },

        {
            type:'input',
            name:'ID',
            message:"Input employee's ID number"
        },

        {
            
        }
    ])
}
//   `

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Team Profile</title>
//     <link rel="stylesheet" href="profile-css.css">
// </head>
// <body>
//     <div class="member" id='member1'>
//     <ul>
//     <li>Name:${reaction.managerName}</li>
//     <li>Role:Manager</li>
//     <li>ID:${reaction.ID} </li>
//     <li>Email:${reaction.email}</li>
//     <li>Office Nmber:${reaction.officeNum} </li>
//     </ul>
//     </div>
    
//     <div class="member" id='member2'>
//         <ul>
//         <li>Name:</li>
//         <li></li>
//         <li>ID: </li>
//         <li>Email: </li>
//         <li>Office Nmber: </li>
//         </ul>
//         </div>

//     <div class="member" id='member3'>
//     <ul>
//     <li>Name:</li>
//     <li></li>
//     <li>ID: </li>
//     <li>Email: </li>
//     <li>Office Nmber: </li>
//     </ul>
//     </div>

//     <div class="member" id='member4'>
//         <ul>
//         <li>Name:</li>
//         <li></li>
//         <li>ID: </li>
//         <li>Email: </li>
//         <li>Office Nmber: </li>
//         </ul>
//         </div>

//     <div class="member" id='member5'>
//     <ul>
//     <li>Name:</li>
//     <li></li>
//     <li>ID: </li>
//     <li>Email: </li>
//     <li>Office Nmber: </li>
//     </ul>
//     </div>

// </body>
// </html>

// `

// fs.writeFile('src/team-profile.html',htmlText,(err)=>{
//     if(err)
//     console.log("profile.html fail to generate"+ err)
//     else{
//         console.log('profile.html generate successful')
//     }
// })

// })

