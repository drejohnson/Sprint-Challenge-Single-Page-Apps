import { gql } from 'graphql.macro';

export const CHARACTERS_QUERY = gql`
  query GetAll($page: Int, $name: String) {
    characters(page: $page, filter: { name: $name }) {
      results {
        id
        name
        image
      }
    }
  }
`;

export const CHARACTER_QUERY = gql`
  query GetCharacter($id: ID) {
    character(id: $id) {
      id
      name
      image
    }
  }
`;
