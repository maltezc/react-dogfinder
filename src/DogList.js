import React from 'react'

function DogList({ dogs }) {
  return (
    <div>
      <div>DogList</div>

      { dogs.map(dog => {
        return (
          <div>
            <p>{ dog.name }</p>
            <img src={`${dog.src}.jpg`} alt={dog.name}/>
          </div>
        )
      }) }
  </div>
  )
}

export default DogList

// {name: 'Duke', age: 3, src: 'duke', facts: Array(3)}