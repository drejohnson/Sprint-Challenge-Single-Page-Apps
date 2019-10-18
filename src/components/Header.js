import React from 'react';
import styled from 'styled-components/macro';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'react-feather';

const StyledHeader = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;

const Fab = styled.button`
  position: absolute;
  right: 0;
  bottom: 0;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 50px;
  background: #fff;
  border-radius: 50px;
  box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24);
  :hover {
    cursor: pointer;
  }
  :focus {
    outline: none;
  }
  will-change: transform;
  z-index: 5;
`;

export default function Header() {
  let history = useHistory();
  let isCharacters = useRouteMatch('/characters');
  let isHome = useRouteMatch('/');
  let isDetail = useRouteMatch('/character/:id');

  let handleClick = e => {
    e.stopPropagation();
    isCharacters ? history.push('/') : history.push('/characters');
  };
  let goBack = e => {
    e.stopPropagation();
    history.goBack();
  };
  return (
    <StyledHeader>
      <h1 className='ui center'>Rick &amp; Morty Fan Page</h1>
      {isDetail ? (
        <Fab type='button' onClick={goBack}>
          <ChevronLeft /> Go Back
        </Fab>
      ) : (
        <Fab type='button' onClick={handleClick}>
          {isCharacters ? (
            <>
              <ChevronLeft /> Home
            </>
          ) : (
            <>
              Characters <ChevronRight />
            </>
          )}
        </Fab>
      )}
    </StyledHeader>
  );
}
