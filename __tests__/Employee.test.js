// Adding required fs file for testing
const Employee = require("../lib/Employee");

// Adding tests for various methods 
test("Name generated from getName", () => {
    const testName = "Malick";
    const sampleEmployee = new Employee(testName);
    expect(sampleEmployee.getName()).toBe(testName);
})

test("ID generated from getID", () => {
    const testID = 1286;
    const sampleEmployee = new Employee("Malick Ba", testID);
    expect(sampleEmployee.getId()).toBe(testID);
})

test("Email generated from getEmail", () => {
    const testEmail = "test@email.com";
    const sampleEmployee = new Employee("Malick Ba", 305, testEmail);
    expect(sampleEmployee.getEmail()).toBe(testEmail);
})

test("Role generated from getRole", () => {
    const returnValue = "Employee";
    const sampleEmployee = new Employee("Malick Ba", 305, "test@email.com");
    expect(sampleEmployee.getRole()).toBe(returnValue);
})

test("New employee generated", () => {
    const sampleEmployee = new Employee();
    expect(typeof(sampleEmployee)).toBe("object");
})

test("Name generated", () => {
    const name = "Malick Ba";
    const sampleEmployee = new Employee(name);
    expect(sampleEmployee.name).toBe(name);
})

test("ID generated", () => {
    const id = 1286;
    const sampleEmployee = new Employee("Malick Ba", id);
    expect(sampleEmployee.id).toBe(id);
})

test("Email generated", () => {
    const email = "test@email.com";
    const sampleEmployee = new Employee("Malick", 1286, email);
    expect(sampleEmployee.email).toBe(email);
})