import React, { Component } from 'react';
import axios from 'axios';

import './CardComponent.css';

import placeholder from './placeholder.jpeg';
import spinner from './spinner.svg';

class CardComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imageURL: '',
      showSpinner: true,
    };
  }

  componentDidMount() {
    this.getImageViaAjax()
  }

  getImageViaAjax() {
    const { id } = this.props;

    axios.get('https://jsonplaceholder.typicode.com/photos/')
      .then(response => {
        const image = response.data.find((entry) => entry.id === id);

        if (image === undefined) {
           this.setState({ showSpinner: false, });
           return
        }

        const { url } = image;

        this.setState({
          imageURL: url,
          showSpinner: false,
        });
    })
  }

  render() {
    const { title } = this.props;
    const { imageURL, showSpinner } = this.state;

    return (
      <article className="article">
        { showSpinner === true ?
            <div className="overlay">
              <img src={ spinner } className="spinner" alt="spinner" />
            </div>
            : ''
        }
        <header>
          { imageURL !== '' ?
              <img src={ imageURL } className="image" alt="" />
              :
              <img src={ placeholder } className="image image--placeholder" alt="" />
          }
          <h3 className="title">
            { title }
          </h3>
        </header>
        <section className="text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
          ex ea commodo consequat.
        </section>
      </article>
    )
  }
}

export default CardComponent;
