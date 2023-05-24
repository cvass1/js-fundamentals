const fetchPokemon = (name) => {
    return fetch('https://pokeapi.co/api/v2/pokemon/' + name)
    .then((response) => response.json())
    .then((data) => {
        return {
            name: data.name,
            id: data.id,
            height: data.height,
            weight: data.weight,
            type: data.types.map((typeData) => typeData.type.name),
        }

    })
    ;
};

module.exports = fetchPokemon;

