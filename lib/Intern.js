const Employee = require("./lib/Employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email)
        const school = this.school
    }

    getSchool() {
        return this.school;
    }
}