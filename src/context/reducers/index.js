import { combineReducers } from 'redux';
import themeReducer from './themeReducer';

const mainReducer = combineReducers({
  theme: themeReducer
});

export default mainReducer;
