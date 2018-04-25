import { UPDATE_CLOUDINARY_URL } from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case UPDATE_CLOUDINARY_URL:
      return action.payload;
    default:
      return state;
  }
}