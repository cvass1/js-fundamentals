const add = require('./add.js')

describe('add', () => {
    it ('adds 2 + 2 to return 4', () => {
        expect(add(2,2)).toBe(4);
    } )

    it ('adds 0 + 5 to return 5', () => {
        expect(add(0,5)).toBe(5);
    } )

  });