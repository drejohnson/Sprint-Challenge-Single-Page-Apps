import React from 'react';
import Header from './components/Header.js';
import GlobalStyles from './style/GlobalStyles';

export default function App() {
  return (
    <>
      <GlobalStyles />
      <main>
        <Header />
      </main>
    </>
  );
}
