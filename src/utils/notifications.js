import * as Notifications from 'expo-notifications';
import store from '../context/store';
import jsonData from "../../data.json";
import { shortenMessage } from './helpers';

const quotes = jsonData.quotes;
const state = store.getState();
const todaysDateIndex = state.date.dateIndex;
const todaysQuote = quotes[todaysDateIndex];
const firstSubquoteOfTheDay = todaysQuote.slice(1)[0];
const shortenedMessage = shortenMessage(firstSubquoteOfTheDay.message);

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

  // First, cancel all previously scheduled notifications
  await Notifications.cancelAllScheduledNotificationsAsync();

  // Schedule 8 AM notification
  await Notifications.scheduleNotificationAsync({
    content: {
      title: shortenedMessage || 'Good Morning!',
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
      title: shortenedMessage || 'Good Evening!',
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
