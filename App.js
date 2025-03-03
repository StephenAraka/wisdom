import React, { useEffect } from 'react';
import store from './src/context/store';
import { Provider } from 'react-redux';
import Navigation from './src/navigation';
import * as Notifications from 'expo-notifications';
import { requestNotificationPermission, scheduleDailyNotifications } from './src/utils/notifications';

export default function App() {

  useEffect(() => {
    requestNotificationPermission();
    scheduleDailyNotifications();

    const subscription = Notifications.addNotificationReceivedListener(notification => {
      console.log('Notification received:', notification);
    });
  
    return () => subscription.remove(); // Cleanup listener
  }, []);

  return (
    
    <Provider store={store}>
      <Navigation/>
    </Provider>
    
  );
}
