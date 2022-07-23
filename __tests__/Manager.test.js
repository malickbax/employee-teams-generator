// Test the validity of adding a Manager 
const Manager = require("../lib/Manager");

// If an office number for Manager is created, it should return the tested office number
test("Can create an office number.", () => {
    const testOfficeNumber = 305;
    const sampleEmployee = new Manager("Malick Ba", 305, "testing@email.com", testOfficeNumber);
    expect(sampleEmployee.officeNumber).toBe(testOfficeNumber);
});

// If an office number is entered it should return it
test("Testing officeNumber will return office number.", () => {
    const testOfficeNumber = 305;
    const sampleEmployee = new Manager("Malick Ba", 305, "testing@email.com", testOfficeNumber);
    expect(sampleEmployee.getOfficeNumber()).toBe(testOfficeNumber);
});

// Application should return "Manager" as the employee role
test("Testing role.", () => {
    const returnValue = "Manager";
    const sampleEmployee = new Manager("Malick Ba", 305, "testing@email.com", 2);
    expect(sampleEmployee.getRole()).toBe(returnValue);
});