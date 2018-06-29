import { combineReducers } from 'redux';
import cat from './cat'
import dog from './dog'

export default combineReducers({ cat, dog });


// function combined_reducer(state={}, action)

// return {
//   cat: catreducer(state.cat, action),
//   dog: dogreducer(state.dog, action)
// }
