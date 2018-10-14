import React, { Component } from 'react';

import styles from './HeaderComponent.css';

// eslint-disable-next-line react/prefer-stateless-function
class HeaderComponent extends Component {
  render() {
    return <header className={ styles.header }>Header</header>;
  }
}

export default HeaderComponent;
