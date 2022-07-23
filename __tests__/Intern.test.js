// Test the validity of adding an Intern 
const Intern = require("../lib/Intern");

// If a university is created, it should return the tested university
test("Testing: University can be generated", () => {
    const testUniversity = "University Name";
    const employeeInstance = new Intern("Malick Ba", 2, "test@email.com", testUniversity);
    expect(employeeInstance.university).toBe(testUniversity);
});

// If an office number is entered it should return it
test("Testing: officeNumber returns the office number", () => {
    const testUniversity = "University Name";
    const employeeInstance = new Intern("Malick Ba", 2, "test@email.com", testUniversity);
    expect(employeeInstance.getUniversity()).toBe(testUniversity);
});

// Application should return "Intern" as  employee role
test("Testing: Role for Intern returns Intern", () => {
    const returnValue = "Intern";
    const employeeInstance = new Intern("Malick Ba", 2, "test@email.com", "University Name");
    expect(employeeInstance.getRole()).toBe(returnValue);
});