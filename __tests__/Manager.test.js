const Manager = require("../lib/Manager");

test("Can instantiate Manager instance", () => {
    const emp = new Manager();
    expect(typeof(emp)).toBe("object");
})

test("Can set manager name using constructor", () => {
    const name = "Alex";
    const emp = new Manager(name);
    expect(emp.name).toBe(name);
})

test("Can set manager id using Manager constructor", () => {
    const id = 123;
    const emp = new Manager("Alex", 123);
    expect(emp.id).toBe(id);
})

test("Can set manager email using Manager constructor", () => {
    const email = "alexhstrickland@gmail.com";
    const emp = new Manager("Alex", 123, email);
    expect(emp.email).toBe(email);
})

test("Can set manager office number using Manager constructor", () => {
    const officeNumber = 9199200214;
    const emp = new Manager("Alex", 123, "alexhstrickland@gmail.com", officeNumber);
    expect(emp.officeNumber).toBe(officeNumber);
})

test("Can set manager role using Manager constructor", () => {
    const role = "Manager";
    const emp = new Manager("Alex", 123, "alexhstrickland@gmail.com", 9199200214, role);
    expect(emp.role).toBe(role);
})