const employee= require('./employee')

class engineer extends employee{
    constructor(name,id,email,gitHub){
        super (name, id, email);

        this.gitHub = gitHub; 
    }

    // returning github from input 
    getGithub () {
        return this.gitHub;
    }

     // override employee role to engineer
    getRole () {
        return "engineer";
    }
}

module.exports = engineer; 