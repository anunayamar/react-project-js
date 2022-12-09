import "../../styling/election_components/electionResult.css";
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
      <div className="responseContainer" key={responseKey}>
        <label className="responseText">
          {electionItem.responses[responseKey]}
        </label>
        <label className="responseVoteCount">
          {electionItem.responseVotes[responseKey]}
        </label>
      </div>
    );
  };

  return (
    <div className="main">
      <div className="headingSection">Election Result</div>
      <div>
        <label className="electionQuestion">Election Question:</label>
        <label className="electionQuestionValue">
          {electionItem.electionQuestion}
        </label>
      </div>
      <div>
        <div className="headingSection">Responses</div>
        {Object.keys(electionItem.responses).map((responseKey) =>
          renderResponseNameAndVoteCount(responseKey)
        )}
      </div>
      <div>
        <div className="headingSection">Total Vote Count</div>
        <label className="voteCount">
          {electionItem.votedUserIds?.length || 0} votes have been casted
        </label>
      </div>
    </div>
  );
}
