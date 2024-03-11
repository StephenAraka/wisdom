import { numberOfDayOfYear } from "../../utils/helpers";

const initialState = {
  dateIndex: numberOfDayOfYear()
}

const dateReducer = (state = initialState, action) => {
  switch(action.type){
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