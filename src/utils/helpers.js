import { Share } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Storing data to async storage
export const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    console.error('Error storing data:', error);
  }
};

// Retrieving data from async storage
export const retrieveData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
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

  const dayOfYear = Math.floor( diff / oneDay);
  return dateIndex = dayOfYear -1;
}

// Function to get number of day of Year from a date 
 export const numberOfDay = (date)=> {
  const thisYear = new Date().getFullYear();
  const dateToCheck = new Date(`${date} ${thisYear}`);
  const startOfYear = new Date(new Date().getFullYear(), 0, 0);
  const diff = dateToCheck - startOfYear;
  const oneDay = 1000 * 60 * 60 * 24;
  const dayOfYear = Math.floor( diff / oneDay);
  return dateIndex = dayOfYear - 1;
}

function stripNulls(array) {
  return array.filter(item => item !== null);
}

/* FAVOURITE QUOTES FUNCTIONS START */
export const addQuoteToFavorites = async (quote) => {
  const favorites = await AsyncStorage.getItem('favoriteQuotes') || [];

  let existingFavorites = favorites.length ? stripNulls(JSON.parse(favorites)) : [];    // Strip possible null values from array

  if (existingFavorites.length) {
    // Check if incoming quote is already among favorites
    const isDuplicate = existingFavorites.some(obj => {
      return Object.keys(obj).every(key => quote[key] === obj[key]);
    });

    if (isDuplicate) return { success: false, isDuplicate: true }
  }

  existingFavorites.push(quote)

  try {
    await AsyncStorage.setItem('favoriteQuotes', JSON.stringify(existingFavorites));
    return { success: true };
  } catch (error) {
    console.error('Error storing data:', error);
    return { success: false };
  }
}

export const getFavoriteQuotes = async () => {
  try {
    const favQuotes = await AsyncStorage.getItem('favoriteQuotes') || [];
    let list = stripNulls(JSON.parse(favQuotes));    // Strip possible null values from array

    if (list.length) {
      return list;
    } else {
      console.log('No favorite quotes found');
      return null;
    }
  } catch (error) {
    console.error('Error retrieving data: ', error);
    return null;
  }
};

//Remove quote from async storage
export const removeFavoriteQuote = async(item) => {
  let favQuotes = JSON.parse(await AsyncStorage.getItem('favoriteQuotes'));
  const updatedFavQuotes = favQuotes.filter((quote) => quote.message !== item.message);
  await AsyncStorage.setItem('favoriteQuotes', JSON.stringify(updatedFavQuotes));  
}

/* FAVOURITE QUOTES FUNCTIONS END */

//Function to share a quote
export const shareQuote = async (quote) => {
  try {
    Share.share({
      message: ` " ${quote.message} " ${
        quote.author ? "\n\n" + quote.author : ""
      }`,
    });
  } catch (error) {
    console.log(`There was an error: ${error}`);
  }

}

export const shortenMessage = (message, maxLength = 40) => {
  if (message.length > maxLength) {
    return message.substring(0, maxLength) + '...';
  }
  
  return message;
}