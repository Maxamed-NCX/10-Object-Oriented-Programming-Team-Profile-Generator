// importing Employee constructor 
const Employee = require('./Employee');

// manager constructor 
class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        // calling employee constructor
        super (name, id, email); 
        
        this.officeNumber = officeNumber; 
    }

    // override employee role as manager 
    getRole () {
        return "Manager";
    }
}

//  exported 
module.exports = Manager; 