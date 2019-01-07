import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Wrapper from './components/Wrapper/Wrapper';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Wrapper>
          <Navbar />
        </Wrapper>
      </div>
    );
  }
}

export default App;
