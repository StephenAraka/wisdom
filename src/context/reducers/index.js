import { combineReducers } from 'redux';
import themeReducer from './themeReducer';
import quotesReducer from './quotesReducer';

const mainReducer = combineReducers({
  quote: quotesReducer,
  theme: themeReducer,
});

export default mainReducer;
