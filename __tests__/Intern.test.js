// Adding required file from .lib/ for testing
const Intern = require("../lib/Intern");

// Test the validity of adding a an Intern 

// If a university is created, it should return the tested university
test("Testing: University can be generated", () => {
    const testUniversity = "University Name";
    const employeeSample = new Intern("Malick Ba", 305, "test@email.com", testUniversity);
    expect(employeeSample.university).toBe(testUniversity);
});

// If an office number is entered it should return it
test("Testing: officeNumber returns the office number", () => {
    const testUniversity = "University Name";
    const employeeSample = new Intern("Malick Ba", 305, "test@email.com", testUniversity);
    expect(employeeSample.getUniversity()).toBe(testUniversity);
});

// Application should return "Intern" as  employee role
test("Testing: Role for Intern returns Intern", () => {
    const returnValue = "Intern";
    const employeeSample = new Intern("Malick Ba", 305, "test@email.com", "University Name");
    expect(employeeSample.getRole()).toBe(returnValue);
});