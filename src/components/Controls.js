import React from 'react'
import '../styles/Controls.css'

const Controls = (props) => {
  return (
    <div className="controlsContainer">
      <div className="buttonsContainer">
        <button className="controlButton pause" onClick={props.pause} >Pause</button>
        <button className="controlButton start" onClick={props.start} >Start</button>
        <button className="controlButton reset" onClick={props.reset} >Reset</button>
      </div>
    </div>
  )
}

export default Controls