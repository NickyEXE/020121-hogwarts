import React from 'react'

const HogFront = ({name}) => {

  // "Galaxy Note"
  // "galaxy note" => .toLowerCase
  // ["galaxy", "note"] => .split(" ")
  // "galaxy_note" => .join("_")

  let pigImage = require(`../hog-imgs/${name.toLowerCase().split(" ").join("_")}.jpg`) //how can we dynamically generate the filename?

  return <div className="pigTile">
    <h3>{name}</h3>
    <img src={pigImage} alt={name} />
  </div>
}

export default HogFront
