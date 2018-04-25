import { combineReducers } from 'redux';
import cloudinaryUrlReducer from './cloudinaryUrlReducer';
import coloursReducer from './coloursReducer';

export default combineReducers({
  cloudinaryUrl: cloudinaryUrlReducer,
  colours: coloursReducer
});