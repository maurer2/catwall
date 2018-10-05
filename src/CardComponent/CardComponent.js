import React, { Component } from 'react';
import axios from 'axios';
import './CardComponent.css';

class CardComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imageURL: '',
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
           return
        }

        const { url } = image;

        this.setState({ imageURL: url });
    })
  }

  render() {
    const { title } = this.props;
    const { imageURL } = this.state;

    return (
      <article className="article">
        <header>
          { imageURL !== '' ?
              <img src={ imageURL } className="image" alt=" " />
              :
              <span className="placeholder"> </span>
          }
          <h3>
            { title }
          </h3>
        </header>
        <section>
          Content
        </section>
        <footer>
          Footer
        </footer>
      </article>
    )
  }
}

export default CardComponent;
