import React, { useEffect } from 'react';
import store from './src/context/store';
import { Provider } from 'react-redux';
import * as Notifications from 'expo-notifications';
import Navigation from './src/navigation';
import { requestNotificationPermission, scheduleDailyNotifications } from './src/utils/notifications';

export default function App() {

  useEffect(() => {
    // Request notification permissions
    requestNotificationPermission().then((hasPermission) => {
      if (hasPermission) {
        // Schedule daily notifications
        scheduleDailyNotifications();
      }
    });

    // Add a listener for incoming notifications
    const subscription = Notifications.addNotificationReceivedListener((notification) => {
      console.log('Notification received:', notification);
    });

    // Cleanup the listener on unmount
    return () => subscription.remove();
  }, []);

  return (
    
    <Provider store={store}>
      <Navigation/>
    </Provider>
    
  );
}
