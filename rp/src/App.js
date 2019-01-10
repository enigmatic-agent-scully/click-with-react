import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Wrapper from './components/Wrapper/Wrapper';
import Characters from './characters.json';
import PhotoCard from './components/PhotoCard/PhotoCard';

class App extends Component {
  state = {
    score: 0,
    wins: 0,
    losses: 0,
    clicked: [],
    characters: Characters
  };

  shuffle = array => {
    var currentIndex = array.length;
    var temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };

  handleClick = id => {
    if (this.state.clicked.includes(id)) {
      this.setState({
        score: 0,
        losses: this.state.losses + 1,
        characters: this.shuffle(Characters)
      });
    } else {
      if (this.state.clicked.length === 9) {
        this.setState({
          score: 0,
          wins: this.state.wins + 1,
          characters: this.shuffle(Characters)
        });
      } else {
        this.state.clicked.push(id);
        this.setState({
          score: this.state.score + 1,
          lastClicked: id,
          characters: this.shuffle(Characters)
        });
      }
    }
  };

  render() {
    return (
      <div className='App'>
        <Navbar
          score={this.state.score}
          wins={this.state.wins}
          losses={this.state.losses}
        />
        <Wrapper>
          {this.state.characters.map((character, i) => (
            <PhotoCard
              handleClick={this.handleClick}
              id={character.id}
              name={character.name}
              image={character.image}
            />
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;
