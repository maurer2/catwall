import React, { Component } from 'react';
import ListComponent from '../ListComponent/ListComponent'
import './ContentComponent.css';

// eslint-disable-next-line react/prefer-stateless-function
class ContentComponent extends Component {
  render() {
    return (
      <main className="content">
        <ListComponent />
      </main>
    )
  }
}

export default ContentComponent;
