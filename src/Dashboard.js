import React from 'react';
import Pet from './components/Pet'
import {fetchDog, adoptDog} from './actions/dog';
import {adoptCat, fetchCat} from './actions/cat';
import {connect} from 'react-redux';
import './dashboard.css'
// import {bindActionCreators} from 'redux';

export class Dashboard extends React.Component {
  constructor(props){
    super(props);
    this.props.dispatch(fetchCat());
    this.props.dispatch(fetchDog());
  }

  // componentDidMount() {
  //   this.props.dispatch(fetchCat());
  //   this.props.dispatch(fetchDog());
  // }

  onAdoptPet = (data) => {
    if (data === 'cat') {

      this.props.dispatch(adoptCat())
    } else if (data === 'dog') {
      this.props.dispatch(adoptDog())
    }
  }

  onAdoptClick() {
    console.log('Time for a new home!');
  }

  render() {

    return (<div>
      <header role='banner' className='title'>
        <h1>Petful</h1>
      </header>
      <main>

        <Pet animal={this.props.cat}
          adoptPet={adoptCat}
          is={'cat'}
        />

        <Pet animal={this.props.dog}
          adoptPet={adoptDog}
          is={'dog'}
        />

      </main>
    </div>);

  }
}

const mapStateToProps = state => ({
  cat: state.cat.data.animal,
  dog: state.dog.data.animal
})

export default connect(mapStateToProps)(Dashboard);
