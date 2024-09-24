import * as Notifications from 'expo-notifications';
import React, { useEffect } from 'react';
import { Button, View } from 'react-native';

export default function App() {
  useEffect(() => {
    async function scheduleDailyNotification() {
      await Notifications.scheduleNotificationAsync({
        content: {
          title: 'Daily Reminder',
          body: 'This is your notification for today!',
        },
        trigger: {
          hour: 8,
          minute: 0,
          repeats: true,
},
      });
    }

    scheduleDailyNotification();
  }, []);

  return (
    <View>
      <Button title="Trigger Daily Notification" onPress={() => {}} />
    </View>
  );
}