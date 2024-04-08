import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';

function App() {
  const urlPokemon = 'https://pokeapi.co/api/v2/pokemon/1';
  const urlRick = 'https://rickandmortyapi.com/api/character/1';

  const [pokemonData, setPokemonData] = useState(null);
  const [rickData, setRickData] = useState(null);

  useEffect(() => {
    // Función para obtener datos del Pokémon
    const fetchPokemon = async () => {
      try {
        const response = await fetch(urlPokemon); // Realizamos la solicitud Fetch a la URL del Pokémon
        if (!response.ok) {
          throw new Error('Error al obtener datos del Pokémon');
        }
        const data = await response.json(); // Convertimos la respuesta a formato JSON
        setPokemonData(data); // Actualizamos el estado con los datos del Pokémon
      } catch (error) {
        console.error('Error al obtener datos del Pokémon:', error);
      }
    };

    // Función para obtener datos de Rick
    const fetchRick = async () => {
      try {
        const response = await fetch(urlRick); // Realizamos la solicitud Fetch a la URL de Rick
        if (!response.ok) {
          throw new Error('Error al obtener datos de Rick');
        }
        const data = await response.json(); // Convertimos la respuesta a formato JSON
        setRickData(data); // Actualizamos el estado con los datos de Rick
      } catch (error) {
        console.error('Error al obtener datos de Rick:', error);
      }
    };

    // Llamamos a las funciones para obtener los datos del Pokémon y de Rick cuando el componente se monta
    fetchPokemon();
    fetchRick();
  }, []); // El segundo argumento de useEffect es un array vacío para indicar que solo queremos que se ejecute una vez al montar el componente

  console.log('Datos del Pokémon:', pokemonData);
  console.log('Datos de Rick:', rickData);
  
  return (
    <>
    </>
  );
}

export default App;
