import React from 'react';
import Pet from './components/Pet'
import {fetchDog, adoptDog} from './actions/dog';
import {adoptCat, fetchCat} from './actions/cat'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

export class Dashboard extends React.Component {

  componentDidMount() {
    //
    this.props.fetchCat;
    this.props.fetchDog;
  }

  onAdoptPet = (data) => {
    if (data === 'cat') {

      this.props.dispatch(adoptCat)
    } else if (data === 'dog') {
      this.props.dispatch(adoptDog())
    }
  }

  onAdoptClick() {
    console.log('Time for a new home!');
  }

  render() {

    return (<div>
      <header role='banner'>
        <h1>Petful</h1>
      </header>
      <main>

        <Pet animal={this.props.catToAdopt} adoptPet={() => this.props.adoptCat}/>

        <Pet animal={this.props.dogToAdopt} adoptPet={() => this.props.adoptDog}/>

      </main>
    </div>);

  }
}

const mapStateToProps = state => ({cats: state.cat, dogs: state.dog})

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    fetchCat,
    fetchDog,
    adoptCat,
    adoptDog
  }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
