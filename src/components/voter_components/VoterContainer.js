import "../../styling/voter_components/voterContainer.css";

import React, { useState } from "react";
import VoterList from "./VoterList";
import VoterRegistrationForm from "./VoterRegistrationForm";

const SHOW_VOTERS = "showVoters";
const SHOW_REGISTRATION_FORM = "showRegistrationForm";

export default function VoterContainer() {
  const [formDisplayState, setFormDisplayState] = useState({
    SHOW_VOTERS: true,
    SHOW_REGISTRATION_FORM: false,
  });

  const handleOnClick = (event) => {
    const currentTargetName = event.target.name;
    if (currentTargetName === SHOW_VOTERS) {
      setFormDisplayState({
        SHOW_VOTERS: true,
        SHOW_REGISTRATION_FORM: false,
      });
    } else {
      setFormDisplayState({
        SHOW_VOTERS: false,
        SHOW_REGISTRATION_FORM: true,
      });
    }
  };

  return (
    <div>
      <button
        className="btnVoterContainer"
        name={SHOW_VOTERS}
        onClick={handleOnClick}
      >
        Show list of Voters
      </button>
      <button
        className="btnVoterContainer"
        name={SHOW_REGISTRATION_FORM}
        onClick={handleOnClick}
      >
        Register Voter
      </button>
      {formDisplayState.SHOW_REGISTRATION_FORM && <VoterRegistrationForm />}
      {formDisplayState.SHOW_VOTERS && <VoterList />}
    </div>
  );
}
