import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { saveElection } from "../../actionCreators/electionActionCreator";
import "../../styling/election_components/electionForm.css";

export default function ElectionForm() {
  const [numberOfResponses, setNumberOfResponses] = useState(0);
  const [electionForm, setElectionForm] = useState({
    electionQuestion: "",
    responses: {},
    responseVotes: {},
    votedUserIds: [],
  });

  const dispatch = useDispatch();

  const onResponseChangeHandler = (e) => {
    setElectionForm({
      ...electionForm,
      responses: {
        ...electionForm.responses,
        [e.target.name]: e.target.value,
      },
      responseVotes: {
        ...electionForm.responseVotes,
        [e.target.name]: 0,
      },
    });
  };

  const onQuestionChangeHandler = (e) => {
    setElectionForm({
      ...electionForm,
      electionQuestion: e.target.value,
    });
  };

  const onSaveHandler = () => {
    const election = {
      ...electionForm,
    };
    saveElection(dispatch, election);
    resetElectionForm();
  };

  const resetElectionForm = () => {
    setElectionForm({
      electionQuestion: "",
      responses: {},
      responseVotes: {},
      votedUserIds: [],
    });
  };

  const renderResponses = () => {
    const responseComponents = [];
    for (let i = 0; i < numberOfResponses; i++) {
      const key = `response-${i}`;
      responseComponents.push(
        <div className="electionQuestion" key={key}>
          <label>Enter the response {i + 1}</label>
          <input
            name={key}
            type="text"
            value={electionForm.responses[`response-${i}`]}
            onChange={onResponseChangeHandler}
          />
        </div>
      );
    }
    return responseComponents;
  };

  return (
    <div>
      <div className="electionQuestion">
        <label>Enter the election question</label>
        <input
          name="electionQuestion"
          type="text"
          placeholder="Enter the election question"
          value={electionForm.question}
          onChange={onQuestionChangeHandler}
        />
      </div>
      {renderResponses()}
      <div>
        <button onClick={() => setNumberOfResponses(numberOfResponses + 1)}>
          Add Responses
        </button>
        <button onClick={onSaveHandler}>Submit Election Form</button>
      </div>
    </div>
  );
}
