import React from 'react';
import Card from '../Card/Card';
import { defaultCards } from '../../utils/defaultCards';
import CardList from '../CardList/CardList';

function App() {
  return (
    <div className="app">
      <h1 className="promo">Ты сегодня покормил кота?</h1>
      <CardList products={defaultCards} />
    </div>
  );
}

export default App;
