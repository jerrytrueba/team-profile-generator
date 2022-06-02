const Intern = require("../lib/Intern");

test("This is the test for the school", () => {
    const testValue = "IVC";
    const e = new Intern("tru", 1, "example@test.com", testValue);
    expect(e.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
    const testValue = "Intern";
    const e = new Intern("tru", 1, "example@test.com", "IVC");
    expect(e.getRole()).toBe(testValue);
});

test("This can get the school via getSchool()", () => {
    const testValue = "IVC";
    const e = new Intern("tru", 1, "example@test.com", testValue);
    expect(e.getSchool()).toBe(testValue);
});