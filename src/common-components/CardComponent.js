import React from 'react';

export default function CardComponent({ imageProp, cardHeader }) {
  return (
    <div className="card-main">
      <div>
        <img src={imageProp} alt="image" />
      </div>
      <div className="card-header">{cardHeader}</div>
    </div>
  );
}
