const fetchPokemon = require('./api')

describe('fetchPokemon', () =>{
    it('gets pokemon data', (done) =>{
        fetchPokemon('charizard')
        .then((pokemon) => {
            expect(pokemon.id).toBe(6);
            expect(pokemon.name).toBe('charizard');
            done();
            }
        );
    });
    it('gets pokemon data', () =>{
        return fetchPokemon('pikachu')
        .then((pokemon) => {
            expect(pokemon.id).toBe(25);
            expect(pokemon.name).toBe('pikachu');
            }
        );
    });

    it('gets pokemon data', async () =>{
        const pokemon = await fetchPokemon('jigglypuff');
        expect(pokemon.id).toBe(39);
        expect(pokemon.name).toBe('jigglypuff');
        }
    );
 });