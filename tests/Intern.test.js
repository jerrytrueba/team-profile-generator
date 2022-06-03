const Intern = require("../lib/Intern.js");

test('This is the test for the school', () => {
    let testSchool = "IVC";
    let a = new Intern(null, null, null, "IVC")
    expect(a.getSchool()).toBe(testSchool)
})

test('This is the test for the role', () => {
    let testRole = "Intern";
    let a = new Intern(null, null, null)
    expect(a.getRole()).toBe(testRole)
})