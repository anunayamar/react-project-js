import React from "react";
import { Link } from "react-router-dom";

import "../styling/NavBar.css";

export default function NavBar() {
  return (
    <nav className="nav">
      <Link className="link" to="/elections">
        Elections
      </Link>
      <Link className="link" to="/voters">
        Voters
      </Link>
    </nav>
  );
}
