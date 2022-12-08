import { Route, Routes } from "react-router-dom";
import ElectionContainer from "./components/ElectionContainer";
import Home from "./components/Home";
import VoterContainer from "./components/VoterContainer";
import VotingContainer from "./components/VotingContainer";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/elections" element={<ElectionContainer />} />
        <Route path="/voters" element={<VoterContainer />} />
        <Route path="/vote" element={<VotingContainer />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
