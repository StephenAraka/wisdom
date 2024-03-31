import React from 'react';
import store from './src/context/store';
import { Provider } from 'react-redux';
import Navigation from './src/navigation';

export default function App() {

  return (
    
    <Provider store={store}>
      <Navigation/>
    </Provider>
    
  );
}
