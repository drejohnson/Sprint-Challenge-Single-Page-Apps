import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import CharacterCard from './CharacterCard';
import SearchForm from './SearchForm';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    async function getCharacters() {
      const response = await axios.get(
        'https://rickandmortyapi.com/api/character/',
      );
      setCharacters(response.data.results);
    }
    getCharacters();
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  const handleSearch = e => setQuery(e.target.value);

  return (
    <section className='character-list'>
      <h2>Characters</h2>
      <SearchForm handleSearch={handleSearch} query={query} />
      {characters.map(character => {
        return character.name.toLowerCase().includes(query.toLowerCase()) ? (
          <Link to={`/character/${character.id}`} key={character.id}>
            <CharacterCard character={character} />
          </Link>
        ) : null;
      })}
    </section>
  );
}
