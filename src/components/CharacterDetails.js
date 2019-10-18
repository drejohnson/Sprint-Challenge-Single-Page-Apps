import React, { useEffect, useState } from 'react';
import CharacterCard from './CharacterCard';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function CharacterDetails() {
  let { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    (async function getCharacter() {
      try {
        const response = await axios.get(
          `https://rickandmortyapi.com/api/character/${id}`,
        );
        setCharacter(response.data);
      } catch (err) {
        console.log(err);
        throw err;
      }
    })();
  }, [id]);
  return <CharacterCard character={character} detail />;
}
