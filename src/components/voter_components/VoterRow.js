import "../../styling/voter_components/voterRow.css";
import React, { useState } from "react";

export default function VoterRow({ voter }) {
  const [currentVoter, setCurrentVoter] = useState(voter);

  return (
    <tr>
      <td>
        <input type="checkbox" />
      </td>
      <td>{currentVoter.fName}</td>
      <td>{currentVoter.lName}</td>
      <td>{currentVoter.address}</td>
      <td>{currentVoter.city}</td>
      <td>{currentVoter.dob}</td>
      <td>{currentVoter.email}</td>
      <td>{currentVoter.telNumber}</td>
      <td>
        <button>Edit</button>
      </td>
    </tr>
  );
}
