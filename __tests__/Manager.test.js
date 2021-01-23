const Manager = require('../lib/Manager.js');

test('creates an manager object', () => {
    const manager = new Manager('cory', 2345, '2email', 204);

    expect(typeof manager.name).toBe('string');
    expect(typeof manager.id).toBe('number');
    expect(typeof manager.email).toBe('string');
    expect(typeof manager.officeNumber).toBe('number');
    
});