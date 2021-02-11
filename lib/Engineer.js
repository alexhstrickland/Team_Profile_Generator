const Employee = require("./lib/Employee");

class Engineer extends Employee {
    constructor(name, id, email, role, githubUser) {
        super(name, id, email, role) 
        this.githubUser = githubUser;
    }

    getGithubUser() {
        return this.githubUser;
    }
}

module.exports = Engineer;