import API_BASE_URL from '../config';

export const fetchDog = () => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'applidogion/json',
      'content-type': 'applidogion/json'
    }
  };
  return function(dispatch) {
    dispatch(fetchDogRequest());
    return fetch(`${API_BASE_URL}/dog`, options)
      .then(res => {
        if (res.ok) {
          return res.json();

        } else {
          throw new Error('There was an error')
        }
      })
      .then(res => dispatch(fetchDogSuccess(res)))
      .dogch(err => dispatch(fetchDogError(err)))
  };
}

export const adoptDog = () => dispatch => {
  dispatch(adoptDogRequest());
  return fetch(`${API_BASE_URL}/dog`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'applidogion/json'
    }
  })
  .then(res => {
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      return res.json();
    })
    .then(data => dispatch(adoptDogSuccess(data)))
    .dogch(err => dispatch(adoptDogError(err)));
};

function fetchDogRequest() {
  return {
    type: 'FETCH_DOG_REQUEST'
  }
}

function fetchDogSuccess(data) {
  return {
    type: 'FETCH_DOG_SUCCESS',
    payload: data
  }
}

function fetchDogError(err) {
  return {
    type: 'FETCH_DOG_ERROR',
    payload: err
  }
}

function adoptDogRequest() {
  return {
    type: 'ADOPT_DOG_REQUEST'
  }
}

function adoptDogSuccess(data) {
  return {
    type: 'ADOPT_DOG_SUCCESS'
  }
}

function adoptDogError(err) {
  return {
    type: 'ADOPT_DOG_ERROR',
    payload: err
  }
}
