import './App.css';
import React from 'react';
import useCustomHook from './hooks/useFecthCharacters';

function App() {
  const urlPokemon = 'https://pokeapi.co/api/v2/pokemon/1';
  const urlRick = 'https://rickandmortyapi.com/api/character/1';

  const pokemonData = useCustomHook(urlPokemon);
  const rickData = useCustomHook(urlRick);

 
  return (
    <div>
      <h2>Personaje de Pokemon</h2>
      {pokemonData && (
        <>
        <p>Nombre:{pokemonData.name}</p>
        <img src={pokemonData.sprites.front_default} alt={pokemonData.name}/>
        </>
      )}
      <h2>Personaje de Rick and Morty</h2>
      {rickData && (
        <>
        <p>Nombre:{rickData.name}</p>
        <img src={rickData.image} alt={rickData.name}/>
        </>
      )}
    </div>
  );
}

export default App;
