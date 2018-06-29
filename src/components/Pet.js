import React from 'react';
import {connect} from 'react-redux';
import '../index.css';
import {adoptDog} from '../actions/dog';
import {adoptCat} from '../actions/cat';

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
        <button onClick={() => {
          console.log('click');
          if(this.props.is === 'dog'){
            console.log('dog pressed');
            this.props.dispatch(adoptDog());
          }
          if(this.props.is === 'cat'){
            this.props.dispatch(adoptCat());
          }
        }}>
          Adopt
        </button>
      </section>
    )
  }
}

export default connect()(Pet);
