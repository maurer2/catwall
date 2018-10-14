import React, { Component } from 'react';
import ListComponent from '../ListComponent/ListComponent'

import styles from './ContentComponent.css';

// eslint-disable-next-line react/prefer-stateless-function
class ContentComponent extends Component {
  render() {
    return (
      <main className={ styles.content }>
        <ListComponent />
      </main>
    )
  }
}

export default ContentComponent;
