import React from 'react';
import styled from 'styled-components/macro';

const Input = styled.input`
  appearance: none;
  -webkit-appearance: none;
  color: #2c3e50;
  font-family: 'Helvetica', arial, sans-serif;
  font-size: 18px;
  border: 1px solid #ecf0f1;
  background: #ecf0f1;
  width: 100%;
  height: 60px;
  padding: 1rem;
  margin: 2rem 0;
  display: inline-block !important;
  visibility: visible !important;
  border-radius: 30px;

  &:focus {
    outline: none;
  }
`;

export default function SearchForm({ handleSearch, query }) {
  return (
    <Input
      type='text'
      onChange={handleSearch}
      value={query}
      placeholder='Search characters...'
      autoFocus
    />
  );
}
