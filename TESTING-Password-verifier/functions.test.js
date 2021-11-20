//File functions.test.js:

const functions = require('./functions.js');

const output = 'Celia1';

 // Start with expect()
        // Inside the first brackets put what you want to test. That will be a function.
        // Then follows your .toBeSomethingSomething function,
        // find the appropriate function in the documentation.


test('password is not null', () => {
    
  expect(functions.isNotNull(output)).not.toBeFalsy();
});

test('pwd shorter than 9 char', () => {

    expect(functions.hasRightLength(output).length).toBeLessThanOrEqual(9);
});

test('pwd contains uppercase', () => {
    expect(functions.hasUpperCaseCharacter(output)).toMatch(/[A-Z]/);
});

test('pwd contains lowercase', () => {
    expect(functions.hasLowerCaseCharacter(output)).toMatch(/[a-z]/);
});

test('pwd contains number', () => {
    expect(functions.hasDigit(output)).toMatch(/\d/);
});

test('password verified', () => {
    
    expect(functions.verifyPassword(output)).toBeTruthy();

});

//expect(functions.minimumConditionsReached(output)).toBeGreaterThanOrEqual(3);