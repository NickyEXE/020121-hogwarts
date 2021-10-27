import React from 'react'

const HogBack = ({ greased, specialty, weight, name, banish, ["highest medal achieved"]: medal }) => {
  console.log(banish)
  return <div className="pigTile">
    <h3>{name}</h3>
    <p><strong>Is this hog greased? </strong>{greased ? "You betcha!" : ":( No"}</p>
    <p><strong>Specialty: </strong>{specialty}</p>
    <p><strong>Weight: </strong>{weight} fridges.</p>
    <p><strong>Highest Medal Achieved: </strong>{ medal }.</p>
    <button onClick={() => banish(name)}>Hide this Hog From My Sight</button>
  </div>
}

export default HogBack
