const multiply = require('./multiply.js')

describe('multiply', () => {
    it('it multiplies 2 * 2 ', () => {
        expect(multiply(2,2)).toBe(4);
    });

});