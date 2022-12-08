import axios from "axios";
import {
  GET_VOTER_LIST,
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

export const fetchVoters = (dispatch) => {
  axios
    .get("http://localhost:3010/voters")
    .then((response) => {
      const result = {};
      response?.data.forEach((voter) => (result[voter.id] = voter));
      dispatch({
        type: GET_VOTER_LIST,
        payload: result,
      });
    })
    .catch((error) => console.log(error));
};

export const deleteVoters = (dispatch, voterIds) => {
  voterIds.forEach((voterId) => {
    axios
      .delete(`http://localhost:3010/voters/${voterId}`)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.log(error));
  });
  fetchVoters(dispatch);
};

export const updateVoter = (dispatch, voter) => {
  axios
    .put(`http://localhost:3010/voters/${voter.id}`, voter)
    .then((response) => {
      console.log(JSON.stringify(response));
    })
    .catch((error) => console.log(error));
  fetchVoters(dispatch);
};