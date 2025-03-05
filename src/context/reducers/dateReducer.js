import { numberOfDayOfYear } from "../../utils/helpers";

const initialState = {
  date: new Date().toLocaleDateString("en-GB", {
    weekday: "short",
    month: "long",
    day: "2-digit",
  }),
  dateIndex: numberOfDayOfYear(new Date())
}

const dateReducer = (state = initialState, action) => {
  switch(action.type){
    
    case 'UPDATE_DATE':
      return{
        ...state,
        date: action.payload
      }
    
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