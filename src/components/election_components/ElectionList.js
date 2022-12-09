import "../../styling/election_components/electionList.css";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchElections } from "../../actionCreators/electionActionCreator";

export default function ElectionList() {
  const elections = useSelector((state) => state.elections.data);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const renderElectionRow = (election) => {
    return (
      <tr key={election.id}>
        <td>{election.electionQuestion}</td>
        <td>
          <button
            className="btnElectionRow"
            onClick={() => navigate(`/results/elections/${election.id}`)}
          >
            View Result
          </button>
          <button
            className="btnElectionRow"
            onClick={() => navigate(`/vote/elections/${election.id}`)}
          >
            Vote
          </button>
        </td>
      </tr>
    );
  };

  useEffect(() => {
    fetchElections(dispatch);
  }, [dispatch]);

  return (
    <div>
      <table>
        <thead className="tableHeading">
          <tr>
            <th>Election Questions</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {elections &&
            Object.keys(elections).map((electionId) =>
              renderElectionRow(elections[electionId])
            )}
        </tbody>
      </table>
    </div>
  );
}
