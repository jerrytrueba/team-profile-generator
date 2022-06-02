const Manager = require("../lib/Manager");

test("This is the test for the office number",()=> {
    const testValue = 100;
    const e = new Manager("tru", 1, "example@test.com", testValue);
    expect(e.officeNumber).toBe(testValue);
});

test("getRole() should return \"Manager\"", () => {
    const testValue = "Manager";
    const e = new Manager("tru", 1, "example@test.com", 100);
    expect(e.getRole()).toBe(testValue);
});

test("This can get the office number via getOffice()", () => {
    const testValue = 100;
    const e = new Manager("tru", 1, "example@test.com", testValue);
    expect(e.getOfficeNumber()).toBe(testValue);
});