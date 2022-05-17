// employee constructor 
class Employee {
  constructor (name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email 
  }

  // returning name from input for Employee
  getName () {
      return this.name;
  }

  // returning ID from input for all Employee
  getId () {
      return this.id;
  }   

  // returning email from input for Employee
  getEmail () {
      return this.email;
  }

  // returning employee type Manager, Engineer, Intern
  getRole () {
      return 'Employee'; 
  }
};

// exported 
module.exports = Employee; 