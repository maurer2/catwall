import React, { Component } from 'react';
import HeaderComponent from '../HeaderComponent/HeaderComponent';
import ContentComponent from '../ContentComponent/ContentComponent';
import FooterComponent from '../FooterComponent/FooterComponent';

import styles from './App.css';


// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <div className={ styles.app }>
        <HeaderComponent />
        <ContentComponent />
        <FooterComponent />
      </div>
    );
  }
}

export default App;
