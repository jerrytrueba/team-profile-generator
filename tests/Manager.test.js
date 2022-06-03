const Manager = require("../lib/Manager");

test('This is the test for the office number', () => {
    let testOffice = 1;
    let a = new Manager(null, null, null, 1)
    expect(a.getOffice()).toBe(testOffice)
})

test('This is the test for the role', () => {
    let testRole = "Manager";
    let a = new Manager(null, null, null)
    expect(a.getRole()).toBe(testRole)
})