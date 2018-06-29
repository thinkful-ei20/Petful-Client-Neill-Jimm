import API_BASE_URL from '../config';

export const fetchCat = () => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json'
    }
  };
  return function(dispatch) {
    dispatch(fetchCatRequest());
    return fetch(`${API_BASE_URL}/cat`, options)
      .then(res => {
        if (res.ok) {
          return res.json();

        } else {
          throw new Error('There was an error')
        }
      })
      .then(res => dispatch(fetchCatSuccess(res)))
      .catch(err => dispatch(fetchCatError(err)))
  };
}

export const adoptCat = () => dispatch => {
  dispatch(adoptCatRequest());
  return fetch(`${API_BASE_URL}/cat`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(res => {
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      return res.json();
    })
    .then(data => dispatch(
      adoptCatSuccess({animal: data.nextAnimal, message: data.message})
    ))
    .catch(err => dispatch(adoptCatError(err)));
};

function fetchCatRequest() {
  return {
    type: 'FETCH_CAT_REQUEST'
  }
}

function fetchCatSuccess(data) {
  return {
    type: 'FETCH_CAT_SUCCESS',
    payload: data
  }
}

function fetchCatError(err) {
  return {
    type: 'FETCH_CAT_ERROR',
    payload: err
  }
}

function adoptCatRequest() {
  return {
    type: 'ADOPT_CAT_REQUEST'
  }
}

function adoptCatSuccess(data) {
  return {
    type: 'ADOPT_CAT_SUCCESS',
    payload: data
  }
}

function adoptCatError(err) {
  return {
    type: 'ADOPT_CAT_ERROR',
    payload: err
  }
}
