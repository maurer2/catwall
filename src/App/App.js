import React, { Component } from 'react';
import './App.css';
import HeaderComponent from '../HeaderComponent/HeaderComponent';
import ContentComponent from '../ContentComponent/ContentComponent';
import FooterComponent from '../FooterComponent/FooterComponent';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <div className="app">
        <HeaderComponent />
        <ContentComponent />
        <FooterComponent />
      </div>
    );
  }
}

export default App;
