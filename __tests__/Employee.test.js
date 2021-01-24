const Employee = require('../lib/Employee.js');

test('creates an employee object', () => {
    const employee = new Employee('dave', '1234', 'email');

    expect(employee.name).toBe('dave');
    expect(employee.id).toBe('1234');
    expect(employee.email).toBe('email');
    
    expect(employee.getName()).toBe('dave');

});