import * as Notifications from "expo-notifications";

export async function scheduleDailyNotification() {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "Today's dose of wisdom",
      body: "Become wiser by taking a wisdom pill!",
    },
    trigger: {
      hour: 8,
      minute: 0,
      repeats: true,
    },
  });
}