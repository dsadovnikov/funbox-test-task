import React from 'react';
import Card from '../Card/Card';

const CardList = ({ products }) => {
  return (
    <div className="cardList">
      {products.map((item) => (
        <Card key={item.id} product={item} />
      ))}
    </div>
  );
};

export default CardList;
