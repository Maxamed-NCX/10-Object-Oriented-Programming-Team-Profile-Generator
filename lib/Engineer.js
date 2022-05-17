// importing Employee constructor 
const Employee = require("./Employee");

// engineer constructor to employee constructor 
class Engineer extends Employee {
    constructor (name, id, email, github) {
        //  employee constructor 
        super (name, id, email);

        this.github = github; 
    }

    // returning github from input 
    getGithub () {
        return this.github;
    }

     // override employee role as engineer
    getRole () {
        return "Engineer";
    }
}

// exported 
module.exports = Engineer; 