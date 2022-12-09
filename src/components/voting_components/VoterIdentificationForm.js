import React, { useState } from "react";

export default function VoterIdentificationForm({ validateVoter }) {
  const [voterInfo, setVoterInfo] = useState({
    email: "",
    phoneNumber: "",
  });

  const onChangeHandler = (e) => {
    setVoterInfo({
      ...voterInfo,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <h2>Voter Identification</h2>
      <div>
        <label>Enter your email address</label>
        <input
          name="email"
          type="email"
          value={voterInfo.email}
          onChange={onChangeHandler}
        />
      </div>
      <div>
        <label>Enter your phone number</label>
        <input
          name="phoneNumber"
          type="tel"
          value={voterInfo.phoneNumber}
          onChange={onChangeHandler}
        />
      </div>
      <div>
        <button
          onClick={() => validateVoter(voterInfo.email, voterInfo.phoneNumber)}
        >
          Validate Voter Information
        </button>
      </div>
    </div>
  );
}
