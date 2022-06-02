const Engineer = require("../lib/Engineer");

test("This is the test for the Github account",() => {
    const testValue = "GithubAccount";
    const e = new Engineer("tru", 1, "example@test.com",testValue);
    expect(e.github).toBe(testValue);
});

test("getRole() should return \"Engineer\"", () => {
    const testValue = "Engineer";
    const e = new Engineer("tru", 1, "example@text.com", "GithubAccount");
    expect(e.getRole()).toBe(testValue);
});

test("This can get the github account", () => {
    const testValue = "GithubAccount";
    const e = new Engineer("tru", 1, "example@text.com", testValue);
    expect(e.getGithub()).toBe(testValue);
});