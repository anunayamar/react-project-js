import {
  START_ADDING_VOTER,
  VOTER_ADDED,
  VOTER_ADDITION_COMPLETED,
} from "../actions/voterActions";
import { NOT_STARTED } from "../constants/voterConstants";

const initialState = {
  data: {},
  save_status: NOT_STARTED,
};

export const voters = (state = initialState, action) => {
  console.log(JSON.stringify(action));
  switch (action.type) {
    case START_ADDING_VOTER:
      return {
        ...state,
        save_status: action.payload,
      };
    case VOTER_ADDED:
      return {
        ...state,
        data: {
          ...state.data,
          [action.payload.id]: action.payload,
        },
      };
    case VOTER_ADDITION_COMPLETED:
      return {
        ...state,
        save_status: action.payload,
      };

    default:
      return state;
  }
};
