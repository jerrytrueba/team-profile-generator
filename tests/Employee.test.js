const Employee = require("../lib/Employee");

test('This is the test for the email', () => {
  let testEmail = "example@test.com";
  let a = new Employee(null, null, "example@test.com")
  expect(a.getEmail()).toBe(testEmail)
})

test('This is the test for the name', () => {
  let testName = "Luis";
  let a = new Employee('Luis', null, null)
  expect(a.getName()).toBe(testName)
})

test('This is the test for the role', () => {
  let testRole = "Employee";
  let a = new Employee(null, null, null)
  expect(a.getRole()).toBe(testRole)
})

test('This is the test for the ID', () => {
  let testId = 1;
  let a = new Employee(null, 1, null)
  expect(a.getId()).toBe(testId)
})