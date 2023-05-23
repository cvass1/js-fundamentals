const searchCandies = require('./searchCandies.js')

describe('searchCandies', () => {
    it('finds all candies beginning with Ma', () => {
        expect(searchCandies('Ma',10)).toEqual([ 'Mars', 'Maltesers' ]);
    });
    it('finds only candies beginning with Ma and less than £2.00', () => {
        expect(searchCandies('Ma',2)).toEqual([ 'Mars']);
    });
    it('finds only candies beginning with S ', () => {
        expect(searchCandies('S',10)).toEqual([ 'Skitties', 'Skittles', 'Starburst' ]);
    });
    it('finds only candies beginning with S and less than £4.00', () => {
        expect(searchCandies('S',4)).toEqual([ 'Skitties', 'Skittles' ]);
    });
});