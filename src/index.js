import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Dashboard from './Dashboard';
import { Provider } from 'react-redux';
import store from './store'

// const cat = {
//   imageURL:'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg',
//   imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
//   name: 'Fluffy',
//   sex: 'Female',
//   age: 2,
//   breed: 'Bengal',
//   story: 'Thrown on the street'
// }
//
// const dog = {
//   imageURL: 'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
//   imageDescription: 'A smiling golden-brown golden retreiver listening to music.',
//   name: 'Zeus',
//   sex: 'Male',
//   age: 3,
//   breed: 'Golden Retriever',
//   story: 'Owner Passed away'
// }

ReactDOM.render(
  <Provider store={store}>
    {/* <Dashboard dogToAdopt={dog} catToAdopt={cat}/> */}
    <Dashboard />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
