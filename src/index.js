const { getPokemonName } = require("./getPokemonName"); //require things from anotherfile and store in a variable

console.log("Hello, World!");


// Import a function and run it.

async function app(){
    let pokemonName = await getPokemonName();
    console.log(getPokemonName);
    console.log(await getPokemonName()); 
    console.log(pokemonName); 
}

app();