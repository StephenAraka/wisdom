import AsyncStorage from '@react-native-async-storage/async-storage';

// Storing data to async storage
export const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
    console.log('Data stored successfully!');
  } catch (error) {
    console.error('Error storing data:', error);
  }
};

// Retrieving data from async storage
export const retrieveData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      console.log('Retrieved data:', value);
      return value;
    } else {
      console.log('No data found for key:', key);
      return null;
    }
  } catch (error) {
    console.error('Error retrieving data:', error);
    return null;
  }
};

export const getMessageFontSize = (message) => {
  const numberOfCharacters = message.length;
  let messageSize;

  if (numberOfCharacters < 100) messageSize = 'small';
  if (numberOfCharacters > 100 && numberOfCharacters < 300) messageSize = 'medium';
  if (numberOfCharacters > 300) messageSize = 'big';
  
  switch (messageSize) {
    case 'small':
      return 28;

    case 'medium':
      return 24;
  
    default:
      return 20;
  }
}