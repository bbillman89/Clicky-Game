import React, { Component } from 'react';
import './App.css';
//import React from 'react';
import NavBar from './components/navbar';
import TitleSection from './components/titleSection';
import FlexWrapper from './components/FlexWrapper/flexWrapper';
import ImageCard from './components/ImageCard/imageCard';
import images from './images.json'

class App extends Component {
  
  state = {
    images,
    clickedChar: [],
    score: 0,
    hiscore: 0
  }

  clickImage = id => {
    const clicked = this.state.images.filter(image => image.id === id);
    const clickedID = id;
    this.state.clickedChar.push(clickedID);
    this.setState({clicked});

    for(let j = 0; j < this.state.clickedChar.length; j++){
      for(let k = 0; k < this.state.clickedChar.length; k++){
        if (this.state.clickedChar.length > 1 && this.state.clickedChar[k] === this.state.clickedChar[j]){
          this.setState({clickedChar: []})
        }
      }
    }

    this.shuffle(this.state.images);
  }

  shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;
  
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
  }

  
  render() {
    return (
      <main>
      <NavBar 
        score={this.state.clickedChar.length}
        hiscore={this.state.hiscore}
      />
      <TitleSection />
        <FlexWrapper>
          {this.state.images.map(image => (
          <ImageCard
            clickImage={this.clickImage}
            id={image.id}
            key={image.id}
            name={image.name}
            image={image.image}
          />
          ))}
        </FlexWrapper>
      </main>
    )
  };
}

export default App;