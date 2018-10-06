import React, { Component } from 'react';
import CardComponent from '../CardComponent/CardComponent';
import './ListComponent.css';

class ListComponent extends Component {
  render() {
    const items = ['Test 1', 'Test 2', 'Test 3', 'Test 4', 'Test 5', 'Test 6'];
    // const numItemsPerLine = 3;

    const entries = items.map((entry, index) => {
      // const isLastInLine = !(index % numItemsPerLine);
      // const breakElement = <li className="list-breaker"></li>;
      const element = (
        <li className="list-entry list-entry--one-third" key={ entry.toLowerCase().replace(/ /g, '') }>
          <CardComponent title={ entry } id={ index }></CardComponent>
        </li>
      );

      // return (isLastInLine) ? [breakElement, element] : element;
      return element;
    });

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
