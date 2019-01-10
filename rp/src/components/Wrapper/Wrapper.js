import React from 'react';
import './wrapper.css';

const Wrapper = props => {
  return <div className='wrapper container'>{props.children}</div>;
};

export default Wrapper;
