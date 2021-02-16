const Employee = require("../lib/Employee");

// class for engineer role
class Engineer extends Employee {
    constructor(name, id, email, github, role) {
        super(name, id, email) 
        this.github = github;
        this.role = role;
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return 'Engineer';
    }
}

module.exports = Engineer;