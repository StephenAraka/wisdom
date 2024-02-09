import React from 'react';
import store from './src/context/store';
import { Provider } from 'react-redux';
import QuotesScreen from './src/screens/QuotesScreen';

export default function App() {

  return (
    <Provider store={store}>
      <QuotesScreen />
    </Provider>
  );
}
