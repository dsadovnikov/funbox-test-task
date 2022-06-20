import React, { useEffect, useState } from 'react';

const Card = ({ product }) => {
  const [status, setStatus] = useState('default');
  const [isHovered, setIsHovered] = useState(false);

  let cardClasses = ['card'];

  useEffect(() => {
    product.isAvailable ? setStatus('default') : setStatus('disabled');
  }, [product]);

  if (status === 'disabled') {
    cardClasses.push('card_disabled');
  }

  if (status === 'selected') {
    cardClasses.splice(1, 0, 'card_selected');
  }

  if (isHovered) {
    cardClasses.push('card_hovered');
  }

  const onClick = (e) => {
    e.preventDefault();
    if (status !== 'disabled') {
      status === 'default' ? setStatus('selected') : setStatus('default');
      status === 'default' ? setIsHovered(false) : setIsHovered(true);
    }
  };

  return (
    <div
      className={cardClasses.join(' ')}
      onClick={onClick}
      onMouseEnter={(e) => {
        status !== 'disabled' ? setIsHovered(true) : null;
      }}
      onMouseLeave={(e) => {
        status !== 'disabled' ? setIsHovered(false) : null;
      }}
    >
      <div className="card__border">
        <div className="card__background">
          <div className="card__container">
            {status === 'selected' && isHovered ? (
              <p className="card__subtitle">Котэ не одобряет?</p>
            ) : (
              <h3 className="card__subtitle">{product.subtitle}</h3>
            )}
            <h2 className="card__title">
              {product.title}
              <br />
              <span className="card__filling">{product.filling}</span>
            </h2>
            <div className="card__additional">
              {product.additional.map((item, index) => {
                return (
                  <p key={index} className="card__additional-item">
                    {item.number ? (
                      <span className="card__additional-number">
                        {item.number}{' '}
                      </span>
                    ) : null}
                    {item.text}
                  </p>
                );
              })}
            </div>
            <div className="card__weight">
              {product.weight}
              <br />
              <span className="card__kg">кг</span>
            </div>
          </div>
        </div>
      </div>
      {status === 'default' ? (
        <p className="card__slogan">
          Чего сидишь? Порадуй котэ,{' '}
          <span className="card__buy-button">
            <span className="card__buy-button-text">купи</span>.
          </span>
        </p>
      ) : null}
      {status === 'selected' ? (
        <p className="card__description">{product.description}</p>
      ) : null}
      {status === 'disabled' ? (
        <p className="card__disabled">
          Печалька, {product.filling} закончился.
        </p>
      ) : null}
    </div>
  );
};

export default Card;
