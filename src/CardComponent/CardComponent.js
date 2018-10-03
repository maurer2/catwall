import React, { Component } from 'react';
import './CardComponent.css';

class CardComponent extends Component {
  render() {
    const { title } = this.props;
    return (
      <article className="article">
        <header>
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
