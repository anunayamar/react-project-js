import React, { useState } from "react";
import { useSelector } from "react-redux";

export default function VotingScreen({ validVoterId, electionId }) {
  const electionItem = useSelector((state) => state.elections.data[electionId]);
  const [selectedResponseKey, setSelectedResponseKey] = useState("");

  console.log(`${validVoterId} ${JSON.stringify(electionItem)}`);
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
    // const newElectionItem = {
    //     ...electionItem,
    //     responseVotes: {
    //         ...electionItem.responseVotes,
    //         [selectedResponseKey]: electionItem.responseVotes.
    //     }
    // }
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
      <div>
        <button onClick={castVoteHandler}>Cast Vote</button>
      </div>
    </div>
  );
}
