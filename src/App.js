import React, { Component } from 'react';
import './App.css';
import puppies from "./puppies.json";
import ImageCard from "./components/ImageCard";



class App extends Component {

  state = {
    puppies
  };

  removePuppy = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const puppies = this.state.puppies.filter(puppy => puppy.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ puppies });
  };

  render() {
    return (
      <div className="row">
        {this.state.puppies.map(puppy => (
          <ImageCard
            removePuppy={this.removePuppy}
            id={puppy.id}
            image={puppy.image}
          />
        ))}
      </div>
    );
  }
}

export default App;
