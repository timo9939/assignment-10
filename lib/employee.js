class employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email 
    }

    getname () {
        return this.name;
    }

    getid () {
        return this.id;
    }   

    getemail () {
        return this.email;
    }

    getRole () {
        return 'employee'; 
    }
};

// to be exported 
module.exports = employee; 