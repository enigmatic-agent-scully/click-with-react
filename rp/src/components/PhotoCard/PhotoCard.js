import React from 'react';
import './PhotoCard.css';

const PhotoCard = props => {
  return (
    <div className='click-item'>
      <img
        key={props.id}
        src={props.image}
        className='img-thumbnail'
        alt={props.name}
        id={props.id}
        onClick={() => props.handleClick(props.id)}
      />
    </div>
  );
};

export default PhotoCard;
