import React from "react";
import { useParams } from "react-router-dom";

function DogDetails({ dogs }) {
  const { name } = useParams();

  const dog = dogs.find((dog) => dog.name === name);

  return (
    <div>
      <h1>Dog Details</h1>

      <h3>Name: {dog.name}</h3>

      <img src={`/${dog.src}.jpg`} alt={dog.name} />
      <p>Age: {dog.age}</p>

      <div>
        <h3>Facts about {dog.name}: </h3>
        <ul>
          {dog.facts.map((fact, i) => {
            return <li key={i}>{fact}</li>;
          })}
        </ul>
      </div>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default DogDetails;

// {name: 'Duke', age: 3, src: 'duke', facts: Array(3)}
