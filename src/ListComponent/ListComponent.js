import React, { Component } from 'react';
import axios from 'axios';
import CardComponent from '../CardComponent/CardComponent';

import './ListComponent.css';

class ListComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      entries: [],
      isFetching: false,
      startingPoint: 0,
      limit: 3,
    };

    this.moreButtonClicked = this.moreButtonClicked.bind(this);
  }

  componentDidMount() {
    // populate with dummy data
    this.fetchData();
  }

  fetchData() {
    const { startingPoint, limit } = this.state;

    this.setState({ isFetching: true });
    axios.get(`http://jsonplaceholder.typicode.com/photos?_start=${startingPoint}&_limit=${limit}`)
      .then((response) => {
        const fetchedEntries = (Array.isArray(response.data)) ? response.data : [response.data];

        this.setState(oldState => ({
          entries: oldState.entries.concat(fetchedEntries),
          isFetching: false,
        }));
      })
  }

  moreButtonClicked() {
    this.setState((oldState) => ({
      startingPoint: oldState.startingPoint + oldState.limit,
    }),() => {
        this.fetchData();
    });
  }

  render() {
    const { entries, isFetching, limit } = this.state;

    const cards = entries.map((entry) =>
      <li className="list-entry list-entry--one-third" key={ entry.id }>
        <CardComponent title={ entry.title } image={ entry.url }></CardComponent>
      </li>
    );

    return (
      <section className="list-section">
        <ul className="list">
          { cards }
        </ul>
        { entries.length > 0 &&
          <button className="button button--more" onClick={ this.moreButtonClicked } disabled={ isFetching }>
            Load { limit } more entries
          </button>
        }
      </section>
    )
  }
}

export default ListComponent;
