import React, { useState } from "react";

export default function VoterRegistrationForm() {
  const [registrationForm, setRegistrationForm] = useState({
    fName: "",
    lName: "",
    address: "",
    city: "",
    dob: "",
    email: "",
    telNumber: "",
  });

  const onChangeHandler = (event) => {
    console.log(`${event.target.name} ${event.target.value}`);
    setRegistrationForm({
      ...registrationForm,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div>
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
      <button>Complete Registration</button>
    </div>
  );
}
