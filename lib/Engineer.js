// Require Employee constructor file
const Employee = require("./Employee");

// Adding Engineer class from Employee constructor
class Engineer extends Employee {
    constructor (name, id, email, github) {
        super (name, id, email);
        this.github = github;
    }
    getGithub() {
        return this.github;
    }
    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;

