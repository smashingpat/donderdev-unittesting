import { add } from './add';

describe('Add function', () => {
    it('should add 1 and 2', () => {
        const result = add(1, 2);
        expect(result).toBe(3);
    });

    it('should add 3 and 5', () => {
        expect(add(3, 5)).toBe(8)
    });

    it('should add two random numbers', () => {
        const a = Math.random();
        const b = Math.random();

        const expected = a + b;

        expect(add(a, b)).toBe(expected);
    });
    
    it('should throw an error, if the argument is not a number', () => {
        expect(() => add("1", 3)).toThrowError();
    });

    it('should throw an error, if any argument is not a number', () => {
        expect(() => add(1, "test")).toThrowError();
    });
});
