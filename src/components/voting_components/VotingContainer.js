import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchElections } from "../../actionCreators/electionActionCreator";
import { fetchVoters } from "../../actionCreators/voterActionCreators";
import VoterIdentificationForm from "./VoterIdentificationForm";
import VotingScreen from "./VotingScreen";

const VALIDATION_NOT_STARTED = "VALIDATION_NOT_STARTED";
const VALIDATION_SUCCESS = "VALIDATION_SUCCESS";
const VALIDATION_FAILURE = "VALIDATION_FAILURE";
const ALREADY_VOTED = "ALREADY_VOTED";

export default function VotingContainer() {
  const { electionId } = useParams();
  const electionItem = useSelector((state) => state.elections.data[electionId]);
  const voters = useSelector((state) => state.voters.data);

  const dispatch = useDispatch();

  useEffect(() => {
    fetchElections(dispatch);
    fetchVoters(dispatch);
  }, [dispatch]);

  const [voterValidationState, setVoterValidationState] = useState(
    VALIDATION_NOT_STARTED
  );

  const [validVoterId, setValidVoterId] = useState(-1);

  const validateVoter = (email, phoneNumber) => {
    const validVoterIds = Object.keys(voters).filter(
      (voterId) =>
        voters[voterId]?.email === email &&
        voters[voterId]?.telNumber === phoneNumber
    );
    if (!validVoterIds || validVoterIds.length === 0) {
      setVoterValidationState(VALIDATION_FAILURE);
    } else if (electionItem.votedUserIds.includes(validVoterIds[0])) {
      setVoterValidationState(ALREADY_VOTED);
    } else {
      setVoterValidationState(VALIDATION_SUCCESS);
      setValidVoterId(validVoterIds[0]);
    }
  };

  const renderVoterIdentificationForm = () => {
    if (voterValidationState === VALIDATION_NOT_STARTED) {
      return <VoterIdentificationForm validateVoter={validateVoter} />;
    }
    return null;
  };

  const renderVoterValidationFailure = () => {
    if (voterValidationState === VALIDATION_FAILURE) {
      return (
        <div>
          <h3>Voter information is invalid</h3>
        </div>
      );
    }
    return null;
  };

  const renderVoterAlreadyVoted = () => {
    if (voterValidationState === ALREADY_VOTED) {
      return (
        <div>
          <h3>You have already voted in this election</h3>
        </div>
      );
    }
    return null;
  };

  const renderVotingScreen = () => {
    if (voterValidationState === VALIDATION_SUCCESS && validVoterId >= 0) {
      return (
        <VotingScreen validVoterId={validVoterId} electionId={electionId} />
      );
    }
    return null;
  };

  console.log(voterValidationState);

  return (
    <div>
      {renderVoterIdentificationForm()}
      {renderVoterValidationFailure()}
      {renderVoterAlreadyVoted()}
      {renderVotingScreen()}
    </div>
  );
}
