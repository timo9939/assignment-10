const managerCard=function(manager){
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

const engineerCard=function(engineer){
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
        <li>Office Nmber:${engineer.officeNum} </li>
        </ul>
        </div>
    `
}

const InternCard=function(intern){
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
        <li>Role:Engineer</li>
        <li>ID:${intern.id} </li>
        <li>Email:${intern.email}</li>
        <li>Office Nmber:${intern.officeNum} </li>
        </ul>
        </div>
    `
}