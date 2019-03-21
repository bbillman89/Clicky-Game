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
    if(this.state.clickedChar.indexOf(id) === -1){
      const clicked = this.state.images.filter(image => image.id === id);
      const clickedID = id;
      this.state.clickedChar.push(clickedID);
      this.setState({clicked});
      this.shuffle(this.state.images);
      if(this.state.hiscore < this.state.clickedChar.length){
        this.setState({hiscore: this.state.hiscore + 1})
      }
    } else {
      alert('dang... you were on a roll')
      this.setState({clickedChar: []})
    }
  }

  shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;
  
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
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