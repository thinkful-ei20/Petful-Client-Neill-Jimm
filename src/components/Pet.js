import React from 'react';
import '../index.css';

class Pet extends React.Component {
  render() {
    return (
      <section>
        <header>
          <img

            // changed all props.animal. .. to props..
            src={this.props.animal.imageURL}
            alt={this.props.animal.imageDescription}
          />
          <h3>{this.props.animal.name}</h3>
        </header>
        <dl>
          <dt>Sex:</dt>
          <dd>{this.props.animal.sex}</dd>
          <dt>Age:</dt>
          <dd>{this.props.animal.age}</dd>
          <dt>Breed:</dt>
          <dd>{this.props.animal.breed}</dd>
          <dt>Story:</dt>
          <dd>{this.props.animal.story}</dd>
        </dl>
        <button onClick={() => this.props.adoptPet(this.props.adopt)}>
          Adopt
        </button>
      </section>
    )
  }
}

export default Pet;
