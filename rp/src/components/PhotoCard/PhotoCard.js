import React from 'react';
import './PhotoCard.css';

const PhotoCard = props => {
  return (
    <div className='col-md-4'>
      <div className='click-item'>
        <img
          key={props.id}
          src={props.image}
          className='img-thumbnail img-fluid'
          alt={props.name}
          id={props.id}
          onClick={() => props.handleClick(props.id)}
        />
      </div>
    </div>
  );
};

export default PhotoCard;
