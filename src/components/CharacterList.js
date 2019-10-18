import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useQuery } from '@apollo/client';
import CharacterCard from './CharacterCard';
import SearchForm from './SearchForm';
import { CHARACTERS_QUERY } from '../grapql/queries';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);

  // Graphql
  const [query, setQuery] = useState('');

  const { loading, error, data } = useQuery(CHARACTERS_QUERY, {
    variables: { name: query },
  });

  if (data) {
    console.log(data.characters.results);
  }

  const handleSearch = e => setQuery(e.target.value);

  // useEffect(() => {
  //   async function getCharacters() {
  //     const response = await axios.get(
  //       'https://rickandmortyapi.com/api/character/',
  //     );
  //     setCharacters(response.data.results);
  //   }
  //   getCharacters();
  //   // TODO: Add API Request here - must run in `useEffect`
  //   //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  // }, []);

  if (loading) return null;
  if (error) return `Error! ${error}`;

  return (
    <section className='character-list'>
      <h2>Characters</h2>
      <SearchForm handleSearch={handleSearch} query={query} />
      {data.characters.results.map(character => {
        return character.name.toLowerCase().includes(query.toLowerCase()) ? (
          <Fragment key={character.id}>
            <Link to={`/character/${character.id}`}>
              <CharacterCard character={character} />
            </Link>
          </Fragment>
        ) : null;
      })}
    </section>
  );
}
