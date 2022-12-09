import { Route, Routes } from "react-router-dom";
import ElectionContainer from "./components/election_components/ElectionContainer";
import ElectionResult from "./components/election_components/ElectionResult";

import Home from "./components/Home";
import NavBar from "./components/NavBar";
import VoterContainer from "./components/voter_components/VoterContainer";
import VotingContainer from "./components/voting_components/VotingContainer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/elections" element={<ElectionContainer />} />
        <Route path="/vote">
          <Route path="elections/:electionId" element={<VotingContainer />} />
        </Route>
        <Route path="/results">
          <Route path="elections/:electionId" element={<ElectionResult />} />
        </Route>
        <Route path="/voters" element={<VoterContainer />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
