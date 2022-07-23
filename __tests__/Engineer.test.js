// Adding required file from .lib/ for testing
const Engineer = require("../lib/Engineer");

// Test the validity of adding an Engineer 

// If a GitHub account is entered, it should be returned
test("Testing: Github link can be generated", () => {
    const testGithub = "malickbax";
    const employeeSample = new Engineer("Malick Ba", 305, "sample@email.com", testGithub);
    expect(employeeSample.github).toBe(testGithub);
});

// GitHub account entered should be returned
test("Testing: getGithub returns GitHub account", () => {
    const testGithub = "Malick Ba";
    const employeeSample = new Engineer("Malick Ba", 305, "sample@email.com", testGithub);
    expect(employeeSample.getGithub()).toBe(testGithub);
});

// Application should return "Engineer" as employee role
test("Testing: Role for Engineer returns Engineer", () => {
    const returnValue = "Engineer";
    const employeeSample = new Engineer("Malick Ba", 305, "sample@email.com", "Malick Ba");
    expect(employeeSample.getRole()).toBe(returnValue);
});