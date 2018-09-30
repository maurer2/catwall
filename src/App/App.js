import React, { Component } from 'react';
import './App.css';
import HeaderComponent from '../HeaderComponent/HeaderComponent';
import ContentComponent from '../ContentComponent/ContentComponent';

class App extends Component {
  render() {
    return (
      <article className="App">
        <HeaderComponent />
        <ContentComponent />
      </article>
    );
  }
}

export default App;
