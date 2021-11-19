//File functions.test.js:
const functions = require('./functions.js')

test('Should be null', () => {
        // Start with expect()
        // Inside the first brackets put what you want to test. That will be a function.
        // Then follows your .toBeSomethingSomething function,
        // find the appropriate function in the documentation.
        // In this case we want to check if the function "isNull()" actually
        // returned null. So "toBeNull()" makes the most sense
  expect(functions.isNull()).toBeNull();
});

test('checkValue Should be falsy when argument is undefined', () => {
    expect(functions.checkValue()).toBeFalsy();
});

test('User should be Brad Traversy object', () => {
    expect(functions.createUser()).toStrictEqual({ firstName: "Brad", lastName: "Traversy" });
});

//oplossing
test('User should be Brad Traversy object', () => {
    expect(functions.createUser()).toEqual({
    firstName: "Brad",
    lastName: "Traversy"
  });
});

// Less than or greater than
test('Should be under or equal to 1600', () => {
        const load1 = 800;
        const load2 = 800;
    expect(load1 + load2).toBeLessThanOrEqual(1600);
});

// Regex
test('There is no I in team', () => {
    expect('team').toEqual(expect.not.stringContaining('i'));
});

//oplossing
test('There is no I in team', () => {
    expect('team').not.toMatch(/I/i);
});

// Arrays - moet je een regex check hebben op hoofdletter/kleine letter?
test('Admin should be in usernames', () => {
     usernames = ['john', 'karen', 'admin'];
    expect(usernames).toEqual(expect.arrayContaining(['admin']));
});

//oplossing
test('Admin should be in usernames', () => {
     usernames = ['john', 'karen', 'admin'];
    expect(usernames).toContain('admin');
});