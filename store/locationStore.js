import { createStore } from 'redux';

const defaultState = {
  latitude: null,
  longitude: null,
}

function locationStore(state = defaultState, action) {
  switch (action.type) {
    case 'GET_LOCATION':
      return Object.assign({}, state, {
        latitude: action.latitude,
        longitude: action.longitude,
      });
    default:
      return state;
  }
}

export default createStore(locationStore);
