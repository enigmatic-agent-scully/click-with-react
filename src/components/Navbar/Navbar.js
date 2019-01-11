import React from 'react';
import './../Navbar/Navbar.css';

const Navbar = props => {
  return (
    <ul className='nav nav-tabs nav-fill'>
      <li className='nav-item'>
        <span className='navbar-brand mb-0 h1'>Click to start!</span>
      </li>
      <li className='nav-item'>
        <span className='navbar-brand mb-0 h1'>Score: {props.score}</span>
      </li>
      <li className='nav-item'>
        <span className='navbar-brand mb-0 h1'>
          Wins: {props.wins} || Losses: {props.losses}
        </span>
      </li>
    </ul>
  );
};

export default Navbar;
