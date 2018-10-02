import React, { Component } from 'react';
import CardComponent from '../CardComponent/CardComponent';
import './ListComponent.css';

class ListComponent extends Component {
  render() {
    const items = ['Test 1', 'Test 2', 'Test 3', 'Test 4', 'Test 5'];

    const entries = items.map((entry) => (
      <li className="list-entry" key={ entry.replace(/ /g,'') }>
        <CardComponent></CardComponent>
      </li>
      )
    );

    return (
      <section className="list-section">
        <ul className="list">
          { entries }
        </ul>
      </section>
    )
  }
}

export default ListComponent;
