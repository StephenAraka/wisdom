import { combineReducers } from 'redux';
import themeReducer from './themeReducer';
import dateReducer from './dateReducer';
import quotesReducer from './quotesReducer';

const mainReducer = combineReducers({
  quote: quotesReducer,
  theme: themeReducer,
  date: dateReducer
}); 

export default mainReducer;
