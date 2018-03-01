import React, { Component } from 'react';
import './App.css';
import Image from './Image';

class App extends Component {

  constructor() {
    super()
    this.state = {
      imgurl: null,
      author: null,
      title: null,
      date: null

    }
  }


handleSubmit = (event) => {
  event.preventDefault();
  const url = 'https://picsum.photos/list';

  const fetchAsync = async () => {
    try {
      const result = await fetch(url);
      const data = await result.json();
      const random = Math.floor((Math.random()*Object.keys(data).length));
      
    this.setState(
      {
        author: data[random].author,
        author_url: data[random].author_url,
        imgurl: 'https://picsum.photos/300/200?image=' + data[random].id,
        }
      )
    } catch (error) {
      console.log('Nope: ' + error)
    }
  };
  fetchAsync();
}


  render() {
    return (
      <div className="App">  
      <button onClick={this.handleSubmit}>Get Random Picsum Image</button>
      <div className="picsumreturn">
        <Image imgurl={this.state.imgurl} author={this.state.author} author_url={this.state.author_url} alt="random image" />
      </div>

      </div>
    );
  }
}

export default App;
