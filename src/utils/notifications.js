import * as Notifications from 'expo-notifications';

export async function requestNotificationPermission() {
  const { status } = await Notifications.requestPermissionsAsync();
  if (status !== 'granted') {
    alert('You need to enable notifications for this feature to work.');
  }
}

export async function scheduleDailyNotifications() {
  // Configure the notification handler
  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: true,
      shouldSetBadge: false,
    }),
  });

  // Schedule 8 AM notification
  await Notifications.scheduleNotificationAsync({
    content: {
      title: 'Good Morning!',
      body: 'It\'s 8 AM. Time to start your day with a dose of wisdom!',
      sound: 'default',
    },
    trigger: {
      hour: 8,
      minute: 0,
      repeats: true, // Repeat daily
    },
  });

  // Schedule 8 PM notification
  await Notifications.scheduleNotificationAsync({
    content: {
      title: 'Good Evening!',
      body: 'It\'s 8 PM. Time to wind down with a dose of wisdom!!',
      sound: 'default',
    },
    trigger: {
      hour: 20,
      minute: 0,
      repeats: true, // Repeat daily
    },
  });
}
