const Intern = require('../lib/Intern.js');

test('creates an intern object', () => {
    const intern = new Intern('cory', 2345, '2email', 'weber');

    expect(typeof intern.name).toBe('string');
    expect(typeof intern.id).toBe('number');
    expect(typeof intern.email).toBe('string');
    expect(typeof intern.school).toBe('string');
    
});