import React from 'react'
import HogCard from './HogCard'

const HogIndex = (props) => {
  return <div className="ui grid container">
    {props.hogs.map(hog => <HogCard key={hog.name} banish={props.banish} {...hog}/>)}
  </div>
}


export default HogIndex
