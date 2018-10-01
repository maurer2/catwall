import React, { Component } from 'react';
import './CardComponent.css';

class CardComponent extends Component {
  render() {
    return (
      <article className="article">
        <header>
          <h3>
            Title
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
