import React from 'react';
import Card from './components/Card/Card';
import { defaultCards } from './utils/defaultCards';

function App() {
  return (
    <div>
      <Card product={defaultCards[0]} />
    </div>
  );
}

export default App;
