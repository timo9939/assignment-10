const employee=require('./employee')

class manager extends employee{
    constructor(name,id,email,officeNum){

    super(name,id,email)
    this.officeNum=officeNum}


getRole (){
    return "manager";
}
}
module.exports=manager