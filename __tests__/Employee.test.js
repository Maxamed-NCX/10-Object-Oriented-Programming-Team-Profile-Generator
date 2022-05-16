// const Employee = require("../lib/Employee");

// it("Can instantiate Employee instance", () => {
//   const e = new Employee();
//   expect(typeof(e)).toBe("object");
// });

// it("Can set name via constructor arguments", () => {
//   const name = "Alice";
//   const e = new Employee(name);
//   expect(e.name).toBe(name);
// });

// it("Can set id via constructor argument", () => {
//   const testValue = 100;
//   const e = new Employee("Foo", testValue);
//   expect(e.id).toBe(testValue);
// });

// it("Can set email via constructor argument", () => {
//   const testValue = "test@test.com";
//   const e = new Employee("Foo", 1, testValue);
//   expect(e.email).toBe(testValue);
// });

// it("Can get name via getName()", () => {
//   const testValue = "Alice";
//   const e = new Employee(testValue);
//   expect(e.getName()).toBe(testValue);
// });

// it("Can get id via getId()", () => {
//   const testValue = 100;
//   const e = new Employee("Foo", testValue);
//   expect(e.getId()).toBe(testValue);
// });

// it("Can get email via getEmail()", () => {
//   const testValue = "test@test.com";
//   const e = new Employee("Foo", 1, testValue);
//   expect(e.getEmail()).toBe(testValue);
// });

// it("getRole() should return \"Employee\"", () => {
//   const testValue = "Employee";
//   const e = new Employee("Alice", 1, "test@test.com");
//   expect(e.getRole()).toBe(testValue);
// });


// using Employee constructor 
const Employee = require('../lib/Employee');

// creates employee  
it('creates an employee object', () => {
    const employee = new Employee('Matt', 2, 'Matt.Wilder@gmail');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

// getName() 
it('gets employee name', () => {
    const employee = new Employee('Matt', 2, 'Matt.Wilder@gmail');

    expect(employee.getName()).toEqual(expect.any(String));
    expect(employee.getName()).toEqual("Matt");
});

// getId() 
it('gets employee ID', () => {
    const employee = new Employee('Matt', 2, 'Matt.Wilder@gmail');

    expect(employee.getId()).toEqual(expect.any(Number));
});

//  getEmail()
it('gets employee email', () => {
    const employee = new Employee('Matt', 2, 'Matt.Wilder@gmail');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

//  getRole()
it('gets role of employee', () => {
    const employee = new Employee('Matt', 2, 'Matt.Wilder@gmail');

    expect(employee.getRole()).toEqual("Employee");
}); 

