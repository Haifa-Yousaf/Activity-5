const { add, subtract, multiply, divide, modulus } = require('./calculator');

test('adds 2 + 3 to equal 5', () => {
    expect(add(2, 3)).toBe(5);
});

test('subtracts 5 - 2 to equal 3', () => {
    expect(subtract(5, 2)).toBe(3);
});

test('multiplies 3 * 4 to equal 12', () => {
    expect(multiply(3, 4)).toBe(12);
});

test('divides 10 / 2 to equal 5', () => {
    expect(divide(10, 2)).toBe(5);
});

test('throws error when dividing by zero', () => {
    expect(() => divide(5, 0)).toThrow('Cannot divide by zero');
});

//Added new tests
test('modulus 10 % 3 to be 1', () => {
    expect(modulus(10, 3)).toBe(1);
});

test('throws error when modulus by zero', () => {
    expect(() => modulus(10, 0)).toThrow("Cannot take modulus by zero");
});