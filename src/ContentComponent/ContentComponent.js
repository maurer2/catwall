import React, { Component } from 'react';
import ListComponent from '../ListComponent/ListComponent'
import './ContentComponent.css';

class ContentComponent extends Component {
  render() {
    return (
      <main className="content">
        <ListComponent></ListComponent>
      </main>
    )
  }
}

export default ContentComponent;
