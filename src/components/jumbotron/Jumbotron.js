import React from 'react';

const Jumbotron = () => {
  return (
    <div className='jumbotron'>
      <h1 className='display-4'>React Memory Game</h1>
      <p className='lead'>
        For every unique click, you get a point! But be careful; click a
        character twice and you lose!
      </p>
    </div>
  );
};

export default Jumbotron;
