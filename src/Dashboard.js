import React from 'react';
import Pet from './components/Pet'

export class Dashboard extends React.Component {

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
          {/* catToAdopt Section */}
          <Pet
            animal={this.props.catToAdopt}
            onAdoptClick={this.onAdoptClick} />

          {/* dogToAdopt Section */}
          <Pet
            animal={this.props.dogToAdopt}
            onAdoptClick={this.onAdoptClick} />
        </main>
      </div>
    );

  }
}
