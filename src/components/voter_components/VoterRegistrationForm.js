import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveVoter } from "../../actionCreators/voterActionCreators";
import { STARTED } from "../../constants/voterConstants";

import "../../styling/voter_components/voterRegistrationForm.css";

export default function VoterRegistrationForm() {
  const save_status = useSelector((state) => state.voters.save_status);
  const dispatch = useDispatch();

  const [registrationForm, setRegistrationForm] = useState({
    fName: "",
    lName: "",
    address: "",
    city: "",
    dob: "",
    email: "",
    telNumber: "",
  });

  const [registered, setRegistered] = useState(false);

  const onChangeHandler = (event) => {
    console.log(`${event.target.name} ${event.target.value}`);
    setRegistrationForm({
      ...registrationForm,
      [event.target.name]: event.target.value,
    });
  };

  const onSaveHandler = () => {
    if (save_status !== STARTED) {
      setRegistered(true);
      saveVoter(dispatch, registrationForm);
    }
  };

  return (
    <div className="mainVoterForm">
      <div>
        <label>First Name</label>
        <input
          name="fName"
          type="text"
          placeholder="Enter the first name"
          value={registrationForm.fName}
          onChange={onChangeHandler}
        />
      </div>
      <div>
        <label>Last Name</label>
        <input
          name="lName"
          type="text"
          placeholder="Enter the last name"
          value={registrationForm.lName}
          onChange={onChangeHandler}
        />
      </div>
      <div>
        <label>Address</label>
        <input
          name="address"
          type="text"
          placeholder="Enter the address"
          value={registrationForm.address}
          onChange={onChangeHandler}
        />
      </div>
      <div>
        <label>City</label>
        <input
          name="city"
          type="text"
          placeholder="Enter the city"
          value={registrationForm.city}
          onChange={onChangeHandler}
        />
      </div>
      <div>
        <label>Date of Birth</label>
        <input
          name="dob"
          type="date"
          placeholder="Enter the date of birth"
          value={registrationForm.dob}
          onChange={onChangeHandler}
        />
      </div>
      <div>
        <label>Email</label>
        <input
          name="email"
          type="email"
          placeholder="Enter the email address"
          value={registrationForm.email}
          onChange={onChangeHandler}
        />
      </div>
      <div>
        <label>Phone Number</label>
        <input
          name="telNumber"
          type="tel"
          placeholder="Enter the phone number"
          value={registrationForm.telNumber}
          onChange={onChangeHandler}
        />
      </div>
      {!registered && (
        <button className="btnVoterForm" onClick={onSaveHandler}>
          Complete Registration
        </button>
      )}
      {registered && <h3>Voter has been registered</h3>}
    </div>
  );
}
