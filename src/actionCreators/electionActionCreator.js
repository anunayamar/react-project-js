import axios from "axios";
import { ELECTION_ADDED, GET_ELECTION_LIST } from "../actions/electionAction";

export const saveElection = (dispatch, election) => {
  axios
    .post("http://localhost:3011/elections", election)
    .then((response) => {
      console.log(JSON.stringify(response));
      dispatch({
        type: ELECTION_ADDED,
        payload: response.data,
      });
    })
    .catch((error) => console.log(error));
};

export const fetchElections = (dispatch) => {
  axios
    .get("http://localhost:3011/elections")
    .then((response) => {
      const result = {};
      response?.data.forEach((election) => (result[election.id] = election));
      dispatch({
        type: GET_ELECTION_LIST,
        payload: result,
      });
    })
    .catch((error) => console.log(error));
};

export const updateElectionVotes = (dispatch, election) => {
  axios
    .put(`http://localhost:3011/elections/${election.id}`, election)
    .then((response) => {
      console.log(JSON.stringify(response));
    })
    .catch((error) => console.log(error));
  fetchElections(dispatch);
};