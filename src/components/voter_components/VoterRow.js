import "../../styling/voter_components/voterRow.css";
import React, { useState } from "react";
import { updateVoter } from "../../actionCreators/voterActionCreators";
import { useDispatch } from "react-redux";

export default function VoterRow({ voter, checkboxChangeHandler }) {
  console.log("VoterRow");
  const [currentVoter, setCurrentVoter] = useState(voter);
  const [editable, setEditable] = useState(false);

  const dispatch = useDispatch();

  const onEditableFieldHandler = (event) => {
    setCurrentVoter({
      ...currentVoter,
      [event.target.name]: event.target.value,
    });
  };

  const onSaveHandler = () => {
    setEditable(!editable);
    updateVoter(dispatch, currentVoter);
  };

  return (
    <tr>
      <td>
        <input
          type="checkbox"
          onChange={(e) => checkboxChangeHandler(e, voter.id)}
        />
      </td>
      {!editable && (
        <>
          <td>{voter.fName}</td>
          <td>{voter.lName}</td>
          <td>{voter.address}</td>
          <td>{voter.city}</td>
          <td>{voter.dob}</td>
          <td>{voter.email}</td>
          <td>{voter.telNumber}</td>
        </>
      )}
      {editable && (
        <>
          <td>
            <input
              name="fName"
              type="text"
              value={currentVoter.fName}
              onChange={onEditableFieldHandler}
            />
          </td>
          <td>
            <input
              name="lName"
              type="text"
              value={currentVoter.lName}
              onChange={onEditableFieldHandler}
            />
          </td>
          <td>
            <input
              name="address"
              type="text"
              value={currentVoter.address}
              onChange={onEditableFieldHandler}
            />
          </td>
          <td>
            <input
              name="city"
              type="text"
              value={currentVoter.city}
              onChange={onEditableFieldHandler}
            />
          </td>
          <td>
            <input
              name="dob"
              type="text"
              value={currentVoter.dob}
              onChange={onEditableFieldHandler}
            />
          </td>
          <td>
            <input
              name="email"
              type="text"
              value={currentVoter.email}
              onChange={onEditableFieldHandler}
            />
          </td>
          <td>
            <input
              name="telNumber"
              type="text"
              value={currentVoter.telNumber}
              onChange={onEditableFieldHandler}
            />
          </td>
        </>
      )}

      <td>
        <button onClick={() => setEditable(!editable)}>Edit</button>
        <button onClick={onSaveHandler}>Save</button>
      </td>
    </tr>
  );
}
