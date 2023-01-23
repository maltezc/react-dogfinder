import React from "react";
import { Link } from "react-router-dom";

function Nav({ dogsList }) {
  return (
    <nav className="Nav">

      {dogsList.map(dog => {
        return (<Link to="/dog">
        {dog.name}
      </Link>)
      })}
    </nav>
  );
}

export default Nav;