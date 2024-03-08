const initialState = {
  dateIndex: 68
}

const dateReducer = (state = initialState, action) => {
  switch(action.type){
    case 'UPDATE_DATE_INDEX':
      return{
        ...state, 
        dateIndex: action.payload
      }
      default:
      return state;
  }
}

export default dateReducer;