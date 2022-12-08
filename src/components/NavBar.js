import React from "react";
import { Link } from "react-router-dom";

import "../styling/NavBar.css";

export default function NavBar() {
  return (
    <nav>
      <Link className="link" to="/home">
        Home
      </Link>
      <Link className="link" to="/elections">
        Elections
      </Link>
      <Link className="link" to="/voters">
        Voters
      </Link>
      <Link className="link" to="/vote">
        Cast Your Votes
      </Link>
    </nav>
  );
}
