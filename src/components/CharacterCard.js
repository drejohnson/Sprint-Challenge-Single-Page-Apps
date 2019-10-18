import React from 'react';
import styled from 'styled-components/macro';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;
  margin: 1rem 0;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
  overflow: hidden;

  > * {
    width: 100%;
  }
`;

const CardImage = styled.img`
  margin-bottom: 2rem;
`;

const CardMeta = styled.div`
  margin-bottom: 1rem;
`;

export default function CharacterCard({ character, detail }) {
  return (
    <Card>
      <CardImage src={character.image} alt={character.name} />
      <CardMeta>
        <span>Name:</span>
        <h2>{character.name}</h2>
      </CardMeta>
      {detail ? (
        <>
          <CardMeta>
            <span>Species:</span>
            <h3>{character.species}</h3>
          </CardMeta>
          <CardMeta>
            <span>Status:</span>
            <h3>{character.status}</h3>
          </CardMeta>
          <CardMeta>
            <span>Location:</span>
            <h3>{character.location && character.location.name}</h3>
          </CardMeta>
        </>
      ) : null}
    </Card>
  );
}
