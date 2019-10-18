import React from 'react';
import { Switch, Route } from 'react-router-dom';
import GlobalStyles from './style/GlobalStyles';

import Header from './components/Header.js';
import WelcomePage from './components/WelcomePage';
import CharacterList from './components/CharacterList';
import CharacterDetails from './components/CharacterDetails';

export default function App() {
  return (
    <>
      <GlobalStyles />
      <main>
        <Header />
        <Switch>
          <Route exact path='/'>
            <WelcomePage />
          </Route>
          <Route exact path='/characters'>
            <CharacterList />
          </Route>
          <Route path='/character/:id'>
            <CharacterDetails />
          </Route>
        </Switch>
      </main>
    </>
  );
}
