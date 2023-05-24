const { describe } = require('node:test')
const Pokedex = require('./pokedex')

describe('Pokedex', () => {
    it('returns an empty array if no pokemon have been caught', () => {
        pokedex = new Pokedex();
        expect(pokedex.all()).toEqual([]);
    });
    
    it('catches a pokemon', (done) => {
        pokedex = new Pokedex();
        pokedex.catch('pikachu').then(() =>{
            expect(pokedex.all()[0].name).toBe('pikachu');
            done();
        }
        );
    });

    it('catches multiple pokemon', (done) => {
        pokedex = new Pokedex();
        pokedex.catch('pikachu').then(() =>{
            pokedex.catch('charizard').then(() =>{
                expect(pokedex.all()[0].name).toBe('pikachu');
                expect(pokedex.all()[0].id).toBe(25);
                expect(pokedex.all()[1].name).toBe('charizard');
                expect(pokedex.all()[1].id).toBe(6);
                done();
            });
        });
    });


});