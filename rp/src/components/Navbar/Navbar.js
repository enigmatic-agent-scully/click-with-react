import React from 'react';
import './../Navbar/Navbar.css';

const Navbar = props => {
  return (
    <ul className='nav nav-tabs'>
      <li className='nav-item'>
        <a href='#home' className='nav-link'>
          Home
        </a>
      </li>
      <li className='nav-item'>Score: {props.score}</li>
      <li className='nav-item'>
        Wins: {props.wins} || Losses: {props.losses}
      </li>
    </ul>
  );
};

export default Navbar;
