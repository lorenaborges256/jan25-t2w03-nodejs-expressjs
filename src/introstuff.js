// const { getPokemonName } = require("./getPokemonName"); //require things from anotherfile and store in a variable

// Methode 1 for importing and using stuff from packages
// const pokemon = require("pokemon"); //require the pokemon package and store in a variable
// pokemon.random(); //use the random function from the pokemon package


// Methode 2 for importing and using stuff from packages
// This is object destructuring, we are taking the random function from the pokemon package and storing it in a variable called random
// const {random} = require("pokemon"); 
// Alias is preferred when importing generics things
const {random: pokemonRandom} = require("pokemon"); 
console.log(pokemonRandom()); //use the random function from the pokemon package

console.log("Hello, World!");


// console.log(pokemon.random()); 

// Import a function and run it.

// async function app(){
//     let pokemonName = await getPokemonName();
//     console.log(getPokemonName);
//     console.log(await getPokemonName()); 
//     console.log(pokemonName); 
// }

// app();

