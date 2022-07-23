// Adding required file from .lib/ for testing
const Manager = require("../lib/Manager");

// Test the validity of adding a Manager 

// If an office number for Manager is created, it should return the tested office number
test("Testing: Office number can be generated", () => {
    const testOfficeNumber = 305;
    const employeeSample = new Manager("Malick Ba", 305, "testing@email.com", testOfficeNumber);
    expect(employeeSample.officeNumber).toBe(testOfficeNumber);
});

// If an office number is entered it should return it
test("Testing: Office number is returned", () => {
    const testOfficeNumber = 305;
    const employeeSample = new Manager("Malick Ba", 305, "testing@email.com", testOfficeNumber);
    expect(employeeSample.getOfficeNumber()).toBe(testOfficeNumber);
});

// Application should return "Manager" as employee role
test("Testing: Role for Manager returns Manager", () => {
    const returnValue = "Manager";
    const employeeSample = new Manager("Malick Ba", 305, "testing@email.com", 305);
    expect(employeeSample.getRole()).toBe(returnValue);
});