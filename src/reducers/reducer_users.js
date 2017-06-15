import _ from 'lodash';
import { FETCH_USERS } from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_USERS:
      //return [ action.payload.data, ...state ]; // it creates a new Array => [city, city, city]
      return _.mapKeys(action.payload.data, 'id');
  }
  return state;
}
