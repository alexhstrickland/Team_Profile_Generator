const Employee = require("../lib/Employee");

// class for intern role
class Intern extends Employee {
    constructor(name, id, email, school, role) {
        super(name, id, email)
        this.school = school;
        this.role = role;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return 'Intern';
    }
}

module.exports = Intern;