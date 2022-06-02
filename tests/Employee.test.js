const Employee = require("../lib/Employee");

test("This is the Employee test", () => {
    const e = new Employee();
    expect(typeof(e)).toBe("object");
  });

  test("This is the test if the name matches", () => {
    const name = "Johnny";
    const e = new Employee(name);
    expect(e.name).toBe(name);
  });

  test("This is the test for the id", () => {
    const testValue = 100;
    const e = new Employee("tru", testValue);
    expect(e.Id).toBe(testValue);
  });

  test("This is the test for the email", () => {
    const testValue = "example@test.com";
    const e = new Employee("tru", 1, testValue);
    expect(e.email).toBe(testValue);
  });

  test("This can get the name via getName()", () => {
    const testValue = "Johnny";
    const e = new Employee(testValue);
    expect(e.getName()).toBe(testValue);
  });

  test("This can get the id via getId", () => {
    const testValue = 100;
    const e = new Employee("tru", testValue);
    expect(e.getId()).toBe(testValue);
  });


  test("This can get the email via getEmail()", () => {
    const testValue = "example@test.com";
    const e = new Employee("tru", 1, testValue);
    expect(e.getEmail()).toBe(testValue);
  });


  test("getRole() should return \"Employee\"", () => {
    const testValue = "Employee";
    const e = new Employee("Johnny", 1, "example@test.com");
    expect(e.getRole()).toBe(testValue);
  });