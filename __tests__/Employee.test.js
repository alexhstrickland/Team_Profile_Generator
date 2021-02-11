const Employee = require("..lib/Employee");

test("Can instantiate Employee instance", () => {
    const emp = new Employee();
    expect(typeof(emp)).toBe("object");
})