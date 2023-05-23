const Candy = require('./candy')

describe('Candy', () => {
    it('returns the candy name', () => {
        const candy = new Candy('cookies',2.99)
        expect(candy.getName()).toBe('cookies')
    });

    it('returns the candy price', () => {
        const candy = new Candy('cookies',2.99)
        expect(candy.getPrice()).toBe(2.99)
    });
});