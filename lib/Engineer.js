// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(github) {
        super(name, id, email);
        this.github = github;
    }

    getGithub() {
        console.log(`${this.name}'s github is: ${github}`);
    }

    getRole() {
        console.log(`${this.name}'s role is: ${this}`);
    }
}

module.exports = Engineer;