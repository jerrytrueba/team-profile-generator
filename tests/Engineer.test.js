const Engineer = require("../lib/Engineer");

test('This is the test for the github', () => {
    let testGithub = "luisgithub";
    let a = new Engineer(null, null, null, "luisgithub")
    expect(a.getGithub()).toBe(testGithub)
})

test('This is the test for the role', () => {
    let testRole = "Engineer";
    let a = new Engineer(null, null, null)
    expect(a.getRole()).toBe(testRole)
})