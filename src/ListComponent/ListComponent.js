import React, { Component } from 'react';
import axios from 'axios';
import CardComponent from '../CardComponent/CardComponent';

import './ListComponent.css';

class ListComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      entries: [],
    };
  }

  componentDidMount() {
    // populate with dummy data
    axios.get('http://jsonplaceholder.typicode.com/photos?_start=1&_limit=10')
      .then(response => {
        this.setState({
          entries: (Array.isArray(response.data)) ? response.data : [response.data],
        });
    })
  }

  render() {
    const { entries } = this.state;

    const cards = entries.map((entry) =>
      <li className="list-entry list-entry--one-third">
        <CardComponent title={ entry.title } id={ entry.id }></CardComponent>
      </li>
    );

    return (
      <section className="list-section">
        <ul className="list">
          { cards }
        </ul>
      </section>
    )
  }
}

export default ListComponent;
