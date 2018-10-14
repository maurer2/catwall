import React, { Component } from 'react';

import placeholder from './placeholder.jpeg';
import spinner from './spinner.svg';

import styles from './CardComponent.css';


class CardComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showSpinner: true,
    };
  }

  componentDidMount() {
    // this.setState({ showSpinner: false, });
  }

  handleImageLoaded() {
    this.setState({ showSpinner: false });
  }

  render() {
    const { title, image, index } = this.props;
    const { showSpinner } = this.state;

    return (
      <article className={ styles.article }>
        { showSpinner === true ?
            <div className={ styles.overlay }>
              <img src={ spinner } className={ styles.spinner } alt="spinner" />
            </div>
            : ''
        }
        <header>
          { image !== '' ?
              <img src={ image } className={ styles.image } alt="" onLoad={this.handleImageLoaded.bind(this)} />
              :
              <img src={ placeholder } className={ styles.article } alt="" onLoad={this.handleImageLoaded.bind(this)} />
          }
          <h3 className={ styles.title }>
              { index }: { title }
          </h3>
        </header>
      </article>
    )
  }
}

export default CardComponent;
