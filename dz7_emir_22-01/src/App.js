import React from 'react';

class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        './img/luffy.png',
        './img/Zoro.jpg',
        './img/Sanji.jpg',
        './img/Nami.jpg',
        './img/Usopp.jpg', 
        './img/Robin.jpg',
        './img/Chopper.jpg',
        './img/Franky.jpg',
        './img/Brook.jpg',
        './img/Djimbei.jpg',
        './img/Straw_Hat_Team.jpg',
      ],
      currentIndex: 0
    };
  }

  goToNextSlide = () => {
    this.setState(prevState => ({
      currentIndex: (prevState.currentIndex + 1) % this.state.images.length
    }));
  }

  goToPreviousSlide = () => {
    this.setState(prevState => ({
      currentIndex: (prevState.currentIndex - 1 + this.state.images.length) % this.state.images.length
    }));
  }

  render() {
    const { images, currentIndex } = this.state;

    return (
      <div>
        <button onClick={this.goToPreviousSlide}>Previous</button>
        <img src={images[currentIndex]} alt="Slide" />
        <button onClick={this.goToNextSlide}>Next</button>
      </div>
    );
  }
}

export default Slider;