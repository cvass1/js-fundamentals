const fizzbuzz = require('./fizzbuzz')

describe('fizzbuzz', () => {
    it('returns fizz on 3', () => {
        expect(fizzbuzz(3)).toBe('fizz');
    });
    it('returns buzz on 5', () => {
        expect(fizzbuzz(5)).toBe('buzz');
    });
    it('returns fizzbuzz on 15', () => {
        expect(fizzbuzz(15)).toBe('fizzbuzz');
    });
    it('returns 2 on 2', () => {
        expect(fizzbuzz(2)).toBe(2);
    });
});

