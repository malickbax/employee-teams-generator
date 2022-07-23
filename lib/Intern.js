// Require Employee constructor file
const Employee = require("./Employee");

// Adding Intern class from Employee constructor
class Intern extends Employee {
    constructor(name, id, email, university) {
        super (name, id, email);
        this.university = university;        
    }
    getUniversity() {
        return this.university;
    }
    getRole () {
        return "Intern"
    }
}

module.exports = Intern;
