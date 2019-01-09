import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Wrapper from './components/Wrapper/Wrapper';
import Characters from './characters.json';
import PhotoCard from './components/PhotoCard/PhotoCard';

class App extends Component {
  state = {
    score: 0,
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
    if (id === this.state.lastClicked) {
      this.setState({
        score: 0,
        lastClicked: id,
        characters: this.shuffle(Characters)
      });
      console.log(this.state);
    } else {
      this.setState({
        score: this.state.score + 1,
        lastClicked: id,
        characters: this.shuffle(Characters)
      });
      console.log(this.state);
    }
  };

  render() {
    return (
      <div className='App'>
        <Navbar />
        <Wrapper>
          {this.state.characters.map(character => (
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
