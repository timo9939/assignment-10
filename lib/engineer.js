const employee= require('./employee')

class engineer extends employee{
    constructor(name,id,email,gitHub){
        super (name, id, email);

        this.gitHub = gitHub; 
    }

   
    getGithub () {
        return this.gitHub;
    }

   
    getRole () {
        return "engineer";
    }
}

module.exports = engineer; 