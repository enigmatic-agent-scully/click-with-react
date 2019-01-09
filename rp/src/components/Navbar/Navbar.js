import React from 'react';

const Navbar = props => {
  return (
    <ul className='nav nav-tabs'>
      <li className='nav-item'>
        <a href='#home' className='nav-link'>
          Home
        </a>
      </li>
      <li className='nav-item'>
        <a href='#about' className='nav-link'>
          About
        </a>
      </li>
    </ul>
  );
};

export default Navbar;
