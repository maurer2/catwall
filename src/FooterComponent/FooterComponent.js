import React, { Component } from 'react';

import styles from './FooterComponent.css';

// eslint-disable-next-line react/prefer-stateless-function
class FooterComponent extends Component {
  render() {
    return (
      <header className={ styles.footer }>
        Footer
      </header>
    )
  }
}

export default FooterComponent;
