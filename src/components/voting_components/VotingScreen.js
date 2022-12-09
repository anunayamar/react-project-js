import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateElectionVotes } from "../../actionCreators/electionActionCreator";

export default function VotingScreen({ validVoterId, electionId }) {
  const electionItem = useSelector((state) => state.elections.data[electionId]);
  const [selectedResponseKey, setSelectedResponseKey] = useState("");
  const [votingStatus, setVotingStatus] = useState(false);

  const dispatch = useDispatch();

  const onChangeRadio = (e) => {
    setSelectedResponseKey(e.target.id);
  };

  const renderChoice = (responseKey) => {
    const responseValue = electionItem.responses[responseKey];
    return (
      <div key={responseKey}>
        <label>{responseValue}</label>
        <input
          type="radio"
          id={responseKey}
          name="choice"
          value={responseValue}
          onChange={onChangeRadio}
        />
      </div>
    );
  };

  const castVoteHandler = () => {
    const newElectionItem = {
      ...electionItem,
      responseVotes: {
        ...electionItem.responseVotes,
        [selectedResponseKey]:
          electionItem.responseVotes[selectedResponseKey] + 1,
      },
      votedUserIds: [...electionItem.votedUserIds, validVoterId],
    };
    setVotingStatus(true);
    updateElectionVotes(dispatch, newElectionItem);
  };

  return (
    <div>
      <h2>Welcome to the voting screen</h2>
      <div>
        <label>Voting Question:</label>
        <label>{electionItem.electionQuestion}</label>
      </div>
      <div>
        {electionItem &&
          Object.keys(electionItem.responses).map((responseKey) =>
            renderChoice(responseKey)
          )}
      </div>
      {!votingStatus && (
        <div>
          <button onClick={castVoteHandler}>Cast Vote</button>
        </div>
      )}
      {votingStatus && <h3>You have successfully casted your vote</h3>}
    </div>
  );
}
