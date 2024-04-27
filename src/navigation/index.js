import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import QuotesScreen from '../screens/QuotesScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import FavouriteQuotes from '../screens/FavouriteQuotes';

const {Navigator, Screen} = createNativeStackNavigator();

const Navigation = () => {
  return (
    <SafeAreaProvider>
    <NavigationContainer>
       <Navigator initialRouteName='Quotes' screenOptions={{headerShown: false}}>
        <Screen
          name="Quotes"
          component={QuotesScreen}
        />
        <Screen name="FavouriteQuotes" component={FavouriteQuotes} />
      </Navigator>
    </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default Navigation;