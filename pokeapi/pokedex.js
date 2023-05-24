const fetchPokemon = require('./api')

class Pokedex {
    constructor() {
        this.allPokemon = []
    }

    all() {
        return this.allPokemon
    }

    catch(pokemon) {
        return fetchPokemon(pokemon)
        .then((pokemon) => {
            this.allPokemon.push(pokemon)
        });
    }

};

module.exports = Pokedex;
