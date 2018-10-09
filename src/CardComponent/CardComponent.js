import React, { Component } from 'react';

import './CardComponent.css';

import placeholder from './placeholder.jpeg';
import spinner from './spinner.svg';

class CardComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showSpinner: true,
    };
  }

  componentDidMount() {
    this.setState({ showSpinner: false, });
  }

  handleImageLoaded() {
    this.setState({ showSpinner: false });
  }

  render() {
    const { title, image, index } = this.props;
    const { showSpinner } = this.state;

    return (
      <article className="article">
        { showSpinner === true ?
            <div className="overlay">
              <img src={ spinner } className="spinner" alt="spinner" />
            </div>
            : ''
        }
        <header>
          { image !== '' ?
              <img src={ image } className="image" alt="" onLoad={this.handleImageLoaded.bind(this)} />
              :
              <img src={ placeholder } className="image image--placeholder" alt="" onLoad={this.handleImageLoaded.bind(this)} />
          }
          <h3 className="title">
              { index }: { title }
          </h3>
        </header>
      </article>
    )
  }
}

export default CardComponent;
