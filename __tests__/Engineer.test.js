const { test, expect } = require("@jest/globals");
const Engineer = require("../lib/Engineer");

test("Can instantiate engineer instance", () => {
    const emp = new Engineer();
    expect(typeof(emp)).toBe("object");
})

test("Can set engineer name using constructor", () => {
    const name = "Alex";
    const emp = new Engineer(name);
    expect(emp.name).toBe(name);
})

test("Can set engineer id using Engineer constructor", () => {
    const id = 123;
    const emp = new Engineer("Alex", 123);
    expect(emp.id).toBe(id);
})

test("Can set engineer email using Engineer constructor", () => {
    const email = "alexhstrickland@gmail.com";
    const emp = new Engineer("Alex", 123, email);
    expect(emp.email).toBe(email);
})

test("Can set engineer github username using Engineer constructor", () => {
    const github = "alexhstrickland";
    const emp = new Engineer("Alex", 123, "alexhstrickland@gmail.com", github);
    expect(emp.github).toBe(github);
})

test("Can set engineer role using Engineer constructor", () => {
    const role = "Engineer";
    const emp = new Engineer("Alex", 123, "alexhstrickland@gmail.com", "alexhstrickland", role);
    expect(emp.role).toBe(role);
})