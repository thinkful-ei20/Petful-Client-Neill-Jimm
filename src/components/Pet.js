import React from 'react';
import '../index.css';

class Pet extends React.Component {
  render() {
    return (
      <section>
        <header>
          <img

            // changed all props.animal. .. to props..
            src={this.props.imageURL}
            alt={this.props.imageDescription}
          />
          <h3>{this.props.name}</h3>
        </header>
        <dl>
          <dt>Sex:</dt>
          <dd>{this.props.sex}</dd>
          <dt>Age:</dt>
          <dd>{this.props.age}</dd>
          <dt>Breed:</dt>
          <dd>{this.props.breed}</dd>
          <dt>Story:</dt>
          <dd>{this.props.story}</dd>
        </dl>
        <button onClick={() => this.props.adoptPet(this.props.adopt)}>
          Adopt
        </button>
      </section>
    )
  }
}

export default Pet;
