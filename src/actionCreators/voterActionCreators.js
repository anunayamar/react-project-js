import axios from "axios";
import {
  START_ADDING_VOTER,
  VOTER_ADDED,
  VOTER_ADDITION_COMPLETED,
} from "../actions/voterActions";
import { FINISHED, STARTED } from "../constants/voterConstants";

export const saveVoter = (dispatch, voter) => {
  dispatch({
    type: START_ADDING_VOTER,
    payload: {
      save_status: STARTED,
    },
  });

  axios
    .post("http://localhost:3010/voters", voter)
    .then((response) => {
      console.log(JSON.stringify(response));
      dispatch({
        type: VOTER_ADDED,
        payload: response.data,
      });
    })
    .catch((error) => console.log(error))
    .finally(() => {
      dispatch({
        type: VOTER_ADDITION_COMPLETED,
        payload: {
          data: FINISHED,
        },
      });
    });
};
