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
  quoteText: (isDarkTheme, isItalics, textSize) => ({
    color: isDarkTheme ? colors.lightGreyLightTheme : colors.lightGreyDarkTheme,
    fontSize: textSize,
    fontStyle: isItalics ? 'italic' : 'normal',
    marginTop: 32,
    marginBottom: 32
  }),
  sourceText: (isDarkTheme) => ({
    color: isDarkTheme ? colors.lightGreyLightTheme : colors.lightGreyDarkTheme,
    fontStyle: 'italic'
  }),
  normalText: (isDarkTheme) => ({
    color: isDarkTheme ? colors.lightGreyLightTheme : colors.textColorLightTheme,
  }),
  smallText: (isDarkTheme) => ({
    color: isDarkTheme ? colors.lightGreyLightTheme : colors.textColorLightTheme,
    fontSize: 12,
  })
});

export default globalStyles;
