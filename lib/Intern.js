// importing Employee constructor 
const Employee = require('./Employee');

// intern constructor 
class Intern extends Employee  {
    constructor (name, id, email, school) {
        //  employee constructor
        super (name, id, email); 

        this.school = school; 
    }

    // returning school from input 
    getSchool () {
        return this.school;
    }

    // override employee role as intern
    getRole () {
        return "Intern";
    }
}

// exported 
module.exports = Intern; 