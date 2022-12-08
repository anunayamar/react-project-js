import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchVoters } from "../../actionCreators/voterActionCreators";
import VoterRow from "./VoterRow";

export default function VoterList() {
  const votersMap = useSelector((state) => state.voters.data);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchVoters(dispatch);
  }, []);

  return (
    <div>
      <table>
        <thead className="tableHeading">
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Address</th>
            <th>City</th>
            <th>Date of Birth</th>
            <th>Email</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {votersMap &&
            Object.keys(votersMap).map((voterId) => (
              <VoterRow voter={votersMap[voterId]} key={voterId} />
            ))}
        </tbody>
      </table>
    </div>
  );
}
