import { useState, useEffect } from 'react'
import Card from './Card'
import Score from './Score'
import '../styles/App.css'

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const names = ['geodude', 'pikachu', 'charizard'];
        const responses = await Promise.all(
          names.map(name => fetch(`https://pokeapi.co/api/v2/pokemon/${name}`))
        );
        const data = await Promise.all(responses.map(response => response.json()));
        setData(data); 
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchPokemon();
  }, []);
  
  return (
    <>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : 'Loading...'}
    </>
  )
}

export default App
