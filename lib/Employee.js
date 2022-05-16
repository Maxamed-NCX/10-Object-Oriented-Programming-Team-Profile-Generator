
// // creating Employee 
// class Employee {
//     constructor(name,id,email){
//       this.name = name;
//       this.id = id;
//       this.email = email;
//     };

//     getName = () => this.name;
//     getId = () => this.id;
//     getEmail = () => this.email;
//     getRole = () => 'Employee';
// };

// module.exports = Employee;


// employee constructor 
class Employee {
  constructor (name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email 
  }

  // returning name from input
  getName () {
      return this.name;
  }

  // returning ID from input
  getId () {
      return this.id;
  }   

  // returning email from input
  getEmail () {
      return this.email;
  }

  // returning employee type 
  getRole () {
      return 'Employee'; 
  }
};

// to be exported 
module.exports = Employee; 