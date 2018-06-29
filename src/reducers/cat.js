const initialState = {
  data: null,
  error: null,
  loading: false
};

export default function catReducer(state = initialState, action) {
  switch (action.type) {

    case 'FETCH_CAT_REQUEST':
      return Object.assign({}, state, {
        error: null,
        loading: true
      })

    case 'FETCH_CAT_SUCCESS':
      return Object.assign({}, state, {
        pets: action.payload,
        loading: false
      })

    case 'FETCH_CAT_ERROR':
      return Object.assign({}, state, {
        loading: false,
        error: action.payload
      })


    case 'ADOPT_CAT_REQUEST':
      return Object.assign({}, state, {
        error: null,
        loading: true
      })

    case 'ADOPT_CAT_SUCCESS':
      return Object.assign({}, state, {
        pets: action.payload,
        error: null,
        loading: false

      })

    case 'ADOPT_CAT_ERROR':
      return Object.assign({}, state, {
        error: action.payload,
        loading: false
      })

    default:
      return state;

  }
}
