import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export default function ElectionResult() {
  const { electionId } = useParams();
  const electionItem = useSelector((state) => state.elections.data[electionId]);
  console.log(JSON.stringify(electionItem));

  const renderResponseNameAndVoteCount = (responseKey) => {
    console.log(responseKey);
    return (
      <div key={responseKey}>
        <label>{electionItem.responses[responseKey]}</label>
        <label>{electionItem.responseVotes[responseKey]}</label>
      </div>
    );
  };

  return (
    <div>
      <h2>Election Result</h2>
      <div>
        <label>Election Question:</label>
        <label>{electionItem.electionQuestion}</label>
      </div>
      <div>
        <h3>Responses</h3>
        {Object.keys(electionItem.responses).map((responseKey) =>
          renderResponseNameAndVoteCount(responseKey)
        )}
      </div>
      <div>
        <h3>Total Vote Count</h3>
        <label>
          {electionItem.votedUserIds?.length || 0} votes have been casted
        </label>
      </div>
    </div>
  );
}
