const Employee = require("./lib/Employee");

class Engineer extends Employee {
    constructor(name, id, email, githubUser) {
        super(name, id, email) 
        this.githubUser = githubUser;
    }

    getGithubUser() {
        return this.githubUser;
    }

    getRole() {
        return 'Engineer';
    }
}

module.exports = Engineer;