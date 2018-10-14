import React, { Component } from 'react';
import axios from 'axios';
import CardComponent from '../CardComponent/CardComponent';

import styles from './ListComponent.css';

class ListComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      entries: [],
      isFetching: false,
      // startingPoint: 0,
      limit: 3,
    };

    this.moreButtonClicked = this.moreButtonClicked.bind(this);
  }

  componentDidMount() {
    // populate with dummy data
    this.fetchData();
  }

  fetchData() {
    const { REACT_APP_CLIENT_ID } = process.env;
    let url = 'https://api.imgur.com/3/gallery/search/top/all/0/?q_all=derpy+cats&q_type=jpg&q_size_px=small';
    let request;

    if (REACT_APP_CLIENT_ID === undefined) {
      url = 'imgur.json';
      request = axios.get(url);
    } else {
      url = 'imgur.json';
      request = axios.get(url,{ headers: { Authorization: `Client-ID ${REACT_APP_CLIENT_ID}`, 'Content-Type': 'application/json'}})
    }

    this.setState({ isFetching: true });
    request
      .then((response) => {
        const fetchedEntries = (Array.isArray(response.data.data)) ? response.data.data : [response.data.data];
        const mappedAndFilteredEntries = fetchedEntries.reduce((total, entry) => {
          let newTotal = total;

          if (!entry.is_album) {
            newTotal = newTotal.concat({
              id: entry.id,
              title: entry.title,
              link: entry.link,
            });
          } else {
            const mappedEntries = entry.images.map((mappedEntry, index) => ({
                id: mappedEntry.id,
                title: `${entry.title} ${index + 1}`,
                link: mappedEntry.link,
              })
            );

            newTotal = newTotal.concat(mappedEntries);
          }

          return newTotal;
        }, []);

        // this.setState(oldState => ({
        this.setState(({
          // entries: oldState.entries.concat(fetchedEntries),
          entries: mappedAndFilteredEntries,
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
    const isLarge = window.matchMedia("(min-width: 1280px)").matches;
    const gridClassName = isLarge ? styles.listEntryOneFourth : styles.listEntryOneThird;

    const cards = entries.map((entry, index) =>
      <li className={ [styles.listEntry, gridClassName].join(' ') } key={ entry.id }>
        <CardComponent title={ entry.title } image={ entry.link } index={ index + 1 }/>
      </li>
    );

    return (
      <section className={ styles.section }>
        <ul className={ styles.list }>
          { cards }
        </ul>
        { entries.length > 0 &&
          <button className={ [styles.button, styles.buttonMore].join(' ') } type="button" disabled={ isFetching }
                  onClick={ this.moreButtonClicked }>
            Load { limit } more entries
          </button>
        }
      </section>
    )
  }
}

export default ListComponent;
