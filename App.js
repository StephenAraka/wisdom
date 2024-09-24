import React, {useEffect} from 'react';
import { Button } from 'react-native';
import store from './src/context/store';
import { Provider } from 'react-redux';
import Navigation from './src/navigation';
import * as Notifications from 'expo-notifications';

export default function App() {

  useEffect(() => {
    async function getPermission() {
      const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      if (status !== 'granted') {
        alert('You need to enable notifications!');
      }
    }
    getPermission();
  }, []);

  const triggerNotification = async () => {
    console.log('====================================');
    console.log('clicked');
    console.log('====================================');
    await Notifications.scheduleNotificationAsync({
      content: {
        title: 'Test Notification',
        body: 'This is a local notification!',
      },
      trigger: { seconds: 2}
});
  };

  return (
    
    <Provider store={store}>
      <Button title="Trigger Notification" onPress={triggerNotification} />
      <Navigation/>
    </Provider>
    
  );
}
