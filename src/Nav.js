import React from "react";
import { Link } from "react-router-dom";

function Nav({ getDogs, dogs }) {
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