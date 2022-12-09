import "../../styling/election_components/electionContainer.css";
import React, { useState } from "react";
import ElectionForm from "./ElectionForm";
import ElectionList from "./ElectionList";

const SHOW_ELECTIONS = "show_elections";
const SHOW_ELECTION_FORM = "show_election_form";

export default function ElectionContainer() {
  const [formDisplayState, setFormDisplayState] = useState({
    SHOW_ELECTIONS: true,
    SHOW_ELECTION_FORM: false,
  });

  const handleOnClick = (event) => {
    const currentTargetName = event.target.name;
    if (currentTargetName === SHOW_ELECTIONS) {
      setFormDisplayState({
        SHOW_ELECTIONS: true,
        SHOW_ELECTION_FORM: false,
      });
    } else {
      setFormDisplayState({
        SHOW_ELECTIONS: false,
        SHOW_ELECTION_FORM: true,
      });
    }
  };

  return (
    <div>
      <button
        className="btnElectionContainer"
        name={SHOW_ELECTIONS}
        onClick={handleOnClick}
      >
        Show list of Elections
      </button>
      <button
        className="btnElectionContainer"
        name={SHOW_ELECTION_FORM}
        onClick={handleOnClick}
      >
        Create new election
      </button>
      {formDisplayState.SHOW_ELECTIONS && <ElectionList />}
      {formDisplayState.SHOW_ELECTION_FORM && <ElectionForm />}
    </div>
  );
}
