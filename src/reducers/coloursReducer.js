import { UPDATE_COLOURS } from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case UPDATE_COLOURS:
      return action.payload;
    default:
      return state;
  }
}