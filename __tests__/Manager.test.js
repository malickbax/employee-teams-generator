// Test the validity of adding a Manager 
const Manager = require("../lib/Manager");

// If an office number for Manager is created, it should return the tested office number
test("Testing: Office number can be generated", () => {
    const testOfficeNumber = 305;
    const sampleEmployee = new Manager("Malick Ba", 305, "testing@email.com", testOfficeNumber);
    expect(sampleEmployee.officeNumber).toBe(testOfficeNumber);
});

// If an office number is entered it should return it
test("Testing: Office number is returned", () => {
    const testOfficeNumber = 305;
    const sampleEmployee = new Manager("Malick Ba", 305, "testing@email.com", testOfficeNumber);
    expect(sampleEmployee.getOfficeNumber()).toBe(testOfficeNumber);
});

// Application should return "Manager" as employee role
test("Testing: Role for Manager returns Manager", () => {
    const returnValue = "Manager";
    const sampleEmployee = new Manager("Malick Ba", 305, "testing@email.com", 2);
    expect(sampleEmployee.getRole()).toBe(returnValue);
});