import { UPDATE_LOADING } from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case UPDATE_LOADING:
      return action.payload;
    default:
      return state;
  }
}