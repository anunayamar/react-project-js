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

  const [submitted, setSubmitted] = useState(false);

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
    setSubmitted(true);
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
          <label className="item">Enter the response {i + 1}</label>
          <input
            className="item"
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
    <div className="electionForm">
      <h2>Election Form</h2>
      <div className="electionQuestion">
        <label className="item">Enter the election question</label>
        <input
          className="item"
          name="electionQuestion"
          type="text"
          placeholder="Enter the election question"
          value={electionForm.question}
          onChange={onQuestionChangeHandler}
        />
      </div>
      {renderResponses()}
      {!submitted && (
        <div>
          <button
            className="btnElectionForm"
            onClick={() => setNumberOfResponses(numberOfResponses + 1)}
          >
            Add Responses
          </button>
          <button className="btnElectionForm" onClick={onSaveHandler}>
            Submit Election Form
          </button>
        </div>
      )}
      <div>{submitted && <h3>Election has been created successfully</h3>}</div>
    </div>
  );
}
