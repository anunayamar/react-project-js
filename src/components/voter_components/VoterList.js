import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteVoters,
  fetchVoters,
} from "../../actionCreators/voterActionCreators";
import VoterRow from "./VoterRow";
import "../../styling/voter_components/voterList.css";

export default function VoterList() {
  console.log(`VoterList`);
  const votersMap = useSelector((state) => state.voters.data);
  const dispatch = useDispatch();
  const listOfVoterIdSelected = useRef([]);

  useEffect(() => {
    fetchVoters(dispatch);
  }, [dispatch]);

  const checkboxChangeHandler = (event, voterId) => {
    if (event.target.checked) {
      listOfVoterIdSelected.current.push(voterId);
    } else {
      listOfVoterIdSelected.current = listOfVoterIdSelected.current.filter(
        (id) => id !== voterId
      );
    }
  };

  const deleteHandler = () => {
    if (listOfVoterIdSelected && listOfVoterIdSelected?.current?.length >= 0) {
      const idsToBeDeleted = [...listOfVoterIdSelected?.current];
      listOfVoterIdSelected.current = [];
      deleteVoters(dispatch, idsToBeDeleted);
    }
  };

  return (
    <div>
      <table className="voterList">
        <thead className="tableHeading">
          <tr>
            <th>
              <button className="btnVoterRow" onClick={deleteHandler}>
                Delete
              </button>
            </th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Address</th>
            <th>City</th>
            <th>Date of Birth</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {votersMap &&
            Object.keys(votersMap).map((voterId) => (
              <VoterRow
                voter={votersMap[voterId]}
                key={voterId}
                checkboxChangeHandler={checkboxChangeHandler}
              />
            ))}
        </tbody>
      </table>
    </div>
  );
}
