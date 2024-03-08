import { combineReducers } from 'redux';
import themeReducer from './themeReducer';
import quotesReducer from './quotesReducer';
import dateReducer from './dateReducer';

const mainReducer = combineReducers({
  quote: quotesReducer,
  theme: themeReducer,
  date: dateReducer
});

export default mainReducer;
