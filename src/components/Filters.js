import React from 'react'

const Filters = ({greasy, toggleGreasy, byWeight, toggleByWeight, unbanishAllHogs}) => {
  return <div>
    <button onClick={toggleGreasy}>{greasy ? "Show Me All My Children" : "Gimme the Greasy Ones"}</button>
    <button onClick={toggleByWeight}>{byWeight ? "Order My Children By Name" : "Order My Children By Beefiness"}</button>
    <button onClick={unbanishAllHogs}>Show mercy on my wretched sons.</button>
  </div>
}


export default Filters;
