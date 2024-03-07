
const arith = require('./arith');

//Arrange
describe('arith tests', () => {

    test('add(1,2) should return 3', () => {
        //Act
        const result = arith.add(1, 2);
        //Assert
        expect(result).toBe(3);
    });

    test('subtract(1,2) should return -1', () => {
        const result = arith.subtract(1, 2);
        expect(result).toBe(-1);
    });

    test('multiply(1,2) should return 2', () => {
        const result = arith.multiply(1, 2);
        expect(result).toBe(2);
    });

    test('divide(1,2) should return 0.5', () => {
        const result = arith.divide(1, 2);
        expect(result).toBe(0.5);
    });

    test('divide(1,0) should throw an error', () => {
        expect(() => arith.divide(1, 0)).toThrow('Cannot divide by zero');
    });


})