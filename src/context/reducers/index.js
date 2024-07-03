import { combineReducers } from 'redux';
import themeReducer from './themeReducer';
import quotesReducer from './quotesReducer';
import dateReducer from './dateReducer';

const mainReducer = combineReducers({
  theme: themeReducer,
  date: dateReducer,
  quote: quotesReducer,
});

export default mainReducer;
