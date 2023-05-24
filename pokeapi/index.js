const fetchPokemon = require("./api");

fetchPokemon('jigglypuff').then((pokemon) => console.log(pokemon));

