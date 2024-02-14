export const toggleTheme = () => ({
  type: 'TOGGLE_THEME'
});

export const initializeTheme = ( isDarkTheme ) => ({
  type: 'INITIALIZE_THEME',
  payload: { isDarkTheme }
});