import React from 'react';
import store from './src/context/store';
import { Provider } from 'react-redux';
import Navigation from './src/navigation';
import { usePushNotifications } from './src/utils/usePushNotifications';

export default function App() {

  const { expoPushToken, notification } = usePushNotifications();

  const data = JSON.stringify(notification, undefined, 2);

  // TODO: Remove logs
  console.log('====================================');
  console.log('data: => ', data);
  console.log('expoPushToken: => ', expoPushToken);
  console.log('====================================');

  return (
    
    <Provider store={store}>
      <Navigation/>
    </Provider>
    
  );
}
