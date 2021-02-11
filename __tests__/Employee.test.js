const Employee = require("..lib/Employee");

test("Can instantiate Employee instance", () => {
    const emp = new Employee();
    expect(typeof(emp)).toBe("object");
});

test("Can set employee name using Employee constructor", () => {
    const name = "Alex";
    const emp = new Employee(name);

    expect(emp.name).toBe(name);
});
test("Can set employee id using Employee constructor", () => {
    const name = "Alex";
    const emp = new Employee(name);

    expect(emp.name).toBe(name);
});
test("Can set employee email using Employee constructor", () => {
    const name = "Alex";
    const emp = new Employee(name);

    expect(emp.name).toBe(name);
});
