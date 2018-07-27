import React from 'react'
import '../styles/CountdownTimer.css'

const CountdownTimer = (props) => {
  return (
    <div className="countdownContainer">
      <div className="countdown">
        <span className="minutes">
          { Math.floor(props.currentCount / 60) }
        </span>
        :
        <span className="seconds">
          { (props.currentCount % 60) >= 10 ? (props.currentCount % 60) : '0'+(props.currentCount % 60) }
        </span>
      </div>
    </div>
  )
}

export default CountdownTimer