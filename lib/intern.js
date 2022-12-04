const employee=require('./employee')

class intern extends employee{
    constructor(name,id ,email, school){
        super(name, id, email); 

        this.school = school; 
    }

    // returning school from input 
    getSchool () {
        return this.school;
    }

    // override employee role to intern
    getRole () {
        return "intern";
    }
}

// to be exported 
module.exports = intern; 
    