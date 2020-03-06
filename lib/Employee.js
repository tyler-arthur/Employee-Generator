// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getId() {
        console.log(`${name}'s ID is: ${id}`);
    }

    getEmail() {
        console.log(`${name}'s email is: ${email}`);
    }

    getRole() {
        console.log(`${name}'s role is: ${this}`);
    }

}

module.exports = Employee;