import { applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';

import reducer from './reducers/index'

// ~ const reducer = require("./reducers/index").default

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
);

export default store;
