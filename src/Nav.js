import React from "react";
import { Link } from "react-router-dom";

// TODO: doc strings


function Nav({ dogs }) {
  return (
    <nav className="Nav">

      {dogs.map((dog, i) => {
        return (<Link key={i} to="/dog">
        {dog.name}
      </Link>)
      })}
    </nav>
  );
}

export default Nav;