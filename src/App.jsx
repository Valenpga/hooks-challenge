
import useFetchCharacter from './hooks/useFecthCharacters.js';
import './App.css';
import CardApp from './CardApp.jsx'; //components

function App() {
  const urlPokemon = 'https://pokeapi.co/api/v2/pokemon/1';
  const urlRick = 'https://rickandmortyapi.com/api/character/1';
  const { data: pokemon, loading: pokemonLoading} = useFetchCharacter(urlPokemon)
  const { data: rick, loading: rickLoading } = useFetchCharacter(urlRick)
  const isLoading = <p>Loading</p>
  


  return (
    <>
    
    {pokemonLoading 
      ? (isLoading) 
      : (<CardApp 
          title='Personaje Pokemon'
          name={pokemon.name}
          image={pokemon.sprites.other.dream_world.front_default}
          />)
    }
    {rickLoading 
      ? (isLoading) 
      : (<CardApp 
          title='Personaje Rick and Morty'
          name={rick.name}
          image={rick.image}
        />)
    }    
    </>
    );
}

export default App;
