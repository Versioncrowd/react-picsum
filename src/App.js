import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor() {
    super()
    this.state = {
      url: null,
      author: null,
      title: null,
      date: null

    }
  }


  render() {
    return (
      <div className="App">  
      <button onClick={this.getPicsumImage}>Get Random Picsum Image</button>
      <div className="picsumreturn">
        <h3>Author: {this.state.author}, Image title: {this.state.title}, Date shot: {this.state.date} </h3>
        <img src={this.state.url} alt="random image" />
      </div>

      </div>
    );
  }
}

export default App;
