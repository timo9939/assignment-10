const createManager=function(manager){
    console.log('manager card is created')
    return`
    <html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile</title>
    <link rel="stylesheet" href="profile-css.css">
</head>
<body>
    <div class="member" id='member1'>
    <ul>
    <li>Name:${manager.name}</li>
    <li>Role:Manager</li>
    <li>ID:${manager.id} </li>
    <li>Email:${manager.email}</li>
    <li>Office Nmber:${manager.officeNum} </li>
    </ul>
    </div>
    `
    
}

const createEngineer=function(engineer){
    return`
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
        <link rel="stylesheet" href="profile-css.css">
    </head>
    <body>
        <div class="member" id='member1'>
        <ul>
        <li>Name:${engineer.name}</li>
        <li>Role:Engineer</li>
        <li>ID:${engineer.id} </li>
        <li>Email:${engineer.email}</li>
        </ul>
        </div>
    `
}

const createIntern=function(intern){
    return`
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
        <link rel="stylesheet" href="profile-css.css">
    </head>
    <body>
        <div class="member" id='member1'>
        <ul>
        <li>Name:${intern.name}</li>
        <li>Role:Intern</li>
        <li>ID:${intern.id} </li>
        <li>Email:${intern.email}</li>
        </ul>
        </div>
    `
}

generateHTML=(data)=>{

    cardArray = []; 

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role2 = employee.getRole(); 


        // call manager function
        if (role2 === 'manager') {
            const managerCard = createManager(employee);

            cardArray.push(managerCard);
        }

        else{console.log('employee is '+role2)}

        // call engineer function
        if (role2 === 'engineer') {
            const engineerCard = createEngineer(employee);

            cardArray.push(engineerCard);
        }

        // call intern function 
        if (role2 === 'intern') {
            const internCard = createIntern(employee);

            cardArray.push(internCard);
        }
        
    }


const employeeCards=cardArray.join('')

const generateTeam=generateTeamPage(employeeCards)
return generateTeam
}

const generateTeamPage=function(employeeCards){

    return`
    
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile</title>
    <link rel="stylesheet" href="profile-css.css">
</head>
<body>
<h1 header>Team Profile<header>
   <main>
   <div>
       <!--Team Cards-->
      
       ${employeeCards}
   </div>

   </main>

</body>
</html>

<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.1/jquery.min.js" integrity="sha512-aVKKRRi/Q/YV+4mjoKBsE4x3H+BkegoM/em46NNlCqNTmUYADjBbeNefNxYV7giUp0VxICtqdrbqU7iVaeZNXA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>    
`
}

module.exports=generateHTML