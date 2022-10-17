export const getPokemon = async (pokemon) => {
  try {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    const res = await fetch(url);
    return await res.json();
  } catch (error) {
    console.log("GetpokemonAPI", error.message);
  }
};
export const getPokemons = async (limit, offset) => {
  try {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
    const res = await fetch(url);
    return await res.json();
  } catch (error) {
    console.log("Getpokemon(s)API", error.message);
  }
};
export const getPokemonData = async (url) => {
  try {
    const res = await fetch(url);
    return await res.json();
  } catch (error) {
    console.log("GetpokemonData", error.message);
  }
};
