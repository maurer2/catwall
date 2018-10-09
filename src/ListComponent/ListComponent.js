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

    // this.setState({ isFetching: true });
    request
      .then((response) => {
        console.log(response.data.data);
        const fetchedEntries = (Array.isArray(response.data.data)) ? response.data.data : [response.data.data];
        const mappedAndFilteredEntries = fetchedEntries.reduce((total, entry) => {
          const isAlbum = entry.is_album;

          if (!isAlbum) {
            const mappedEntry = {
              id: entry.id,
              title: entry.title,
              link: entry.link,
            }
            total.push(mappedEntry) // technically this should be a concat
          } else {

            const mappedEntries = entry.images.map((mappedEntry, index) => {
              return {
                id: mappedEntry.id,
                title: `${entry.title} ${index + 1}`,
                link: mappedEntry.link,
              }


            })
            total = total.concat(mappedEntries);
          }

          return total;
        }, []);

        console.log(mappedAndFilteredEntries);

        // filter out albums
        // const fetchedSingleEntries = fetchedEntries.filter((entry) => entry['images_count'] === 1);

        this.setState(oldState => ({
          //entries: oldState.entries.concat(fetchedEntries),
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

    const cards = entries.map((entry, index) =>
      <li className="list-entry list-entry--one-third" key={ entry.id }>
        <CardComponent title={ entry.title } image={ entry.link } index={ index + 1 }></CardComponent>
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
