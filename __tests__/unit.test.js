// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
test('checks if 925-333-8756 is a valid phone number', () => {
    expect(functions.isPhoneNumber('925-333-8756')).toBe(true);
});

test('checks if 925-354-8756 is a valid phone number', () => {
    expect(functions.isPhoneNumber('925-354-8756')).toBe(true);
});

test('checks if 925-34-8756 is a invalid phone number', () => {
    expect(functions.isPhoneNumber('925-34-8756')).toBe(false);
});

test('checks if 925-34-876 is a invalid phone number', () => {
    expect(functions.isPhoneNumber('925-34-876')).toBe(false);
});

test('checks if ukadir@gmail.com is a valid email', () => {
    expect(functions.isEmail('ukadir@gmail.com')).toBe(true);
});

test('checks if usman1kadir@gmail.com is a valid email', () => {
    expect(functions.isEmail('usman1kadir@gmail.com')).toBe(true);
});

test('checks if usman!kadir@gmail.com is a invalid email', () => {
    expect(functions.isEmail('usman!kadir@gmail.com')).toBe(false);
});

test('checks if usman!@gmail.com is a invalid email', () => {
    expect(functions.isEmail('usman!@gmail.com')).toBe(false);
});

test('checks if jga123 is a strong password', () => {
    expect(functions.isStrongPassword('jga123')).toBe(true);
});

test('checks if usman_kadir123 is a strong password', () => {
    expect(functions.isStrongPassword('usman_kadir123')).toBe(true);
});

test('checks if abc is not a strong password', () => {
    expect(functions.isStrongPassword('abc')).toBe(false);
});

test('checks if usman! is not a strong password', () => {
    expect(functions.isStrongPassword('usman!')).toBe(false);
});

test('checks if 9/10/2022 is a valid date', () => {
    expect(functions.isDate('9/10/2022')).toBe(true);
});
test('checks if 12/15/2022 is a valid date', () => {
    expect(functions.isDate('12/15/2022')).toBe(true);
});

test('checks if 12/15/22 is a invalid date', () => {
    expect(functions.isDate('12/15/22')).toBe(false);
});

test('checks if 123/15/2022 is a invalid date', () => {
    expect(functions.isDate('123/15/2022')).toBe(false);
});

test('checks if 123456 is a valid hexcolor', () => {
    expect(functions.isHexColor('123456')).toBe(true);
});

test('checks if 123456 is a valid hexcolor', () => {
    expect(functions.isHexColor('123')).toBe(true);
});

test('checks if 12 is a invalid hexcolor', () => {
    expect(functions.isHexColor('12')).toBe(false);
});

test('checks if 1123 is a invalid hexcolor', () => {
    expect(functions.isHexColor('1123')).toBe(false);
});