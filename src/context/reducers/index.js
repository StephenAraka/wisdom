import { combineReducers } from 'redux';
import themeReducer from './themeReducer';
import dateReducer from './dateReducer';

const mainReducer = combineReducers({
  theme: themeReducer,
  date: dateReducer
});

export default mainReducer;
