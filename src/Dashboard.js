import React from 'react';
import Pet from './components/Pet'
import {fetchDog, adoptDog} from './actions/dog';
import {adoptCat, fetchCat} from './actions/cat'

export class Dashboard extends React.Component {

  componentDidMount() {
    // this.props.dispatch(fetchCat()), this.props.disptch(fetchDog())
  }

  onAdoptPet = (data) => {
    if (data == 'cat') {

      this.props.dispatch(adoptCat)
    } else if (data == 'dog') {
      this.props.dispatch(adoptDog())
    }
  }

  onAdoptClick() {
    console.log('Time for a new home!');
  }

  render() {

    return (
      <div>
        <header role='banner'>
          <h1>Petful</h1>
        </header>
      <main>

        <Pet animal={this.props.catToAdopt} adoptPet={() => this.props.dispatch(adoptCat())}/>

        <Pet animal={this.props.dogToAdopt} adoptPet={() => this.props.dispatch(adoptDog())}/>

      </main>
    </div>);

  }
}
