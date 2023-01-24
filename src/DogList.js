import React from "react";
import { Link } from "react-router-dom";

/** Show display for list of dogs
 *
 * Props: dogs (array of dog objects)
 *
 * App -> DogList -> DogDetail
 */
function DogList({ dogs }) {
  return (
    <div>
      <div><h2>Dog List</h2></div>

      {dogs.map((dog, i) => {
        return (
          <div key={i}>
            <Link to={`/dogs/${dog.name}`}>
              <img src={`/${dog.src}.jpg`} alt={dog.name} />
              <p>{dog.name}</p>
            </Link>
            <br />
            <br />
          </div>
        );
      })}
    </div>
  );
}

export default DogList;

// {name: 'Duke', age: 3, src: 'duke', facts: Array(3)}
