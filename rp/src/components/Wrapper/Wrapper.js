import React from 'react';
import './wrapper.css';

const Wrapper = props => {
  return (
    <div className='wrapper container'>
      <div className='row'>
        <div className='col-md'>{props.children}</div>
      </div>
    </div>
  );
};

export default Wrapper;
