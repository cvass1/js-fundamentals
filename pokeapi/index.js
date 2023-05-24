const fetchPokemon = require("./api");
const Pokedex = require('./pokedex');

fetchPokemon('jigglypuff').then((pokemon) => console.log(pokemon));

// pokedex = new Pokedex();
// pokedex.catch('pikachu').then(() => {
//     pokedex.catch('charizard').then(() => {
//         result = pokedex.all();
//         console.log(result);
//     }
//     );
// });









