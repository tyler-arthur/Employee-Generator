// TODO: Write code to define and export the Employee class
class Employee {
    
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        const role = "Employee";
        return (role);
    }

}

const alice = new Employee('Alice', 1, 'test@test.com');
console.log(alice);
alice.getId();
alice.getEmail();
alice.getRole();

module.exports = Employee;
