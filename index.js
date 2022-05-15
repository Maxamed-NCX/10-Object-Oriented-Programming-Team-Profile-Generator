const inquirer = require('inquirer');
const roles = {Manager:[],Engineer:[],Intern:[]};

const promptUser(){
  return inquirer.prompt([
      {
          type: "input",
          name: "name",
          message: "Who\'s the manager of this Team?",
      },
      {
          type: "input",
          name: "id",
          message: "Please enter in Manager ID! "
      },
      {
          type: "input",
          name: "email",
          message: "What is the Manager\'s email being used? ",
          function checkEmail(emailId) {
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailId)){
            document.write("You have entered valid email.");
            return true;
            }    
            return false;
            };
      },
      {
        type: "input",
        name: "officeNumber",
        message: "What is the Manager\'s office number? ",
    },
    {
      type: "input",
      name: "name",
      message: "Who\'s the employee of this Team?",
  },
      {
        type: "input",
        name: "id",
        message: "Please enter in Employee\'s ID! "
    },
    {
        type: "input",
        name: "email",
        message: "What is the Employee\'s email being used? ",
    },
      {
          type: "input",
          name: "Github",
          message: "What is the Employee\'s github?",
          function checkGithub (GithubId) {
          if (nameInput ) {
            return true;
        } else {
            console.log ("Please enter the employee's github username!")
        }
    }
      },
      {
        type: 'list',
        name: 'role',
        message: "Please choose your employee's role",
        choices: ['Engineer', 'Intern']
    },

  ])
  .then(answeres=>{
    console.log(answeres);
  })
};

promptUser();