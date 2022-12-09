import { ELECTION_ADDED, GET_ELECTION_LIST } from "../actions/electionAction";

const initialState = {
  data: {},
};

export const elections = (state = initialState, action) => {
  switch (action.type) {
    case ELECTION_ADDED:
      return {
        ...state,
        data: {
          ...state.data,
          [action.payload.id]: action.payload,
        },
      };
    case GET_ELECTION_LIST:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};
