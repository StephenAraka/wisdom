const initialState = {
  activeSubquote: null
}

const quotesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ACTIVE_QUOTE':
      return {
        ...state,
        activeSubquote: action.payload.quote,
      };

  
    default:
      return state;
  }
}

export default quotesReducer;
