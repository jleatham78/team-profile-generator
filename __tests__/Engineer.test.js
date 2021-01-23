const Engineer = require('../lib/Engineer.js');

test('creates an engineer object', () => {
    const engineer = new Engineer('cory', 2345, '2email', 'jleatham78');

    expect(typeof engineer.name).toBe('string');
    expect(typeof engineer.id).toBe('number');
    expect(typeof engineer.email).toBe('string');
    expect(typeof engineer.github).toBe('string');
    
});