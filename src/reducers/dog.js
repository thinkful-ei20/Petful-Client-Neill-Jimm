const initialState = {
  data: null,
  error: null,
  loading: false
};

export default function dogReducer(state = initialState, action) {
  switch (action.type) {

    case 'FETCH_DOG_REQUEST':
      return Object.assign({}, state, {
        error: null,
        loading: true
      })

    case 'FETCH_DOG_SUCCESS':
      return Object.assign({}, state, {
        data: action.payload,
        loading: false
      })

    case 'FETCH_DOG_ERROR':
      return Object.assign({}, state, {
        loading: false,
        error: action.payload
      })


    case 'ADOPT_DOG_REQUEST':
      return Object.assign({}, state, {
        error: null,
        loading: true
      })

    case 'ADOPT_DOG_SUCCESS':
      return Object.assign({}, state, {
        data: action.payload,
        error: null,
        loading: false

      })

    case 'ADOPT_DOG_ERROR':
      return Object.assign({}, state, {
        error: action.payload,
        loading: false
      })

    default:
      return state;

  }
}
