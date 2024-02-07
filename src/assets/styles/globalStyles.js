import { StyleSheet } from 'react-native';

import colors from '../../constants/colors';

// todo: cleanup
const globalStyles = StyleSheet.create({
  SafeAreaContainer: (isDarkMode) => ({
    display: 'flex',
    flex: 1,
    backgroundColor: isDarkMode ? '#000' : '#fff',
    paddingVertical: 32,
  }),
  quoteText: (isDarkTheme, isItalics) => ({
    color: isDarkTheme ? '#fff' : "#000",
    fontSize: 20,
    fontStyle: isItalics ? 'italic' : 'normal'
  })
});

export default globalStyles;
