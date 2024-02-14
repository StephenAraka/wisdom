const initialState = {
  isDarkTheme: true
};

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return {
        ...state,
        isDarkTheme: !state.isDarkTheme,
      };

    case 'INITIALIZE_THEME':
      return {
        ...state,
        isDarkTheme: action.payload.isDarkTheme,
      };
  
    default:
      return state;
  }
}

export default themeReducer;
