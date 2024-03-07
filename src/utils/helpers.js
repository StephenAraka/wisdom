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

//Getting the number of day in the year
 export const numberOfDayOfYear = ()=> {
  const today = new Date();
  const startOfYear = new Date(today.getFullYear(), 0, 0);
  const diff = today - startOfYear;
  const oneDay = 1000 * 60 * 60 * 24;
  const dayOfYear = Math.floor(diff / oneDay);
  return dateIndex = dayOfYear - 1;
}

/* FAVOURITE QUOTES FUNCTIONS START */
export const addQuoteToFavorites = async (quote) => {
  let existingFavorites = await AsyncStorage.getItem('favoriteQuotes') || [];
  
  if (existingFavorites.length) {
    existingFavorites = JSON.parse(existingFavorites);

    // Check if incoming quote is already among favorites
    const isDuplicate = existingFavorites.some(obj => {
      return Object.keys(obj).every(key => quote[key] === obj[key]);
    });

    if (isDuplicate) return { success: false, isDuplicate: true }
  }

  existingFavorites.push(quote)

  try {
    await AsyncStorage.setItem('favoriteQuotes', JSON.stringify(existingFavorites));
    console.log('Data stored successfully!');
    return { success: true };
  } catch (error) {
    console.error('Error storing data:', error);
    return { success: false };
  }
}

export const getFavoriteQuotes = async () => {
  try {
    let list = await AsyncStorage.getItem('favoriteQuotes') || [];
    if (list.length) list = JSON.parse(list);

    if (list.length) {
      console.log('Retrieved data:', list);
      return list;
    } else {
      console.log('No favorite quotes found');
      return null;
    }
  } catch (error) {
    console.error('Error retrieving data:', error);
    return null;
  }
};

/* FAVOURITE QUOTES FUNCTIONS END */