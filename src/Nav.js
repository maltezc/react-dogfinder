import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

/** Show list of dogs on NavBar
 *
 * Props: dogs (array of dog objects)
 *
 * App -> Nav
 */
function Nav({ dogs }) {

  let activeStyle = {
    textDecoration: "underline",
  };

  let activeClassName = "underline";

  return (
    <nav className="Nav">

      {dogs.map((dog, i) => {
        return (
        <NavLink
          key={i}
          to={`/dogs/${dog}`}
          style={({ isActive }) =>
            isActive ? activeStyle : undefined
        }>
        {dog.name}
      </NavLink>)
      })}
    </nav>
  );
}

export default Nav;