import { numberOfDayOfYear } from "../../utils/helpers";

const initialState = {
  date: new Date().toLocaleDateString("en-GB", {
    weekday: "short",
    month: "long",
    day: "2-digit",
  }),
  dateIndex: numberOfDayOfYear()
}

const dateReducer = (state = initialState, action) => {
  switch(action.type){
    
    case 'UPDATE_DATE':
      console.log("Payload Updated Date: ", action.payload);
      console.log("Date: ", new Date());
      return{
        ...state,
        date: action.payload
      }
    
    case 'UPDATE_DATE_INDEX':
      console.log("Payload:", action.payload);
      return{
        ...state, 
        dateIndex: action.payload
      }

      default:
      return state;

   
  }
}

export default dateReducer;